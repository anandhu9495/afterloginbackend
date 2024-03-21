const User = require('../Modals/UserSchema')

const jwt = require('jsonwebtoken')

exports.register = async (req, res) => {
    console.log('inside register function');

    try {
        const {name, address, gender,username,password} = req.body;
        console.log(`${username} ${address} ${gender}`);

        const existingUser = await User.findOne({ username })
        if (existingUser) {
            return res.status(402).json('user already exists')
        } else {
            const newUser = new User({
                name, address, gender,username,password
            });
            await newUser.save();
            return res.status(200).json('data saved successfully')
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json('server error')
    }

    
};


exports.login = async(req,res) => {
    const {username,password} = req.body
    try{

      

      const user = await User.findOne({username,password})

      if(user){
        const token = jwt.sign({userId:user._id},'superkey2024')
        console.log(token);
        
        res.status(200).json({user,token})
        
      }
      else{
        res.status(401).json('invalid login address')
      }


    }
    catch(err){
        console.log("error"+ err.message)
    }
}


exports.logout = async (req, res) => {
    try {
        res.status(200).json({ message: 'Logout successful' });
    } 
    catch (error) {
        console.error('error', error);
        res.status(500).json({ error: 'error' })
    }
};


exports.resetPassword = async (req, res) => {
    try {
        const { userId, newPassword } = req.body;

        
        const token = req.headers.authorization.split(' ')[1]
        const decodedToken = jwt.verify(token, 'superkey2024')

        
        const user = await User.findById(decodedToken.userId)
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        
        user.password = newPassword;
        await user.save()

        
        return res.status(200).json({ message: 'Password changed successful' })
    } 
    catch (error) {
      console.error('error :', error);
      return res.status(500).json({ error: 'error' })
    }
};
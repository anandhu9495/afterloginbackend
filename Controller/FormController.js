const Form = require('../Modals/FormSchema')

exports.addForm = async(req,res) => {
    console.log('inside addform');

    const userId = req.payload

    const file = req.file.filename

    const {name,password,DOB,number,select,address} = req.body

    console.log(userId,name,password,DOB,number,select,address,file);

    // res.status(200).json('data added')

    try{
        const existForm = await Form.findOne({password})
        if(existForm){
            res.status(401).json('already exist')
        }
        else{
            const newform = new Form({

                name,password,DOB,number,select,address,file,userId

            })
            await newform.save()
            res.status(200).json(newform)
        }

        
    }
    catch(err){
        res.status(404).json({message:err.message})
    }

}
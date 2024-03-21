const multer = require('multer')

const storage = multer.diskStorage({
    destination:(req,file,callback) => {
        callback(null,'./Uploads')
    },

    

    filename:(req,file,callback) => {
        const filename = `image-${Date.now()}-${file.originalname}`

        callback(null,filename)
    }
})


const fileFilter = (req,file,callback) => {
    const allowedMimeTypes = ['image/png', 'image/jpeg','image/jpg']

    if (allowedMimeTypes.includes(file.mimetype)){
        callback(null,true)
    }
    else{
        callback(null,false)
        return callback(new Error("invalid file type... must br includs png or jpeg or jpg"))
    }
}

const multerConfig = multer({
    storage,fileFilter
})

module.exports = multerConfig
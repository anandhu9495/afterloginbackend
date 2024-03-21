const mongoose = require('mongoose')

const FormSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        
    },
    DOB:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true,
       
    },
    select:{
        type:String,
        required:true,

    },
    address:{
        type:String,
        required:true,


    },
    file:{
        type:String,
        required:true,


    },
    userId:{
        type:String,
        required:true,

    }

})

const Form = mongoose.model('Form',FormSchema)

module.exports = Form



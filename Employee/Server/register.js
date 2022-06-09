const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    FirstName:{
        type:String,
        required:true,
    },
    Surname:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
    },
    Password:{
        type:String,
        required:true,

    },
    
   
});
const register =mongoose.model("register",registerSchema);
module.exports=register;
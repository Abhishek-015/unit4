const mongoose=require("mongoose");

const userSchema= new mongoose.Schema({
    first_name:{type:String,required:false},
    last_name:{type:String,required:false},
    profile_pic:{type:String,required:false}

})


module.exports=mongoose.model("users",userSchema)
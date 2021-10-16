const mongoose=require("mongoose");

const productSchema= new mongoose.Schema({
    product_name:{type:String ,required:true},
    price:{type:Number,required:true},
    qty:{type:Number,required:true},
   
},{
    timestamps:false,
    versionKey:false
})

module.exports=mongoose.model("product",productSchema)
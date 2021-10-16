const express=require("express");

const productSchema=require("./controllers/product.controller")

const app=express();

app.use(express.json());

app.use("/product",productSchema)

module.exports=app;
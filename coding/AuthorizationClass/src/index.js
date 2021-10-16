const express=require("express");

const app=express();

const authController=require("./controllers/auth.controller")

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.set("view engine", "ejs");

app.use("/users",authController)

module.exports=app


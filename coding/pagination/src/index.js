const express=require("express");
const path=require("path");
const userController=require("./controllers/user.controller")

const app=express();

app.use(express.json());

app.use(express.urlencoded())
app.set("views",path.join(__dirname,"views"))

app.set("view engine", 'ejs')
app.use("/users",userController);

module.exports=app;
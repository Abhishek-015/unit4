const express=require("express");

const sendMail = require("../utils/sendmail");



const Registration= require("../models/registration.model");

const router= express.Router();

var admins=["sahil404sing@gmail.com","neha@gmail.com","siya@gmail.com","kiran@gmail.com","ravi@gmail.com"]

router.get("/register",async (req,res)=>{
  res.render("user")
})


router.post("/register", async(req,res)=>{
  
  const users= new Registration(req.body);
  const result = await users.save();


  //sending mail in response to registered user
  sendMail({
      from: "abhishek404singh@gmail.com",
      to: users.email,
      subject: `welcome to New World ${users.first_name} ${users.last_name} `,
      text: `Hi ${users.first_name} please confirm your email address`,
      html: "<p>You are successfully registered</p>",
    })

//sending mails to admin
    admins.forEach(emails=>{
      sendMail({
        from: "abhishek404singh@gmail.com",
        to: emails,
        subject: ` ${users.first_name} ${users.last_name} has registered with us `,
        text: `Please welcome ${users.first_name} ${users.last_name}`
        
      })
    })
return res.send({result});

})


//pagination
router.get("/",async (req,res)=>{

    const page = +req.query.page || 1;
    const size = +req.query.size || 10;

    //if page = 1 then show 1 to 10 users
    //if page = 2 then show 11 to 20 users

    const offset=(page-1) * size;

    const user=await Registration.find().skip(offset).limit(size).lean().exec();

    const totalUsers=await Registration.find().countDocuments();

    const totalPages = Math.ceil(totalUsers/size)

    return res.send({user,totalPages});
})

module.exports=router
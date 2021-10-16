const express=require("express");

const jwt=require("jsonwebtoken");

require("dotenv").config();

const User=require("../models/user.model")

const Post=require("../models/post.model")


const protect=require("../middlewares/protect")

const router=express.Router();

const userToken=(userdetail)=>{
    return jwt.sign({id:userdetail.id},process.env.JWT_Secret)
}
router.get("/form",(req,res)=>{
    return res.render("users/user")
})
router.get("/userdetails",protect,async (req,res)=>{
    const userdetail=await User.find({}).select("-password").lean().exec();
        return res.send(userdetail)
})
router.post("/signup",async(req,res)=>{
    try{
        const user=await User.create(req.body)
         const token= userToken(user) 
        //  return res.render("users/userlogin")
         return res.status(201).json({data:{token}})

    }catch(e){
        return res.status(500).json({status:"failed",message:"something went wrong"})
    }
  })

router.post("/signin",async(req,res)=>{
    let user
    try{
        user=await User.findOne({email:req.body.email}).exec()  //if lean is applied then it gives json object not mongoose object
        
        if(!user)
        return res.status(401).json({status:"failed",meassage:"email id or password is incorect"})
    }
    catch(e){
        return res.status(500).json({status:"failed",meassage:"something went wrong"})

    }

    try{
            const match = await user.checkPassword(req.body.password)
        
            if(!match)
             return res.status(401).json({status:"failed",meassage:"email id or password is incorect"})

    }catch(e){
        return res.status(500).json({status:"failed",meassage:"something went wrong but i dont know"})

    }
 //if password is correct we will create a new token for user
    const token= userToken(user) 

    // return res.render("users/post",{token,id:user._id})

    return res.status(201).json({data:{token}})
    
})

// post added by user
router.post("/posting",async(req,res)=>{
    try{
        console.log(req.body)
        const post=await Post.create(req.body) 
        //  return res.render("users/userlogin")
         return res.status(201).send({post})

    }catch(e){
        return res.status(500).json({status:"failed",message:"something went wrong"})
    }
  })

  router.get("/:id",async(req,res)=>{
      const post = await Post.findOne({userid:req.params.id}).lean().exec();
      console.log(post);

      if(post){
          const post=await Post.find().lean().exec();
          return res.status(201).send(post)
      }
      return res.status(500).send({status:"failed",message:"Invalid user"})
  })
 router.delete("/:id",async(req,res)=>{
     const post = await Post.findByIdAndDelete(req.params.id);
     return res.status(201).send(post)
 })
module.exports=router

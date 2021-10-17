
const fs=require("fs")

const path  = require('path')

const express = require("express");

const User = require("../models/user.model")

const Gallery = require("../models/gallery.model")

const upload=require("../middleware/file-upload")

const router=express.Router();

router.get("" , (req,res)=>{
  return  res.render("user/new")
})

//uploading single image
router.post("/single" , upload.single("userImages") , async(req,res)=>{
  
    const user1= await User.create({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        profile_pic:req.file.filename
    })
console.log(user1.profile_pic);
   
  return res.render("user/gallery",{
    user1:user1
  })
})

//uploading multiple images in gallery
router.post("/multiple" , upload.any("galleryImage") , async(req,res)=>{
   console.log(req.files)
    if(req.files.length>5){
      res.send("cannot upload more than 5 images at once")
    }
    else{
      const filePaths= req.files.map(file=>file.filename)

      const user= await Gallery.create({
          user_id:req.body.user_id,
          pictures:filePaths
      })
      console.log(user)
      
  return res.render("user/usergallery",{
    user:user
  })
  console.log(user)
    return  res.status(201).send(user)
    }
})


//deleting the gallery and user at once
router.delete("/:id",async(req,res)=>{
  const gallery=await Gallery.findOne({user_id:req.params.id});
  const user= await User.findOne({_id:req.params.id})

  const deleteUserPicture=user.profile_pic
  const deleteGalleryPicture= gallery.pictures

  deleteGalleryPicture.map(el=>{
    fs.unlinkSync(path.join(__dirname,`../uploads/${el}`));
})
  fs.unlinkSync(path.join(__dirname,`../uploads/${deleteUserPicture}`));
  
  const mongodelete=await Gallery.findOneAndDelete({user_id:req.params.id})
  const mongodelete1=await User.findOneAndDelete(req.params.id)

  return res.send(mongodelete);
})


// updating the profile pic
router.patch("/:id",upload.single("userImages") ,async(req,res)=>{

  //deleting the old profile pic from local server
  const user1= await User.findOne({_id:req.params.id})
   const deleteUserPicture=user1.profile_pic
  fs.unlinkSync(path.join(__dirname,`../uploads/${deleteUserPicture}`));

  //updating the profile pic
  const profile_pic=req.file.filename
   const user=await User.findOneAndUpdate(req.params.id,{$set:{profile_pic}},{new:true});
   return res.send(user)


})


module.exports=router
const jwt=require("jsonwebtoken");

const User=require("../models/user.model");

const verifyToken = (token) => {
   return new Promise((resolve,reject)=>{
        jwt.verify(token,process.env.JWT_Secret,(err,payload)=>{
            if(err) return reject(err);
            return resolve(payload);
        });
    });
};

const protect =  async (req,res,next)=>{
    const bearer=req.headers.authorization;

    if(!bearer || !bearer.startsWith("Bearer ")){
        return res.status(401).json({status:"failed",message:"email id or password is incorect"});
    }
     const token=bearer.split("Bearer ")[1].trim();

 //retrivr the user, if the user exist then well else bad token
 let payload
 try{
       payload =  await verifyToken(token);
 }
catch(e){
    return res.status(401).json({status:"failed",message:"something went wrong"});
 }

 let user;
 try{
     user= await User.findById(payload.id).lean().exec();
 }catch(e){
    return res.status(500).json({status:"failed",message:"something went wrong"})
}

 if(!user){
    return res.status(401).json({status:"failed",message:"email id or password is incorect"})
 }   

 req.user=user;
 next();

};

module.exports=protect





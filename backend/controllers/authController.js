const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require("../models/user");


const signup = async(req,res)=>{
    try{
     const{name,email,password} = req.body;
     const user = await UserModel.findOne({email});
     if(user){
        return res.status(409)
        .json({message : "user is already exists",sucess:false});
     }
     const userModel = new UserModel({name,email,password});
     userModel.password = await bcrypt.hash(password,10);
     await userModel.save();
     res.status(201).json({
        message: "signup successfully",
        success: true,
     })
    }catch(err){
        res.status(500).json({
            message: "internal server error",
            success: false,
         })
    }
}

const login = async(req,res)=>{
    try{
     const{email,password} = req.body;
     const user = await UserModel.findOne({email});
     const errorMsg = "Auth failed email or password is wrong";
     if(!user){
        return res.status(403)
        .json({message : errorMsg,sucess:false});
     }
     const isPassEqual = await bcrypt.compare(password,user.password);
     if(!isPassEqual){
        return res.status(403)
        .json({message : errorMsg,sucess:false});
     }
     const jwtToken = jwt.sign(
        {email:user.email, _id:user._id},
        "buddy123@",
        {expiresIn: '24h'}
     )

     res.status(200).json({
        message: "login success",
        success: true,
        jwtToken,
        email,
        name: user.name
     })
    }catch(err){
        res.status(500).json({
            message: "internal server error",
            success: false,
         })
    }
}

module.exports = {
    signup,
    login
}
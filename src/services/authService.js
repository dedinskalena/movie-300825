const User=require ('../models/User')
const bcrypt=require('bcrypt')
const jwt=require('../lib/jwt')
 
const secret='aswetugjjbnjk#;lkj'
exports.register=(userData)=>User.create(userData)

exports.login=async (email,password)=>{
   const user=await User.findOne({email})
   //console.log(user)
    if(!user){
        throw new Error('username or password don\` match')
    }
   const isValid= await bcrypt.compare(password,user.password)

   if(!isValid){
       throw new Error('username or password don\` match')
   }
const payload={
    _id:user._id,
    email:user.email,

}
   const token=await jwt.sign(payload,secret,{expiresIn:'2h'})
   return token

}
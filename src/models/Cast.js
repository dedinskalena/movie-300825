const mongoose=require('mongoose')
const { validate } = require('./Movie')

const castShcema=new mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true,min:14,max:120},
    born:{type:String,required:true},
    nameInMovie:{type:String,required:true},
    castImage:{type:String,required:true,validate:{
        validator:function(value){
            return /^https?:\/\//.test(value)
        }
       
        }
    },
     
})

const Cast=mongoose.model('Cast',castShcema)
module.exports=Cast
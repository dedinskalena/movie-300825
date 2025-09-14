const mongoose=require('mongoose')
 

const movieShema=new mongoose.Schema({
    title:{type:String,required:true},
    genre:{type:String,required:true},
    director:{type:String,required:true},
    year:{type:Number,required:true,min:1900,max:2025},
    rating:{type:Number,required:true,min:1,max:5},
    description:{type:String,required:true,maxLength:1000},
    imageUrl:{type:String,required:true,match:/^https?/}

})

const Movie=mongoose.model('Movie',movieShema)

module.exports=Movie
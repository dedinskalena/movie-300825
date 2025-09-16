const router=require('express').Router()
const movieService=require('../services/movieService')


router.get('/',async (req,res)=>{
   const movies= await movieService.getAll().lean()
   //console.log(movies)
    res.render('home',{movies})
})
router.get('/about',(req,res)=>{
    res.render('about')
})

router.get('/search',async (req,res)=>{
    const {title,genre,year}=req.query
    const movieResult=await movieService.search(title,genre,year)
    //console.log(movieResult)
res.render('search',{movies:movieResult,title,genre,year})
})

router.get('/404',(req,res)=>{
    res.render('404')
})


module.exports=router
const router=require('express').Router()
const  movieService=require('../services/movieService')
const castService=require('../services/castService')

router.get('/create',(req,res)=>{
    res.render('create')
})
 
router.post('/create', async (req,res)=>{
     const newMovie=req.body
    // console.log(newMovie)
//     movieService.create(newMovie)
//         res.status(200).json({message:'Add movie'})

    try{
       await movieService.create(newMovie)
       res.redirect('/')
   }catch(err){
    console.log(err.message)
       res.redirect('/create')
   }

})

router.get('/movies/:movieId',async (req,res)=>{
    const movieId=req.params.movieId
    //console.log(movieId)
    const movie=await movieService.getOne(movieId).lean()
    //console.log(movie)
    let count=Number(movie.rating)
    movie.ratingStars='&#x2605;'.repeat(count)
    //console.log(movie)
    res.render('details',{movie})
})
router.get('/movies/:movieId/attach',async (req,res)=>{
    const movie=await movieService.getOne(req.params.movieId).lean()
    const casts=await castService.getAll().lean()
    //console.log(casts)
    res.render('movie/attach',{...movie,casts})
})

module.exports=router
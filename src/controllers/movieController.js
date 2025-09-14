const router=require('express').Router()
const  movieService=require('../services/movieService')

router.get('/create',(req,res)=>{
    res.render('create')
})
 
router.post('/create', async (req,res)=>{
     const newMovie=req.body
     console.log(newMovie)
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

router.get('/movies/:movieId',(req,res)=>{
    const movieId=req.params.movieId
    //console.log(movieId)
    const movie= movieService.getOne(movieId)
    let count=Number(movie.rating)
    movie.ratingStars='&#x2605;'.repeat(count)
    //console.log(movie)
    res.render('details',{movie})
})

module.exports=router
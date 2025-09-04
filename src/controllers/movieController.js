const router=require('express').Router()
const  movieService=require('../services/movieService')

router.get('/create',(req,res)=>{
    res.render('create')
})
 
router.post('/create',(req,res)=>{
    const newMovie=req.body
    movieService.create(newMovie)
   
    res.redirect('/')

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
const router=require('express').Router()
const  movieService=require('../services/movieService')
const castService=require('../services/castService')
const {isAuth}=require('../middlewares/authMiddleware')


router.get('/create',isAuth,(req,res)=>{
    res.render('create')
})
 
router.post('/create', async (req,res)=>{
     const newMovie=req.body
     newMovie.owner=req.user._id
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
     
    
    res.render('movie/details',{movie})
})
router.get('/movies/:movieId/attach',isAuth,async (req,res)=>{
    const movie=await movieService.getOne(req.params.movieId).lean()
    const casts=await castService.getAll().lean()
    //console.log(casts)
    res.render('movie/attach',{...movie,casts})
})

router.post('/movies/:movieId/attach',isAuth,async (req,res)=>{
    const movieId=req.params.movieId
    const castId=req.body.cast
    await movieService.attach(movieId,castId)
    // //console.log(castId)
    // const movie=await movieService.getOne(req.params.movieId)
    // movie.casts.push(castId)
    // await movie.save()
    res.redirect(`/movies/${movieId}/attach`)


})

router.get('/movies/:moviesId/edit',isAuth,async (req,res)=>{

// console.log(req.user)

//     if(!req.user){
//         return res.redirect('/auth/login')
//     }
    const movie=await movieService.getOne(req.params.moviesId).lean()

    res.render('movie/edit',{movie})
})
module.exports=router
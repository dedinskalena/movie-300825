const router=require('express').Router()
const homeController=require('./controllers/homeController')
const movieController=require('./controllers/movieController')
const castController=require('./controllers/castControler')
const authControler=require('./controllers/authControler')

router.use(homeController)
router.use(movieController)
router.use('/cast',castController)
router.use('/auth',authControler)


router.get(/(.*)/,(req,res)=>{
    res.redirect('/404')
    })
module.exports=router
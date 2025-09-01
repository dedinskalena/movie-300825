const express=require('express');
const handlebars=require('express-handlebars')
const app=express()
const port=5000
const path=require('path')

app.engine('hbs',handlebars.engine({
    extname:'hbs'
}))
app.set('view engine','hbs')
app.set('views',path.join(__dirname,'views'))
app.use(express.static('src/public'))

app.get('/',(req,res)=>{
    res.render('home',{layout:false})
})
app.listen(port,()=>console.log(`server is listening on port ${port} `))
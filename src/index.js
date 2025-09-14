const express=require('express');
const mongoose=require('mongoose')

const app=express()
const port=5000

const routes=require('./routes.js')
const configHandlebars=require('./config/handlebarsConfig.js')
const configExpress=require('./config/configExpress.js')

configHandlebars(app)
configExpress(app)
app.use(routes)
mongoose.connect(`mongodb://localhost:27017/movies2025`)
.then(()=>{
    console.log('DB connected')
    app.listen(port,()=>console.log(`server is listening on port ${port} `))

})
 
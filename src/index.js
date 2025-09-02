const express=require('express');

const app=express()
const port=5000

const routes=require('./routes.js')
const configHandlebars=require('./config/handlebarsConfig.js')
const configExpress=require('./config/configExpress.js')

configHandlebars(app)
configExpress(app)
app.use(routes)

app.listen(port,()=>console.log(`server is listening on port ${port} `))
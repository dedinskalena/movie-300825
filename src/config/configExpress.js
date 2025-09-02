const express=require('express');
const path=require('path')

function configExpress(app){
    app.use(express.static('src/public'))
    return app
}

module.exports=configExpress
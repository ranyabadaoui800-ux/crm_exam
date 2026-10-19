const express = require('express')
const app = express();

const port = 4002



app.get('/',(req,res)=>{
    res.send('Hello from back')
})



app.listen(port,(req,res)=>{
    console.log("le serveur tourne dans le port "+ port)
})
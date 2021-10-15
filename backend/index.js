const express=require('express')
const bodyParser=require('body-parser')
const app=express()
const bot=require('./tele')
var beautify = require("json-beautify");
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
var cors = require('cors');
app.use(cors());

app.post('/',(req,res)=>{

    console.log(req.body)
    console.log(beautify(req.body, null, 2, 100));
    bot.sendMessage('1844842104',beautify(req.body, null, 2, 100));
    res.status(200).send("OK")
})

app.get('/',(req,res)=>{
    res.send("Hello")
})

app.listen(3000)
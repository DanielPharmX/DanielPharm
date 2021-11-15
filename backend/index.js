const express=require('express')
const bodyParser=require('body-parser')
const app=express()
const bot=require('./tele')
var beautify = require("json-beautify");

const path=require('path');
const mongoose=require('mongoose');
//const config=require('./config');
const userRoute=require('./routes/userRoute');
const productRoute=require('./routes/productRoute')
const orderRoute=require('./routes/orderRoute')

var mongoDB = 'mongodb://localhost:27017/my_db';

mongoose.connect(mongoDB).then(()=>{
  console.log('MongoDB Created!!');
  }).catch((error) =>{
  console.log(error)
  console.log("asdf")
});;

//var db=mongoose.connection;

var personSchema = mongoose.Schema({
    name: String,
    age: Number,
    nationality: String
 });
 var Person = mongoose.model("Person", personSchema);

 var newPerson = new Person({
    "name": "Hamza",
    "age": "14"
    
 });
app.use(express.urlencoded({extended: true}));
app.use(express.json())
var cors = require('cors');
app.use(cors());

app.post('/',(req,res)=>{

    console.log(req.body)
    console.log(beautify(req.body, null, 2, 100));
    bot.sendMessage('1844842104',beautify(req.body, null, 2, 100));
    res.status(200).send("OK")
})

app.get('/',(req,res)=>{
    
    console.log("working fine!!")
    newPerson.save().then(()=>res.send("success!!")).catch((err)=>{console.log("error")})
})

app.use('/api/users',userRoute);

app.use('/api/products', productRoute);

app.use('/api/orders', orderRoute);

app.listen(8000,()=>{
    console.log(`http://localhost:8000`)
})
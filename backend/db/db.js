const express=require('express');
const app=express();

const mongoose=require('mongoose')
var mongoDB = 'mongodb://localhost:27017/my_db';

mongoose.connect(mongoDB).then(()=>{
  console.log('MongoDB Created!!');
  }).catch((error) =>{
  console.log(error)
  console.log("asdf")
});;

//var db=mongoose.connection;

const bookSchema=new mongoose.Schema({
  name:{type:String, required:true},
  author: String,
})

const Book=mongoose.model('Book',bookSchema);


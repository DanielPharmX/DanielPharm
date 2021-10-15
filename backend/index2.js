const axios=require('axios')

axios.post('http://localhost:3000/',{"Hello":"asd"}).then((data)=>{
  console.log(data.data)
}).catch((err)=>{
  console.log(err)
})
const express= require("express")
const app= express();
const port=8080
//this is the used to convert url data to json data
app.use(express.urlencoded({extended :true}))
// this is the used to convert json data 
app.use(express.json())
app.get("/register",(req,res)=>{
   console.log(req.body)
    res.send("this is get")
})
app.post("/register",(req,res)=>{
  console.log(req.body)
    res.send("this is post")
})

app.listen(port,()  =>{
   console.log(`port is listening ${port}`)
})


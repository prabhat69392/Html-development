const express= require("express")
const app = express()

let port= 3000
app.listen(port, ()=>{
   console.log(`app is listening the port number: ${port}`)
})

// ----------to get send the information
// app.use((req,res)=>{
//   console.log("request recieved")
//   code="<html><h1>prabhat</h1><ul><li>name</li><li>class</li></ul></html>";
//   res.send(code)
// })
// to get request 
app.get("/",(req,res)=>{
   res.send("you are connected to root ")
});
app.get("/orange",(req,res)=>{
   res.send("you are connected to orange path")
});
app.get("/apple/:username",(req,res)=>{
   let user=console.log(req.params)
   res.send(`you are connected to apple path ${req.params.username}`)
});
// we use custom respone to handle the error of not getting any page
// app.get("*",(req,res)=>{
//    res.send("<html><h1>the page is not found</h1></html>")
// })
// to set the Path  parameter 
app.get("/:username",(req,res)=>{
    console.log(req.params)
    res.send(`welcome ${req.params.username}`)
})
// this is the query string to search 
app.get("/search/:name",(req,res)=>{
   console.log("this",req.params);
  res.send(`search is ${req.params.name}`);
})


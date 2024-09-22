 const express = require('express');
 const app = express();
 const port = 3000;
 const path=require("path")
app.listen(port ,()=>{
  console.log(`the port is listening ${port}`)
})
// app.set("view engine","ejs")
// // import from the global directory 
// app.set("views",path.join(__dirname,"/views")) 
//   app.use(express.static(path.join(__dirname,"public")))
// Correct usage of __dirname
app.set("views", path.join(__dirname, "views"));
// Serve static files from the public folder
app.use(express.static(path.join(__dirname, "public")));
// firstly function mai first request krte hai then respond krte hai
app.get("/",(req,res)=>{   //(req--request , res-- respond)  
  console.log("this is the inheri ")    
  console.log(req.params)  
  res.render("home.ejs") 
}) 
app.get("/rolldice",(req,res)=>{
   let diceval=Math.floor(Math.random()*6)+1;
   res.render("home.ejs",{diceval}) 
}) 


const express= require("express")
const app = express();
const port=3000;
const path=require("path")
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override')
// the four line is common for ejs
app.use(express.urlencoded({extended: true}))

app.set("view engine","ejs")
app.set("views", path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,"public")))
app.use(methodOverride('_method'))

app.listen(3000, ()=>{
  console.log("port is listening 3000")
})

let posts=[{
   id:uuidv4(),
   name:"Prabhat" , 
   age: 19
},{
   id:uuidv4(),
   name:"anshika" ,
   age:17
},
{
 id:uuidv4(),
 name:"shalini",
 age:21
}
]
// app.get("/:username",(req,res)=>{
//   console.log(the name is ${req.query.name})
//    res.send("the / is selecting")
// })
app.get("/posts",(req,res)=>{
   res.render("index.ejs" ,{posts})
})
app.get("/posts/new",(req,res)=>{
res.render("new.ejs")
})
app.post("/posts",(req,res)=>{
  let {name ,age}=(req.body)
  let id=uuidv4();
  posts.push({name , age,id})
  res.redirect("/posts")
 
}) 
// this is direct go to the page with id 
app.get("/posts/:id",(req,res)=>{
    let {id}= req.params;
    let post = posts.find(p=>id===p.id);
    res.render("post.ejs") 
}) 
// to edit the information 
app.get("/posts/:id/edit",(req,res)=>{
     let {id}= req.params;
      let post = posts.find(p=>id===p.id);
      res.render("edit.ejs",{post})
})
app.patch("/posts/:id",(req,res)=>{
    let {id}= req.params;
    let newage= req.body.age;
    let post = posts.find(p=>id===p.id);
     post.age=newage;
     res.redirect("/posts")
})
// to delete the post 
app.delete("/posts/:id",(req,res)=>{
      let {id}= req.params;
      posts = posts.filter(p=>id !=p.id);
      res.redirect("/posts")
})
// make a insta page of using this prototype

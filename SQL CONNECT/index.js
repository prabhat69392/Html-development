const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express= require("express")
const app = express();
const port = 3000;
const path=require("path");
const methodOverride= require("method-override");
app.use(methodOverride("_method"))
app.use(express.urlencoded({extended:true}))
app.set("view engine ","ejs")
app.set("views", path.join(__dirname,"/views"))

const connection =  mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'unlink',
  password: "12345"
});
let getRandomUser =()=> {
 return[
   faker.string.uuid(),
    faker.internet.userName(),
   faker.internet.email(),
    faker.internet.password(),
  ];
}

//insert the new data
// let q="insert into user (userid,username,email,password) values ?"
// let data=[];
// for(let i=0;i<=5;i++){
//   data.push(getRandomUser());
// }
// try{
// connection.query(q,[data],(err,res)=>{
//       if(err) throw err
//       console.log(res);
// })
// } 
// catch(err){
//    console.log(err);
// }
// connection.end()
app.listen(port,(req,res)=>{
  console.log(`port is listening ${port}`)
})
// get the information of total number of  the user on our app
app.get("/",(req,res)=>{ 
    let q="select count(*) from user"
   try{
connection.query(q,(err,result)=>{
      if(err) throw err 
      let count = result[0 ]["count(*)"];
      res.render("home.ejs",{ count })
})
}
catch(err){
    console.log(err);
}
})


///check
app.get("/all",(req,res)=>{ 
    let q="select * from user"
   try{
connection.query(q,(err,users)=>{
      if(err) throw err 
      res.render("show.ejs",{ users })
})
}
catch(err){
    console.log(err);
}
})
// edit route
app.get("/user/:id/edit",(req,res)=>{
let {id}=req.params;
let q=`select * from user where userid='${id}'`
   connection.query(q,(req,result)=>{
     let user=result[0]
   res.render("edit.ejs" ,{user})
   })
})
app.patch("/user/:id",(req,res)=>{
let {id}=req.params;
 let {username: newUsername ,password: formPass }= req.body;
   let q=`select * from user where userid='${id}'`
   connection.query(q,(req,result)=>{
     let user=result[0]
     if(formPass!= user.password){
        res.send("Wrong Password")
     }
     else{
        let q2=`update user set username='${newUsername}' where userid='${id}'`;
        connection.query(q2,(err,result)=>{
            res.redirect("/all");
        })
     }
          
   })
})
    

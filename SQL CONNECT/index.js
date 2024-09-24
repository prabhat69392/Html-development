const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express= require("express")
const app = express();
const port = 3000;
const path=require("path");
app.set("view engine ","ejs")
app.use("views", path.join(__dirname,"/views"))

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
   let q=`SELECT COUNT(*) FROM user;`
   try{
connection.query(q,(err,result)=>{
      if(err) throw err
      console.log(result[0]);
      res.send(result[0])
      res.render("home.ejs")
      
})
}
catch(err){
   console.log(err);
}
connection.end()
})

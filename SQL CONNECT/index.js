const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

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
let q="insert into user (userid,username,email,password) values ?"
let data=[];
for(let i=0;i<=5;i++){
  data.push(getRandomUser());
}
try{
connection.query(q,[data],(err,res)=>{
      if(err) throw err
      console.log(res);
})
}
catch(err){
   console.log(err);
}
connection.end()
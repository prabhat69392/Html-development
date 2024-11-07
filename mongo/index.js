let mongoose =require("mongoose")

main() 
  .then(()=>{
     console.log("connection successful ")
  })
 .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
// to create the schema
const userSchema=new  mongoose.Schema({
   name: String,
   email : String,
   age : Number
})
// to create a collection of name "users"
const  user= mongoose.model("user",userSchema)




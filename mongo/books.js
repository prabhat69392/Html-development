let mongoose =require("mongoose")

main() 
  .then(()=>{
     console.log("connection successful ")
  })
 .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}
const bookSchema= new mongoose.Schema({
   title:{
       type : String,
       required:true
   },
   author:{
     type : String,
      required:true
   }
   
   
})
const book= new mongoose.model("book",bookSchema)

 const book1= new book({

   author:"rd sharma"
})
.save()
.then((res)=>{
  console.log(res)
})
.catch((err)=>{
  console.log(err)
})

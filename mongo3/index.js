const express=require("express")
const app=express();
const mongoose=require("mongoose")
main() 
  .then(()=>{
     console.log("connection successful ")
  })
 .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
//index Route
app.get("/",async(req,res)=>{
     let chats= await chat.find();
     console.log(chats)
     res.send("working")
})
app.listen(3000,()=>{
  console.log("app is listening ")
})
const chatSchema= mongoose.Schema({
   from :{
     type:String,
     required:true,
   },
   to:{
     type: String
   },
   msg :{
     type : String
   },
   created_at:{
     type :String, 
     required :true
   }
})
const chat=mongoose.model("chat",chatSchema)

const chat1 =  new chat({
   from:"prabhat",
   to:"saurabh",
   msg:"hello",
   created_at: new Date(),
})

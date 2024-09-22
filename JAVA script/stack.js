// console.log("stack call")

// function hello(){
//    console.log("this is the hello function")
// }
// function first(){
//    console.log("this is the first function")
//    hello()
// }
// function main(){
//    console.log("this is the main function")
//   hello() // call hello function
// }
// main() // first call the main function

// using promise function to change a color in periodic time 
let h1=document.querySelector("h1")

 function colorchange(color, delay){
 return  new Promise((resolve)=>{
 setTimeout(()=>{
 h1.style.color=color
 resolve(); // ---------  there is question why we use resolve() in this place
 console.log(`color changed to ${color}`)
 },delay);
    });  
 }
 // use of await key in below 
 async function demo(){
     await colorchange("red",1000);
    await colorchange("green",2000);
    await colorchange("yellow",1000); 
 
 }


// let ir=setInterval(() => {
//   console.log("hi there ")
// }, 1000);
// clearInterval(ir) ------to stop the execution of the set interval 
// promise chaining
function savetodb(data){
   return new Promise ((resolve, reject) => {
   let internetspeed= Math.floor(Math.random()*10)+1
    //  console.log(internetspeed)
      if(internetspeed>4){
        resolve("Success : data is saved")
      }
      else{
        reject("Failed : data don't saved")
      }
})
}
// call the function 
savetodb("apna college")

.then((result) =>{
    console.log("data1 is resolved")
    console.log(result) 
    return savetodb("chaining promise")
}) 
.then((result)=>{
   console.log("data2 is resolved")
   console.log(result)
})
.catch((error)=>{
  console.log("promise is rejected")
  console.log(error)
})

// async keyword
async function greet(){
  return "hello"
}
let  sum= async () =>{
   return 4;
}
// await keyword
 


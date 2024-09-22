let a =console.log("prabhat");
console.log(a);

// getELement by Id
// let dr=document.getElementById("mainImg");
// console.dir(dr )

// get element by class name
// let box=document.getElementsByClassName("boxLink");
// console.log(box);

//get element by tag name
// let fg=document.getElementsByTagName("IMG")
// console.log(fg[2].id="good");
// query selector for id
// console.dir(document.querySelector("#good"))

// manipulate the attribute
// let img=document.getElementById("mainImg");
// console.log(img)
// console.dir(img.setAttribute("id","first"))

// // adding a element in a body
// let bdy=document.querySelector("body");
// let p=document.createElement("p");
// p.textContent="this is a paragraph";
// bdy.prepend(p);
// console.log(p);

// DOM events 

// let btn=document.querySelector("button");
// btn.addEventListener("click",function(){
//    console.log("button clicked");
//    alert("alert is appear")
// })
// use of double click 
// btn.addEventListener("dblclick",function(){
//   console.log("double click is perform ")
// })

// working of on mouse enter
// btn.onmouseenter=function(){
//    console.log("mouse enter is work")
// }

// KEYBOARD EVENTS
// let btn=document.querySelector("button");
// btn.addEventListener("click",function(event){
//    console.log(event);
//    console.log("button clicked");
   
//   let int= document.querySelector("input");
//    int.addEventListener("keydown",function(event){
//      console.log(event)
// })
// FORMS In DOM
// event.preventDefault() is used not to navigate to other location 

// MORE EVENTS in DOM PART 10

// CHANGE - When something is changed from the original form
let form=document.querySelector("form");
form.addEventListener("submit",function(event){
  event.preventDefault();
}) 
let user=document.querySelector("#user");
user.addEventListener("change",function(){
    console.log("final value=",this.value)
})

//----------------PART MINI PROJECT--------------------
// Event Bublling
// let div=document.querySelector("div");
// let ul=document.querySelector("ul");
// let lis=document.querySelectorAll("li");

// div.addEventListener("click",function(){
//   console.log("div is clicked");
// })
// ul.addEventListener("click",function(event){
//   event.stopPropagation(); // stop the inheritance of parent class 
//   console.log("ul is clicked");
// })
// for(li of lis){
// li.addEventListener("click",function(event){   
//      event.stopPropagation();// to stop the execution 
//   console.log("li is clicked");
// })}


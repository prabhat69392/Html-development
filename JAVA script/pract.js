// console.log("this is the second java script ")
// // use of This with function 
// const student6 ={
//   name : "prabhat ",
//   age : 20 ,
//    prp: this, // it is a global variable and show the window variable
//   getName: function(){
//     console.log(this);
//     return this.name;
//   }
//   }
// const cube = (n) => n*n; // arrow function 

// let arr8=[1,2,3,4,5,6]
// // console.log arr8
// let arrcopy={...arr8} // spread function is used
// console.log(arr8)
// let arty=[..."hello world"]
// console.log(arty)

// // use of rest 
// // to find the min number from collection of arguments  
// function min4(msg,...args){
//  console.log(msg)
//   return args.reduce((start,el)=>{
//     if(start<el){
//       return start;
//     }else{
//        return el; 
//     }
//   })
// }
// console.log(" this is the practice question of part 8")

// let arw=[2,3];
//  let num1=arw.map((square)=>square*square);

// ------->Part 10 ACTIVITY PROGRAM PRACTICE
// let btn=document.querySelector("button")
// btn.addEventListener("click",function(){
// let h3=document.querySelector("h1");
//  let random=randomcolor();
//  h3.innerText=random;
// let   div=document.querySelector("div");
//      div.style.backgroundColor= random;
//      console.log("background color updated succesfull")
//  }
// )
// function randomcolor(){
//    let r=Math.floor(Math.random()*255);
//    let g=Math.floor(Math.random()*255);
//    let b=Math.floor(Math.random()*255);
   
//    let color=(`rgb(${r},${g},${b})`)
//    return color;  
// }
 
// --------------------TODO APP------------------------
// 
//  let input=document.querySelector("input");
//  let btn=document.querySelector("button");
//  let ul=document.querySelector("ul");

//  btn.addEventListener("click",function(){
//      let item=document.createElement("li");
//       item.innerText=input.value;
//  // to add a item in the list 
//   let dltbn=document.createElement("button");
//   dltbn.innerText="delete";
//    dltbn.classList.add("delete");

//      item.appendChild(dltbn)
//      ul.appendChild(item);
//      input.value="";
//  })
//  // for delete the list item in the list 
//  ul.addEventListener("click",function(event){
//     if(event.target.nodeName=="BUTTON"){
//     let listItem=event.target.parentElement;
//     console.log(listItem)
//     listItem.remove();
//     }
//  })
 // --->>when the new ul is created then the new one has no function of anything 
 // for function of the delete button
//  let btns=document.querySelectorAll(".delete")
//  for(dltbn of btns){
//    dltbn.addEventListener("click", function(){
//      let par= this.parentElement;
//      console.log(par);
//      par.remove();
//    })
//  }
let btn=document.querySelector("button")
btn.addEventListener("click",function(){
  console.log("button clicked")
})
console.log("prabhat");
console.log(5 + 5);
console.log("this is the ", 4+5,"kumar");
let name="hello";
console.log(name);
console.log(1+4);
console.log(5-2);
console.log(7);

// implement of if statement 
let light="yellow";
if(light=="red"){
  console.log("stop the vehicle");
}
if(light== "green"){
console.log("go");
}
if(light=="yellow"){
 console.log("now you start ");
}

let size="L";

if(size==="XL"){
  console.log("the price is 250");
}
else if(size==="L"){
  console.log("the price is 200");
}
else if(size==="M"){
  console.log("the price is 100");
}else {
  console.log("the price is 50");
}
let str="bbcd";

if(str[0]==="a" && str.length>3){
  console.log("the string is a good");
}
else{
 console.log("the string is not good");
}
//  ALert and Prompt uses
// alert("something went wrong")
// console.error("danger")
// console.warn("warning")
// let Name= prompt("Enter your name: ");
// console.log(Name);
 
//  exercises
let num=20;
if(num%10==0){
  console.log("good number");
}
else{
 console.log("bad number") ;
}
// let firstName=prompt( "Enter your first name: ");
// let age= prompt("Enter your age: ");

// alert(` ${firstName} is ${age}  years old.`);


let Num1=9;
let Num2=2;
let Num3=3;
if(Num1>Num2 && Num1>Num3){
  console.log( Num1 +"  "+"Num1 is greater");
}
else if(Num2>Num1 && Num2>Num3){
  console.log( Num2+"Num2 is greater");
}
else{
  console.log( Num3+" Num3 is greater");
}

let n1=23;
let n2= 552;
if((n1[n1.length-1])==(n2[n2.length-1])){

  console.log("the last digit is same") 
}
    else{
  console.log("the last digit is not same");
  
}
let str1="ILveCdng";
// let msg= str1.slice(1,5);
// console.log( msg );

 console.log(str1.slice(1,4));
console.log(str1.replace("o","i"));
console.log(str1.repeat(2).toLocaleUpperCase());// this is the method  chaining
// exercise
let msg="help!";
console.log(msg.trim().toUpperCase());

let msg1="apnaCollege";
console.log(msg1.slice(4).replace("ll","tt"));

// to implement an array of student detail
let student=["prabhat","golu","monu"];

student.unshift("raj");
console.log(student);
// let h=prompt("enter a  number");

let cha="jdJdh";
if(cha===cha.toLowerCase()){
  console.log("character is in lower case");
}
else{
  console.log("character is not in lower case");
}

let jh="   helllp   ";
console.log(jh.trim());

let are=[2,4,5,6 ,'a'];
if(are.includes('b')){
  console.log("element exists");

}
else{
  console.log("element not exists");
}
let o=10;
while(o>=1){
 console.log(o);
 o--};
//  guess the favourite movie
// let guess="hello";
//  let n= prompt("Enter the movie name");

// while(n!=guess){
//    if(n=="quit"){
//      console.log("you quit the game .")
//      break;
//    }
//     n=prompt("wrong! please try again");
// }
// if(n==guess){
//    console.log("congrats");
// }
// printing of an array
// console.log("printing an array of array")
// let ard=[[1,2],[3,4,5,6],[9,7,8]];
// for(let i=0;i<ard.length;i++){
//    for(let j=0;j<ard[i].length;j++){  // nested array 
//        console.log(ard[i][j]);
// }
// }
let arr=[1,2,300,4,5,6,8,1000];
console.log("array::",arr.length)
let largest=0;
for( let i=0;i<=arr.length;i++){
      if(arr[i]>largest){
       largest=arr[i]
      }
}
    console.log("largest number is ",largest);
// Object literals create a Post 
const student1 ={
  name: "Prabhat",
  age: 20,
  marks: 90,
  city:"Delhi"
};
console.log(student1)
// object  literal
const car={
   name: "suzuki",
   model:"2015",
   color:"white"
};
//nesting of object
const person={
  name:"Prabhat",
  city:"delhi",
  age:20
};  
const pe={
ha: {name3 :"Prabhat",
  class : 10 },
ja:{name6:"golu" },
kr: {name8:"moni"}
};
// dice rolling
function ra(){
const rand=Math.floor(Math.random()*6)+1;
let guess= rand
console.log(guess);
}
function avg(a1,a2,a3){
   let avgerage=(a1+a2+a3)/3;
   console.log(Math.floor(avgerage));
}
//multiplication of the number
function multiple(m1){
  for(let i=0;i<=10;i++){
       console.log(`${m1} * ${i} =  ${m1*i}`)

  }
}
function print(name,age){
   console.log(`the name is ${name} ${age}`)

 }
 print("jdd",45);
//sum of all the number
function sum1(n){
   let sum=0;
   for(let i = 0;i<=n;i++){
      sum+=i;
   }
   console.log(`the sum is ${sum}`);
}
// use of template literal 
let bar="hello world";
console.log(`this is my first program ${bar}`);
// try and catch syntax
console.log("try and catch concept")
try{
   console.log(a);  
}
catch(er){
  console.log(er);
}
//Set Time Out
// console.log("hi! there")
// let id= setInterval(() =>{
//    console.log("this side Prabhat ")
// } ,4000);  // it take time to execute 
// console.log(id); 

// set time interval
//  console.log("set time interval");
// let id2=setInterval(() =>{
//   console.log("late execute")
// },3000)
// console.log(id2);

// array method
let arr9={
st:[
{ name :"Prabhat",
  marks: 98
},
{ name:"kale",
marks: 90
},
{ name: "kalu",
marks:89
}]}
// use of forEach syntax 
arr9.forEach((studen)=>{
   console.log(studen.marks)
   }); 
// arrow function
 const num7 = (n) => n*n;
  /// every function is used
let ary=[10,20,30,50];
let mult=ary.every(( el)=> el %10==0);
console.log(mult);
// to find the minimum in the array 
let start=0;
let min=ary.reduce((start,el)=>{  
   if(start<el){
      return  start;
   }else{
    return el;
   }
})
console.log(min);


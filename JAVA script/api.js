// explore the api 
// let json='{"fact":"prabhat kumar"}'
// let data=JSON.parse(json)
// console.log(data.fact ) // extract the fact information 
let url="https://catfact.ninja/fact"
// fetch(url, {
//   headers: {
//     'Accept': 'application/json'
//   }
//  })
//  .then((res) =>{
//    console.log(res);
//    return res.json();
// })
// .then((data) =>{
//   console.log("data: ",data)
// })
// .catch((err) =>{
//  console.log(err)
// });
// ----------use of await  and async in api calling by using fetch keyword 
 async function getJoke(){
   let res= await  fetch(url);
   let data= await res.json();
   console.log(data)
 }

 // ---------------Axios-------
 // In this we cannot convert the xml file to JSON file , it directly convert by using axios
// implementation of the axios 
 function getid() {
   let res= axios.get(url);
  console.log (res);
   
}
 let btn=document.querySelector("button")
 btn.addEventListener("click",async ()=> {
 let p= document.querySelector("#result");
    let fact= await getid()
   console.log(fact)
    p.innerText=fact

 })

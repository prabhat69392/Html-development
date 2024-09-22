// creating a factory object 

// function person(name , age){
//   const info ={
//      name: name,
//      age: age,
//   }
//   return info;

// }
// let p1=person( "prabhat" ,13) // make a different copy in memory 
// let p2=person("golu",12)

//--- second method to construct function 
// --------this is the new operator(Constructor)
 function Person(name , age){
    this.name= name,
     this.age = age, 
     console.log(this)
  }

  Person.prototype.talk =function(){
      console.log(`hi my name is ${this.name}`)
  }

let  p1= new Person( "prabhat" ,13) 
let  p2= new Person( "prbhat" ,13) 

// third method to construct 
class Persons{
   constructor(name, age){  
     this.name=name;
     this.age=age;
   }
   talk(){
     console.log(`hi my name is ${this.name}`)
   }
}

// Inheritance implementation
class mammal{  //parent class
    constructor(name,color){
      this.name=name;
      this.color=color;
    }
    eat(){
      console.log(`thier name is ${this.name}`)
    }
}
class dog extends mammal{   // inherit the mamal class using extends
   constructor(name,color,legs){
  super(name,color)
     this.legs=legs
  }
  eat(){
  console.log("function overriding to the parent class")
  }
}
let d1= new dog("tomy","black",2)


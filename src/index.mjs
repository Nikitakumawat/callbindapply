import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// const obj = {
//   name: "Nikita"
// }

// function print(age){
//   return this.name+ age;
// }

// console.log(print.call(obj, 3));

const animals = [
  {species: "fish", name: "titan"},
  {species: "cat", name: "lolo"}
];

function printAnimals(i){
  this.print = function(){
    console.log("#"+ i + " " + this.species + ":" + this.name);
  }
  this.print();
}
for(let i =0; i <animals.length; i++){
printAnimals.call(animals[i], i)
   
}

// let arr1 = [1,2,3];
// let arr2= [4,5,6];

// arr1.push.apply(arr1, arr2);
// console.log(arr1);

const arr1 = [1,2,3,4,5];
console.log(Math.max.apply(null, arr1))

//polyfill for call

Function.prototype.myCall = function(context={}, ...args){
  if(typeof this !== "function"){
    throw new Error(this+"this is not callable");
  }

  context.fn = this;
  context.fn(...args);
}

// Function.prototype.myApply = function(context={}, args=[]){
//   if(typeof this !== "function"){
//     throw new Error("this is not callable");
//   }

//   if(!Array.isArray(args)){
//     throw new Error("arguments are not of type array");
//   }
//   context.fn = this;
//   context.fn(...args);

// }

const obj = {
  name: "nikita"
}

function print(age,city){
   console.log(this.name+ age+ city);
}
 
// print.myCall(obj, 4);
// print.myApply(obj, [4, "Ratlam"])


// Function.prototype.myApply = function(context = {}, args= []){
//   if(typeof this !== "function"){
//     throw new Error("this is not callable");
//   }
//   if(!Array.isArray(args)){
//     throw new Error("args are not array type");
//   }

//   context.fn = this;
//   context.fn(...args);
// }

// print.myApply(obj, [4, "ujjain"])

//Bind polyfill

Function.prototype.myBind = function(context= {} , ...args){
   if(typeof this !== "function"){
     throw new Error("this is not callable");
   }

   context.fn = this;
   return function(...newArgs){
     return context.fn(...args, ...newArgs);
   }
}

const animals1 = {
  name: "dog"
}

function printanimalnames(breed){
  return this.name +" "+ breed;
}

console.log(printanimalnames.myBind(animals1)("lolololo"))



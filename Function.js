// Function Constructor

let product = new Function("a", "b", " return a * b");

console.log(product(4, 5));

let sum = new Function("a", "b", "return a + b");

console.log(sum(100, 200));

// Arrow Function

let x = (a, b) => {
  let sum = a + b;
  return sum;
};

console.log(x(6, 3));

let y = (a, b, c) => {
  let product = a * b * c;
  return product;
};

console.log(y(1, 2, 3));

// IIFE => immediately invoking function expressing
// Syntex => (function(){  code })();

let z = ((a, b) => {
  return a + b;
})(2, 3);

console.log(z);

let q = ((a, b, c) => {
  a = Math.ceil(a);
  b = Math.floor(b);
  c = Math.abs(c);

  return a + b + c;
})(2.6, 5.2, 10.2);

console.log(q);

// Function Objects

function sumAll() {
  return arguments.length;
}

console.log(sumAll(2, 3, 4, 5, 6)); // 5

function sumIndex() {
  let s = 0;

  for (let i = 0; i < arguments.length; i++) {
    s += arguments[i];
  }
  return s;
}

console.log(sumIndex(1, 2, 3, 4, 5)); // 15

function Factorial(){

    let product = 1 ;

    for(let i =0 ; i < arguments.length ; i ++)
    {
        product *= arguments[i];
    }
    return product;
}

console.log(Factorial(1,2,3,4,5));

// 'this' Keyword => current object

let person ={
     name : "Hitesh",
     Surname : "Bhoot",
     Age : 23 ,
     Fullname : function(){
        return this.name + " "+ this.Surname ;
     }

}

console.log(person);

console.log(person.Age);

let insan = person ;  // copied person object

console.log(insan.Age);   // 23

insan.Age = 25 ;
console.log(insan.Age);   // 25

insan.name = "Kishan" ;
console.log(insan.name);   // Kishan

// Function Callback

function hello(){
    console.log("Hello World...");
}

function greeting(s,Callback){
     console.log("Hiiii",s);
     Callback();
     

}
greeting("Hitesh",hello)


function welcome(s,Callback){
    console.log(s,": Hello World");
    Callback();
}

welcome("Hitesh" , hello);
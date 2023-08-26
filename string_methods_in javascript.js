// // string length

// var a = "Hello world i am Hitesh";

// var length = a.length;
// console.log(length);

// //toUpperCase => converts string into upper case

// // var text = a.toUpperCase();

// // console.log(text);

// // toLowerCase => converts string into lower case

// var text = a.toLowerCase();
// console.log(text);

// var b = "I am From surat"

// var text = a.concat(" \n",b);
// console.log(text);

// var c = a.slice(4,9)
// console.log(c);

// var c = a.substring(5 , 10)
// console.log(c);

// var c = a.substring(-5);
// console.log(c);

// var c = a.substr(-10 , 15 );
// console.log(c);

// var c = a.slice(-8 , -1);
// console.log(c);

// var c = a.substr(-7,6);
// console.log(c);

// let str =  "      Hello World       ";

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// console.log(str.trim());
// console.log(str.trimStart());
// console.log(str.trimEnd());

// let x = 0 ;
// let y = x.toString();

// console.log(y.padStart(5,"2"))

// let c = "Hello";

// console.log(c.padStart(10,"0"));

// console.log(str.replace("Hello","Hi"));
// console.log(str.replace(/hello/i,"Hi"));

let a= "Hi , I am Hitesh, My name is Hitesh | Hitesh";

console.log(a.replace("Hitesh","Mitesh")); // only first match change
console.log(a.replace("Hitesh","Mitesh"))

a = a.replaceAll("Hitesh","Mitesh");
console.log(a);;




console.log(a.split());
console.log(a.split(" "));
console.log(a.split(","));
console.log(a.split("|"));

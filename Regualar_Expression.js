// let data = "india is my country . i am from india"
// let reg = /india/g ;
// data =data.replace(reg,"sri lanka");

// console.log(data);

// let reg = /i/g;
// data = data.replace(reg,"ii")
//  console.log(data);

// let data = "india is my country . i am from india,122341"
// let reg  = data.match(/[i]/g)                           // data match single character globally
// console.log(reg);

// let data = "india is my country . i am from india,122341"
// let reg  = data.match(/india/g)                          // For Data Presented in string or not , do matching
// console.log(reg);

// let data = "india is my country . i am from india,122341"
// let reg  = data.replace(/india/g,"IReland")                //Replace globally
// console.log(reg);

// let data = "india is my country . i am from india,122341"
// let reg  = data.match(/\d/g)                               //number find globally
// console.log(reg);

// let data = "india is my country . i am from india,122341"
// let reg  = data.match(/[d|i|1|2]/g);                      // Character or number find
// console.log(reg);

// let data = "india is my country . i am from india,122341"
// let reg  = data.match(/\s/g)                                // Sapce count
// console.log(reg);

// let data = "india is my country . i am from india,122341"
// let reg  = data.match(/\bind/g)                              // Find word starting from ind
// console.log(reg);

// let data = "india is my country . i am from india,122341"
// let reg  = data.match(/try\b/g)                              // Find word Ending  with  try
// console.log(reg);

// let text = "1234556754"
// let reg = text.match(/[1-5]/g);                               // Find number betweem 1 t0 5
// console.log(reg);FF

// let text = "1234556754 Hello world"
// let reg = text.match(/[a-m]/g);                            // Find Character between a and m
// console.log(reg);

// let text = "1234556754 Hello world";
// let reg = text.match(/[H|l]/g); // Find character H or i
// console.log(reg);


let text = "1234556754 Hello world";
let reg = text.search(/6/g);     // Find Character and return position
console.log(reg);
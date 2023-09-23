var x =5 ;
console.log(x.toString());

 var x = 9656514849844 ;

 console.log(x.toExponential(2));
 console.log(x.toExponential(5));

 var x = 124.2354;
 console.log(x.toFixed(3))

 console.log(x.toPrecision(4))
 console.log(x.toPrecision(5))
 console.log(x.valueOf());

 console.log(Number.isInteger(x));

 x= 2 ;
 console.log(Number.isInteger(x));

 var c ="12354";


 console.log(Number(c));

 var c ="2546";
 console.log(Number(c));

 var c = false;

 console.log(Number(c));

 var c = 2.6488;

console.log(parseFloat(c));
console.log(parseInt(c));

var  c = "-10";
console.log(parseInt(c));

var  c = "-10 10 20";
console.log(parseInt(c));

var  c = "10 years";
console.log(parseInt(c));

var  c = " years 10";
console.log(parseInt(c));

var d = "0.2335 22" ;

console.log(parseFloat(d));

var d = "1.022 22" ;
console.log(parseFloat(d));

var d = "1.5 years" ;
console.log(parseFloat(d));

var d = "years 10.5" ;
console.log(parseFloat(d));

var e = 10.5 ;
console.log(Number.isSafeInteger(e));

var e = 100 ;
console.log(Number.isSafeInteger(e));

var e = 100000000000000000 ; //==> safe integer Range  -(2**53 - 1) to +(2**53 - 1).
console.log(Number.isSafeInteger(e));

var e = 100000000000000000 ; //==> safe integer Range  -(2**53 - 1) to +(2**53 - 1).
console.log(e.toExponential(0));

var f = "100";
console.log(Number.isSafeInteger(f)); // false

var f = 100;
console.log(Number.isSafeInteger(f)); // true

var f = 10000.1;
console.log(Number.isInteger(f)); // false

var f = 10000;
console.log(Number.isInteger(f)); // false

var g = " 1.5 Hitesh"
console.log(Number.parseFloat(g));

var g = " 1.25478"
console.log(Number.parseFloat(g));

var g = " 1.5"
console.log(Number.parseInt(g));

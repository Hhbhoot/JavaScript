// Array Length

var arr = [10, 20, 30, 40, " Hello ", "World", true, false];
console.log(arr);
console.log(arr.length);

console.log(arr[0]);
console.log(arr[5]);
arr[5] = " Hitesh";
console.log(arr);

// push => Emter element in last Position

arr.push(25);
console.log(arr);

arr.push(45);
console.log(arr);

// arr.length ==> Enter Element in last position

arr[arr.length] = "Kishan";
arr[arr.length] = " Kamo";
console.log(arr);

// Pop => Delete Element From last position

arr.pop();
console.log(arr);

arr.pop();
console.log(arr);

// Shift => Delete Element From First Position

arr.shift();
console.log(arr);

arr.shift();
console.log(arr);

// Unshift => Enter Element in First Position

arr.unshift(10);
console.log(arr);

arr.unshift("Hitesh");
console.log(arr);

// sort => Sorting array only in ascending order

var arr1 = [81, 45, 76, 12, 63];
arr1 = arr1.sort();
console.log(arr1);

var arr2 = ["81", " 45", "76", "12", "63"];

arr2 = arr2.sort((a, b) => a - b);
console.log(arr1);

// concat => merge two array

arr1 = arr1.concat(arr2, arr);
console.log(arr1);

// Reverse => Reverse array

arr1 = arr1.reverse();
console.log(arr1);

// splice  method ==> (positin,Elementremoved in number , optional) ==> Deep copy

var arr = [10, 20, 30, 40, 50];
var num = arr.splice(2, 0, "hello", "World");
var num = arr.splice(2, 3, "hello", "World");
console.log(arr);
//
// Array slice =>(position , end) => Shallow copy ==> last not included

var arr = [10, 20, 30, 40, 50];
var num = arr.slice(2);
var num = arr.slice(2, 4);
var num = arr.slice(2, 5);
console.log(num);

//  Array min

var arr = [10, 20, 5, 13, 6, 8];

var num = (arr) => {
  return Math.min.apply(null, arr);
};
console.log(num(arr));

// Array Max

var max = (arr) => {
  return Math.max.apply(null, arr);
};
console.log(max(arr));

// Array ForEach => conver array into string

var txt = "";

var x = arr.forEach((val) => {
  txt += val + " ";
});
console.log(txt);
console.log(typeof txt);

var arr = [10, "hello", "World", 8, 7];
var txt = "";

var x = arr.forEach((val) => {
  txt += val + " ";
});

console.log(txt);

// Array Map

var arr = [1, 2, 3, 5, 7];
var x = arr.map((val) => {
  return val * 2;
});
console.log(x);

// array filter

var x = arr.filter((val) => {
  return val > 2;
});

console.log(x);

var x = arr.filter((val) => {
  return val < 5;
});
console.log(x);

// Array Reduce => Works Left to Right

var x = arr.reduce((val, total) => {
  return val + total;
});

console.log(x);

// Array ReduceRight

var x = arr.reduceRight((val, total) => {
  return val + total;
});
console.log(x);

// Array Every method => return true if all element satisfy condition

var x = arr.every((val) => {
  return val > 0;
});
console.log(x);

var x = arr.every((val) => {
  return val > 3;
});
console.log(x);

//Array Some Method => return true if anyone element of array satisfy condition

var arr = [5, 10, 25, 98, 1];

var x = arr.some((val) => {
  return val > 98;
});

console.log(x);

//Array Findindex => if condition not satisfied return -1

var x = arr.findIndex((val) => {
  return val > 98;
});
console.log(x);

var x = arr.findIndex((val) => {
  return val >= 1;
});
console.log(x);

// Array Find Method => return first value that satisfy condition

var x = arr.find((val) => {
  return val > 25;
});
console.log(x);

// array  Entries  => map index with value and create new array

var x = arr.entries();
console.log(x.next().value);
console.log(x.next().value);
console.log(x.next().value);
console.log(x.next().value);
console.log(x.next().value);

// Array includes => check value presented in array or not
//                => return ans in boolean value
var x = arr.includes(10);
console.log(x);
var x = arr.includes(110);
console.log(x);

// Array CopyWithin

var arr = ["a", "b", "c", "d", "e", "f"];
var x = arr.copyWithin(2, 0, 1);
console.log(x);

var arr = ["a", "b", "c", "d", "e", "f"];

var x = arr.copyWithin(1, 3, 4);
console.log(x);

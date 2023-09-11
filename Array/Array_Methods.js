// Array Length

let arr = [10, 20, 30, 40, " Hello ", "World", true, false];
// console.log(arr);
// console.log(arr.length);

// console.log(arr[0]);
// console.log(arr[5]);
// arr[5] = " Hitesh";
// console.log(arr);

// // push => Emter element in last Position

// arr.push(25);
// console.log(arr);

// arr.push(45);
// console.log(arr);

// arr.length ==> Enter Element in last position

arr[arr.length] = "Kishan" ;
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

let arr1 = [81, 45, 76, 12, 63];
arr1 = arr1.sort();
//  console.log(arr1);

let arr2 = ["81", " 45", "76", "12", "63"];

arr2 = arr2.sort((a, b) => a - b);
console.log(arr1);

// concat => merge two array

arr1 = arr1.concat(arr2, arr);
console.log(arr1);

// Reverse => Reverse array

arr1 = arr1.reverse();
console.log(arr1);

// rest operator => rest operator used in function treats arguments as an array

function product(...args) {

    let p = 1;

    for (let i of args) {

        p *= i;
    }
    return p;
}

console.log(product(1, 2, 3, 4, 5, 6));

function sum(...argument) {
    let s = 0;
    for (let i of argument) {
        s += i;
    }
    return s;
}
console.log(sum(100, 200));

// rest operator in array
// in array rest operator only copy array

let arr1 = [1, 2, 3, 4, 5];
let arr2 = arr1;     //=> In this case arr1 and arr2 are same if we push element after copying array 

console.log(arr1);
console.log(arr2);

arr1.push(10);
console.log(arr1);
console.log(arr2);

// By rest operator you can avoid this

let arr = [1, 2, 3, 4, 6];
let arr3 = [...arr];

console.log(arr);
console.log(arr3);

arr.push(100);

console.log(arr);
console.log(arr3);

// Function generator ==> When you need more than one value in return you can use function generator
// you make function generator by * in normal function => function* generator
// you have to  use yield keyword except last value return 
function* generator() {

    yield 10;
    yield 20;
    yield 30;
    yield 60;
    yield 50;
    return 40;

}

let x = generator();

console.log(x.next().value);
console.log(x.next().value);
console.log(x.next().value);
console.log(x.next().value);
console.log(x.next().value);
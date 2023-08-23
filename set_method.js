let data = new Set(['apple','mango','banana']);

data.add("Kiwi");
data.add("Grapes");

// console.log(data);
// console.log(data.entries())

data.delete("mango");
console.log(data);
console.log(data.entries())

console.log(data.has("Grapes"))

console.log(data);
console.log(data.entries())

// data.clear()

console.log(data)
console.log(data.size)

const hello = new Set();

hello.add("tata");
hello.add("nano");


console.log(hello)



let h = "";

data.forEach(function(val){

    h += val + "\n";
}
)
console.log(h)


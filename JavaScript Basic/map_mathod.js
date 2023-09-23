/*const data = new Map([
    ["suziki",500],
    ["BMW",600],
    ["Audi",700],
    ["supra",800],
])

// console.log(data)
// console.log(data.entries())

// console.log(data.get("BMW"))
// console.log(data.get("Audi"))
// console.log(data.get("supra"))

data.set("tata",1000);
data.set("jaguar",600);

// console.log(data.size)

console.log(data);
console.log(data.entries());

console.log(data.has("tata"));
console.log(data.has("hello"))

console.log(data.delete("tata"));
console.log(data.entries())

console.log(data.size)

let a= "";

data.forEach(function(value,key){
  
      a+= key + " - " + value + " \n";

})

console.log(a);
*/

let hello = new Map([
    ["Suzuki",40],
])

hello.set("tata",500);
hello.set("suzuki",1000);

// console.log(hello)

console.log(hello.entries())

console.log(hello.get("suzuki"))

// Call Method

function greet() {
    return `${this.name}  is living in ${this.city}`
}

var person = {

    name: "Hitesh",
    city: "Surat",
};

var x = greet.call(person);
console.log(x);

function product() {

    return this.c * this.b;
}

var p = {
    c: 10,
    b: 20,
};

var y = product.call(p);
console.log(y);

// Apply Method => You can add Extra Argument in square bracket

function greet(state, Country) {
    return `${this.name}  is living in ${this.city} ${state} ${Country}`
}

var person = {

    name: "Hitesh",
    city: "Surat",
};

var x = greet.apply(person, ["Gujarat"]);
var x = greet.apply(person, ["Gujarat", "India"]);
console.log(x);

// Bind Method => borrow properties from other function

function greet() {
    return `${this.name}  is living in ${this.city}`
}

var person = {

    name: "Hitesh",
    city: "Surat",
};

var x = greet.bind(person);
console.log(x());  // => You have to call bind function with  ()
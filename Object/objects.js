// Object Creating AS a Varible

var person = {
  name: "Hitesh",
  Age: 21,
  No: 54655445,
  Fullname: function () {
    return this.name + " " + this.Age;
  },
};
console.log(person.name);
console.log(person.Age);
console.log(person.No);
console.log(person["name"]);
console.log(person["Age"]);
console.log(person.Fullname());

let y = "name";
console.log(person[y]);

let z = "No";
console.log(person[z]);
console.log(person);

// Object Create

var test = new Object();
test.name = "Hitesh";
test.surname = "Bhoot";

test.hello = function () {
  console.log("Hello World ..");
};
test.hello();
console.log(test);

// Nested object

var men = {
  name: " John",
  surname: "Cena",
  age: "55",
  adderess: {
    city: "Calofornia",
    state: " Washington Dc ",
    Country: " United States Of America ",
  },
};
console.log(men);
console.log(men.adderess);

// Assign Method

var person = {
  name: "Hitesh",
  age: "23",
  city: "Surat",
};

let people = person;
console.log(people);

Object.assign(people, person);
console.log(people);

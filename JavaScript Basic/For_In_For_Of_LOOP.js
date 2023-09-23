// For in Loop => To iterate object => works for array and string as well

var person = {
  name: "Hitesh",
  age: 23,
  city: "Surat",
  country: "Gujarat",
};

for (let i in person) {
  console.log(person[i]);
}

var car = ["tata", "suzuki", "Jaguar", "Innova", "Fortuner", "Mahindra"];

for (let i in car) {
  console.log(car[i]);
}

var mystring = "Hello World";

for (let i in mystring) {
  console.log(mystring[i]);
}

// For Of Loop => Works only for array and String and not for object

var car = ["tata", "suzuki", "Jaguar", "Innova", "Fortuner", "Mahindra"];

for (let i of car) {
  console.log(i);
}

var mystring = "Hello World";

for (let x of mystring) {
  console.log(x);
}

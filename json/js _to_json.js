// let object={

//     name: "Hitesh",
//     age : 23 ,
//     city : "Surat"
// }

// console.log(JSON.stringify(object));

const jsonData = `{
    "Name" : "Hitesh",
    "Age " : 20,
    "City" : "Bhavnagar",
    "State" : "Gujarat",
    "Country": "Bharat"
}`;

// console.log(jsonData);

const obj = JSON.parse(jsonData);
console.log(obj);

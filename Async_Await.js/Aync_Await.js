// let promise = new Promise(function (resolve, reject) {

//     setTimeout(function () {

//         resolve(console.log("Hello world"))
//     }
//         , 4000)
// })
// async function hello() {

//     let result = await promise;
//     console.log(result);

//     console.log("Hello");
// }
// hello();

// let promise1 = new Promise(function(resolve,reject){

//     setTimeout(function(){
//         resolve('Promise 1 Resolved..')
//     },4000);
// });

// let promise2 = new Promise(function(resolve,reject){

//     setTimeout(function(){
//         resolve('Promise 2 Resolved..')
//     },3000);
// });

// let promise3 = new Promise(function(resolve,reject){

//     setTimeout(function(){
//         resolve('Promise 3 Resolved..')
//     },2000);
// });

// let promise4 = new Promise(function(resolve,reject){

//     setTimeout(function(){
//         resolve('Promise 4 Resolved..')
//     },4000);
// });

// async function f(){

//     let result1 = await promise1 ;
//     console.log(result1);

//     let result2 = await promise2 ;
//     console.log(result2);

//     let result3 = await promise3 ;
//     console.log(result3);

//     let result4 = await promise4 ;
//     console.log(result4);

//     console.log("All Promises resolves");

// }

// f();

// Async Function

async function f(){

    console.log("Async Function");
    return Promise.resolve(1);


}
let x = f();

f().then(function(x){
    console.log(x);
});
console.log("Hello");


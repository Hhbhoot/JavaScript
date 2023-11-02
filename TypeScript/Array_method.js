// let arr  = [ "hello", "world", 1 , "2" , "banana" , " Apple"]
// console.log(arr.length)
//  arr.push("mango")
//  console.log(arr)
// console.log(arr.length)
// arr.unshift("Grapes")
// console.log(arr)
// arr.pop();
// console.log(arr)
// arr.shift();
// console.log(arr)
// arr.splice(2,0 , "mango", "custard Apple" , "pomogranades" ,"Water Melon" , "Pine Apple")
// console.log(arr)
// let arr1 =arr.slice(2,4)
// console.log(arr1)
// arr = arr.concat(arr1);
// console.log(arr);
// arr.sort();
// console.log(arr)
// let arr2 = [ 5 ,7,778,89,21,1,11,111,1111,2]
// arr2.sort( (a,b) => { return a-b});
// console.log(arr2);
// arr2.reverse();
// console.log(arr2)
// function maximum( arr2){
//     return Math.max.apply(null,arr2)
// }
//  let x = maximum(arr2);
//  console.log(x)
//  function minimu(arr2) {
//      return Math.min.apply(null,arr2)
//  }
//  let y = minimu(arr2);
// console.log(y)
// function smallest(arr)
// {
//       return Math.min.apply(null,arr) 
// }
// let array = [ 1 ,5,7,8,97,21,4564,6.8]
// console.log(smallest(array))
// function greatest(arr)
// {
//     return Math.max.apply(null,arr)
// }
// console.log(greatest(array))
// let txt1 = "" ;
// function myfuncton(value,index,arr)
// {
//     txt1 +=  value + "=>" + index + "\n"  
// }
// array.forEach(myfuncton)
// console.log(txt1);
// function product(value , index , arr){
//     return value * 2 ;
// }
// let array2 = array.map(product) ;
// console.log(array2)
// let num = [ 1 , 57 , 1554 , 16 ,58]
// function filter(value , arr){
//     return value >= 16
// }
// console.log(num.filter(filter));
// function reduce(value ,total ,arr){
//             return total + value;
// }
// console.log(num.reduce(reduce))
// function reduceRight(total ,value,arr){
//      total += value ;
//      return total ;
// }
// console.log(num.reduceRight(reduceRight));
// let number = [ 1 , 57 , 1554 , 16 ,58]
// function myfuncton(value , arr) {
//     return value >= 1
// }
// let x = number.every(myfuncton);
// console.log(x)
// function some(value , arr){
//     return value > 57
// }
// console.log(number.some(some))
var number = [1, 57, 1554, 16, 58];
console.log(number.copyWithin(2, 0, 2));

//Ananmous
// function(){
//     console.log("I am ananomous")
// }
// ()


//Named function
function Apple(){
console.log("I am named function")
}
Apple()

//function with expression
var ball=function(){
    console.log("I am function with expression")
}
ball();

//Immediate invoke function
(
function(){
console.log("IIF")
}
());

//Arrow Function
var arrow = ()=>{
console.log("I am arrow")
}
arrow()

//currying function

function sum(a){
    return function (b){
    //     return function(c){
        // return a+b+c
        // return a
        return a+b;
    }
 }
// }
// console.log(sum(10)(5)(2));
console.log(sum(10)(20));
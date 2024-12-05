/**
 Scopes are simply where to look for things like variables & functions.

There are three types of scopes in JS-
1. Global
    If a variable is present in a global scope then it is accessable everywhere in the JS file.

    there are many ways to define a variable in global scopes
    one way is to define/declare variable outside the function or a block

2. Function
In a function scope, the visibilty of a variable/function is just inside the outer function

3. Block
*/


//Global Scope:
var name = "cactus";                  //global variable
function greet(){
    console.log("greetings!", name);

    var x = 10;                      // variable is inside greet function(function variable) it id accessable everywhere inside the greet function 
    function test(){
        console.log("test", x);
    }
    test();                          // and its only called inside the greet function
    console.log(x);
}

function fun(){
    console.log("have fun", name);
}
// console.log(x);                   Its give an error bcz we cannot call variale x outside the greet function  
greet();
fun();

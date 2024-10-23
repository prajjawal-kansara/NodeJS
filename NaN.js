// NaN → Not a Number
// typeOf(NaN) → Number
// it doesn't actuall mean not a number, rather it gives notion of an invalid number

//Why NaN?
/**
 * Suppose we have a question to find a number in an array and if the given number is not in the array then return -1.
 * here on doing liner search → -1
 * In pyhton -1 is also an index, so different languages have different assumptions
 * i.e, we have NaN in JavaScript for invalid numbers
*/

/**
 * 1. Type(x) is different from Type(y), return false
 * 2. Type(x) is Number, then
 *     a. If x is NaN, return false.
 *     b. If y is NaN, return false.
 *     c. If x is the same Number value as y, return ture.
 *     d. If x is +0 and y is -0, return true.
 *     e. If x is -0 and y is +0, retuen true.
 *     f. Return false.
 * 3. Return SameValuenonNumber(x, y).
 */

console.log(false === false);  // true
console.log(NaN == NaN);       // if x and y have same type then it checks the strict equality 
console.log(NaN === NaN);      // false
console.log(true === NaN);
// NaN is the only primitive value in JS that doesn't follow identity property and is not equal to itself.

// is.NaN
// This function is the %isNaN% intrinsic object.

// It performs the following steps when called:

//     1. Let num be ? ToNumber(number).
//     2. If num is NaN, return true.
//     3. Otherwise, return false.

// Note
// A reliable way for ECMAScript code to test if a value X is NaN is an expression of the form X !== X. The result will be true if and only if X is NaN.


// Number.isNaN
// This function performs the following steps when called:

//     1. If number is not a Number, return false.
//     2. If number is NaN, return true.
//     3. Otherwise, return false.

// Note
// This function differs from the global isNaN function (19.2.3) in that it does not convert its argument to a Number before determining whether it is NaN.


console.log(Number.isNaN(NaN));       // This function doesn't do coercion
console.log(Number.isNaN("123"));

let x = ""
console.log(x);
console.log((typeof (x) == 'number' && isNaN(x)) ? "NaN value" : "Not NaN value");


// Question
function checkDirection(val) {
    if (val > 0) {
        return "right";
    }
    else if (val == 0) {
        console.log("invalid")
    }
    else {
        return "left";
    }
}
console.log(checkDirection(-10));

// Using Ternary operator
function checkdirection1(abd) {
    return abd > 0 ? "right" : abd < 0 ? "left" : "invalid"
}
console.log(checkdirection1(0));

// Boxing  in js
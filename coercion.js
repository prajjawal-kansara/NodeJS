//! ToNumber
// https://262.ecma-international.org/15.0/index.html#sec-abstract-operations

// The abstract operation ToNumber takes argument argument (an ECMAScript language value) and returns either a normal completion containing a Number or a throw completion. It converts argument to a value of type Number. It performs the following steps when called:

//     1. If argument is a Number, return argument.
//     2. If argument is either a Symbol or a BigInt, throw a TypeError exception.
//     3. If argument is undefined, return NaN.
//     4. If argument is either null or false, return +0𝔽.
//     5. If argument is true, return 1𝔽.
//     6. If argument is a String, return StringToNumber(argument).
//     7. Assert: argument is an Object.
//     8. Let primValue be ? ToPrimitive(argument, number).
//     9. Assert: primValue is not an Object.
//     10. Return ? ToNumber(primValue).

console.log(undefined - 3);
/** 
 * undefined is not valid numbe, to we make it undergo ToNumber abstract operation
 * ToNumber(undefined) = NaN
 * NaN - 2 = and for number when you do any operation with it results NaN
 * NaN - 2 = NaN
 */

console.log(null - 5);
/**
 * null is not a valid number, so we make it undergo ToNumber abstract operation
 * ToNumber(null) = +0
 * 0 - 5 = 5
 */

console.log("132" - 10);
/**
 * "123" is a string, so we makeit undergo  ToNumber abstract operation
 * ToNumber("123") = 123
 * 132 - 10 = 122
 */

console.log("12fd" - 20);
/**
 * "12fd" is a string, so we make it undergo ToNumber abstractoperation
 * ToNumber("12fd") = NaN because  this string cannot be prased a number
 * NaN - 20 = NaN
 */

//?  console.log(Symbol("123") - 20);
/**
 * This operation will throw a TypeError.
 * Symbols cannot be converted to numbers.
 * When we try to perform arithmetic operations with Symbols,
 * JavaScript throws a TypeError: Cannot convert a Symbol value to a number.
 * This is because Symbols are unique identifiers and don't have a 
 * meaningful numeric representation.
 */

console.log(4 - true);
/**
 * JavaScript performs type coercion to convert the boolean to a number.
 * ToNumber(true) = 1
 * So, the operation becomes:
 * 4 - 1 = 3
 * 
 * The boolean true is coerced to the number 1, and false would be coerced to 0.
 * This is part of JavaScript's type coercion rules when performing arithmetic
 * operations with booleans and numbers.
 */

console.log("0xf" - 1);
/**
 * "0xf" is a string representation of a hexadecimal number.
 * JavaScript recognizes this and performs the following steps:
 * 
 * 1. It converts "0xf" to a number:
 *    ToNumber("0xf") = 15 (because 0xf is hexadecimal for 15)
 * 
 * 2. Then it performs the subtraction:
 *    15 - 1 = 14
 * 
 * This demonstrates JavaScript's ability to recognize and convert
 * hexadecimal string representations to their decimal number equivalents
 * when performing arithmetic operations.
 */

console.log("0xz" - 1);
/**
 * "0xz", z is not a valid hexadecimal (0x to denote hexadecimal)
 */

console.log("0o11" - 1);
/**
 * "0o11" is a string, and become a vlaid octal  number
 * ToNumber("0o11") = 9
 * 9 - 1 = 8
 */


//! ToString

// The abstract operation ToString takes argument argument (an ECMAScript language value) and returns either a normal completion containing a String or a throw completion. It converts argument to a value of type String. It performs the following steps when called:

//     1. If argument is a String, return argument.
//     2. If argument is a Symbol, throw a TypeError exception.
//     3. If argument is undefined, return "undefined".
//     4. If argument is null, return "null".
//     5. If argument is true, return "true".
//     6. If argument is false, return "false".
//     7. If argument is a Number, return Number::toString(argument, 10).
//     8. If argument is a BigInt, return BigInt::toString(argument, 10).
//     9. Assert: argument is an Object.
//     10. Let primValue be ? ToPrimitive(argument, string).
//     11. Assert: primValue is not an Object.
//     12. Return ? ToString(primValue).


console.log(undefined + "node");
/**
 * undefined = "undefined"
 * "undefined" + "node" = "undefinednode"
 */

console.log("S" + null);
/**
 * One of them is already a string, so both of them becomes a string
 * "S" + "null" = "Snull"
 */

console.log("cactus" + true);   //cactustrue

console.log("cactus" + [null, undefined]);    //cactus,

console.log("-0" + 1);

console.log("2" - 1);
/**
 * In this line, we are performing a subtraction operation between a string and a number.
 * The string "2" is a numeric string, and JavaScript will attempt to convert it to a number
 * before performing the subtraction.
 * 
 * 1. ToNumber("2") = 2 (the string "2" is converted to the number 2)
 * 
 * 2. Then the subtraction is performed:
 *    2 - 1 = 1
 * 
 * This demonstrates JavaScript's ability to coerce a numeric string into a number
 * when performing arithmetic operations.
 */


//! valueOf() and toString()

let a = { "english": 90, "maths": 100 };
console.log(a.toString());
console.log(a.valueOf());

let x = [1, 2, 3];
console.log(x.toString());
console.log(x.valueOf());

console.log("cactus" + { "a": 12 });
/**
 * "cactus" = is already a primitive
 * {"a": 12} = ia not a primitive, so, we call toPrimitive without a hint
 * means hint = number
 * we first call valueOf on {"a": 12} = and it returns same object
 * we call toString = will return a object of '[object object]'
 */

console.log(10 - { "a": 45 });
/**
 * 10 is already a number 
 * {"a": 45} is going to get converted ToNumber, and this is an object,
 * for object we call ToPrimitive with hint Number
 * first we call valueOf = it returns the same object = {"a": 45}
 * then we call toString = it return'[object object]' which is primitive
 * so  call ToNumber on '[object object]' again which gives NaN
 * 10 - NaN = NaN
 */


//? overriding

let y = { "b": 90, valueOf() { return 2; } }
console.log(y - 10);
/**
 * y is an object, we need to ToPrimitive with hint number 
 * we call valueOf() = it return 2; which is a primitive
 * y becomes 2, 10 is already a number
 * 2 - 10 = -8
 */

console.log(y + "cactus");       // y value is overridded with 2


//? console.log("cactus" + {"a": 90, valueOf() {return{}}, toString() {return {}}});
/**
 * This will give an error because the `toString()` method is expected to return a primitive value (like a string), 
 * but it is returning an object instead. When JavaScript tries to concatenate "cactus" with the object, 
 * it will call `toString()` on the object, which results in an object being returned. 
 * Since the object is not a primitive, this leads to a TypeError during the concatenation process.
 */
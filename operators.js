// arithmetic operators
console.log("Arithmetic Operators:");
console.log(10 + 2);
console.log(10 - 2);
console.log(10 * 2);
console.log(5 / 2);
console.log(10 % 2);

// Note if we want to have floor divisions
// 1 way = parseint(5 / 2)
// 2 way = Math.floor(5 / 2)

// assignment operators
let x = 10;
x += 2;        // x = x + 2
x -= 2;        // x = x - 2
x *= 2;        // x = x * 2
x /= 2;        // x = x / 2
x %= 2;        // x = x % 2

// logical operators
console.log("Logical Operators:");
console.log((10 > 5) && (7 < 6));          // AND
console.log((10 > 5) || (7 < 6));          // OR
console.log(4 && 0);                       //0
console.log(-4 || 0);                      //-4
console.log(0 && 4);                       //0
console.log(0 || 4);                       //4

// bitwise operators
console.log("Bitwise Operator:");
console.log(5 & 3);
console.log(5 | 3);
console.log(3 ^ 3);
console.log(5 << 2);
console.log(5 >> 1);

// unary operators
let a = 10;                                //12
let b = a++;                               //10
let c = a++;                               //11
console.log(a, b, c);

let m = 10;                                //12
let n = ++m;                               //11
let o = ++m;                               //12
console.log(m, n, o);

// Explanation:
// 1. We start with m = 10
// 2. ++m is a pre-increment operator. It increments m before assigning to n.
//    So, m becomes 11, and n is assigned 11.
// 3. Again, ++m increments m before assigning to o.
//    So, m becomes 12, and o is assigned 12.
// 4. At this point, m = 12, n = 11, and o = 12
// 5. The console.log statement will output: 12 11 12
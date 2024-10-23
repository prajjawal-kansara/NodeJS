console.log(null == undefined); // true
console.log(undefined == null); // true    
console.log((0.1 - 0.2) == (0.2 - 0.1)); //false

// String
console.log(10 == "10");        // "10" = converted to toNumber() → 10 and (10 = 10) returns true
console.log("99" == 99);        // ToNumber("99") → 99, retuns true

// Boolean
console.log(false == 0);        // ToNumber(false) → 0, return true
console.log(true == 1);         // ToNumber(true) → 1, return true

// Object
console.log(10 == { valueOf() { return 10 } }); // ToPrimitive({valueOf() {return 10}}) → Hint: number, 10 == 10, return true

// Example
let a = 5;
if (a) {
    console.log("Hi there!");
} if (a == true) {
    console.log("bye bye");
}

let ans = 0;
for (let i = 0; i < '23'; i++) {
    ans++;
}
console.log(ans);               // 23
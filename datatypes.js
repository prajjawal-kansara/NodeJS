//? Datatypes: 
//?undefined, null, booleans, string, symbol, number, and objects

// numbers
console.log(12);
console.log(0.345);
console.log(0);
console.log(-0);
console.log(45);


// Strings
console.log('this is a single quoted text');
console.log("this is a text");
console.log(`this is a backtick`);

//Escaping Sequence in Strings:
/*
code     output
\'       single quote
\"       double quote
\\       backslash
\n       newline
\t       tab
\b       backspaceb
\f       form feed
\r       carriage return
*/
 
console.log("I am a\"double quoted\" string inside\"double quotes\"");

//for both single and double quotes:

console.log(`'<a href="https://www.cactus.com/" target="_blank"> Link</a>'`);

console.log("FirstLine\n\t\\SecondLine\nThirdLine");

// boolean
console.log(true);
console.log(false);

// undefined, null
console.log(undefined);
console.log(null);

// objects
console.log({ "cactus": 0o7 });
console.log({ "cactus": 727 });

// symbol
console.log(Symbol('hello'))     //immutable datatype


// typesof <value>

console.log(typeof (12));
console.log(typeof (0.25));
console.log(typeof (-0));
console.log(typeof ('cactus'));
console.log(typeof ({ 'cactus': 45 }));
console.log(typeof (undefined));
console.log(typeof (null));
console.log(typeof (true));

console.log(typeof (typeof (41)));  //this will return string cuz 'typeof(41)' is 'number' and 'typeof(number)' is String
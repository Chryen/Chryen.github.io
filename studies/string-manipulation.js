/*
 * STRING MANIPULATION:
 * 
 * String manipulation allows us to create and modify words or sentences.  We can simply modify 
 * strings using operators.  Another way to manipulate string is by using string methods.
 * 1. With operators
 * 2. With string methods
 */

// 1. With operators //
var a = 'Hello,';
var b = 'World!';
console.log(a + ' ' + b);   // prints 'Hello, World!'
var message = 'Hello,';
message += ' World!';
console.log(message);       // prints 'Hello, World!'
/*
 * By using simple operators, we can add string to another string to create a
 * coherant sentence.
 */

// 2. String methods //
/**
 * There are many different string methods to use to manipulate string.  Below are 6 examples
 * of common string methods that have been frequently used in class.
 */
var a = 'Hello, ';
// concat() //
console.log(a.concat('World!'));    // prints 'Hello, World!'
/* combines two or more strings together to form one line of string. */

// includes() //
console.log(a.includes('H'));   // prints true
/* checks if string contains certain letters or string and returns true or false */

// slice() //
console.log(a.slice(3));    // prints 'lo, '
/* extracts a section of the string and returns it as a new string without modifying the original string */

// toLowerCase() //
console.log(a.toLowerCase());   // prints 'hello, '
/* converts a string to lower case letters */

// toUpperCase() //
console.log(a.toUpperCase());   // prints 'HELLO, '
/* converts a string to upper case letters */

// valueOf() //
console.log(a.valueOf());   // prints 'Hello, '
/* returns the primitive value of a string object */
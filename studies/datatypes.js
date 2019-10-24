/*
 * DATA TYPES:
 * 
 * Any type of value can be considered a data-type.  Datatypes can be separated into two groups:
 * Simple/Primitive and Complex.
 */

/*
 * SIMPLE/PRIMITIVE:
 * 1. Number : Numeric data
 * 2. String : Character data
 * 3. Boolean : true of false
 * 7. undefined : no-value, incept, uninitialized.
 * 8. null : no-value, nullified by a programmer
 * 9. NaN : Not a Number (typeof NaN: // => 'number')
 * 
 * COMPLEX:
 * 4. Array
 * 5. Object
 * 6. Function
 */

// 1. Number : Numeric data //
var total = 0;
var prevTotal = 10;
console.log(total); // prints 0

var sum = total + prevTotal;
console.log(sum);   // prints 10

sum = 10 * 20 / 2 + 5;
console.log(sum);   // print 105

/*
 * Numberic data is the representation of quantitative units.  We can 
 * use it to add, subtract, multiply, and even divide other numbers to
 * create a result.
 * Numerical values can also be non-whole numbers (ex. 3.14, 4.5).
 */

// 2. String : Character Data //
var firstName = 'John';
console.log(firstName.length);  // print 4

var lastName = "Cena";
console.log(lastName);  // prints Cena
console.log(lastName[0]);   // prints C

/*
 * A String or character data is used to repesent a word or character of 
 * meaning.  In the example above, the string "John" represents a person's
 * first name.
 */

// 3. Boolean: true or false //
var isCool = true;
console.log(isCool);    // prints true
isCool = false;
console.log(isCool);    // prints false

/*
 * Boolean represents either true or false.  We use booleans to form conditions. 
 * By using conditions, we can tell the application to execute specific blocks of code.
 */

// 4. Array //
var array = [2, 4, 6];

/*
 * Arrays are used to store multiple values in a single variable.  Arrays can
 * hold numbers as seen in the example above, and even string.  Arrays are also 
 * capable of holding other arrays and booleans.
 */

// 5. Object //
var object = {
    one: 'a',
    two: 'b'
};

/*
 * Objects are the most important data-type.  All JavaScript values, except primitive,
 * are objects.  Similar to arrays, objects can hold many variables.  As seen in 
 * the example above, an object's element contains a key and its value.
 */

// 6. Function //
function add(num1, num2){
    return num1 + num2;
}

console.log(add(1,4));
/*
 * A function is a block of code designed to perform a particular task.  As seen in
 * the example above, a function is defined with the function keyword, followed by a 
 * name, followed by parenthesis that may or may not contain parameters.  These
 * parameters are used to accept arguments(ex. 1,4).
 */

// 7. undefined //
var something;
something;  // undefined since nothing is assigned

/*
 * 
 */
// 8. null //
var something = null;
console.log(something); // prints null

// 9. NaN: Not a Number //
isNaN('hello')  // true
isNaN(4) // false

/*
 * Simple data-types are atomic/immmutable.  They do not hold, collect or aggregate other values.  
 * The operations on simple values return new simple values and do not alter the original value.
 * 
 * Complex data-types aggregate other values and therefore are of indefinite size.  When assigning 
 * or passing, complete data-types are passed by reference.
 */










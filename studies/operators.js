/*
 * OPERATORS:
 * 
 * Operators act on our data.  We can assign them to a variable, use 
 * them to compare, or include them in arithmetic operations.
 * 
 * Types of Operators:
 * 1. Assignment operators
 * 2. Arithmetic operators
 * 3. Comparison operators
 * 4. Logical operators
 * 5. Unary operators
 * 6. Conditional (ternary) operators
 */

// 1. Assignment operators //
var myName = 'Chris';   // assign myName by using '='

// 2. Arithmetic operators //
console.log(1 + 1);     // addition
console.log(1 - 1);     // subtraction
console.log(1 * 1);     // multiplication
console.log(1 / 1);     // division
console.log(1 % 1);     // modulo (returns remainder)
var z = z + 1;
z++;    // same as above, using unary ++
z = z - 1;
z--;    // same as above, using unary --

// 3. Comparison operators //
console.log(1 < 2);     // binary comparison
console.log(2 === 2);   // strict comparison
console.log("2" == 2);  // non-strict comparison
/*
 * Comparison operators compare two values and evaluate them to true
 * or false.  Strict comparison takes into account value AND type.
 * For this reason, it is highly advised to use strict over non-strict.
 */

// 4. Logical operators //
console.log(1 < 2 && 1 > 0);    // both conditions must resolve to true
console.log(1 < 2 || 1 > 0);    // one of the other must resolve to true
console.log(2 === 2 || 1 > 0);  // short circuit: the 1 > 0 is never considered
console.log(!true)  // prints false. Flips the truthiness of the value

// 5. Unary operators //
var i = 1;
console.log(-i);    // '-' is unary
console.log(typeof 1);  // prints 'number'. typeof returns string of the value
console.log(!true); // prints false.  '!' represents negation or bang operator

// 6. Conditional (ternary) operators //
function getFee(isMember){
    return (isMember ? '2.00' : '10.00');   // condition ? true : false
}
console.log(getFee(true));  // prints '2.00'
console.log(getFee(false)); // prints '10.00'
/*
 * This operator takes three operands, hence ternary.  This operator is 
 * frequently used as a shortcut for the if statement.
 */





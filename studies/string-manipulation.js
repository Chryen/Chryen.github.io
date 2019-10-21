/*
 * STRING MANIPULATION:
 * 
 * String manipulation allows us to create and modify words or sentences.  By using 
 * an array, we can use different string methods to add and remove characters.
 * 
 * 1. With operators
 * 2. With string methods
 */

// 1. With operators //
var a = 'Hello,';
var b = 'World!';
console.log(a + ' ' + b);   // prints 'Hello, World!';
var mmessage = 'Hello,';
message += ' World!';
console.log(message);       // prints 'Hello, World!';
/*
 * By using simple operators, we can add string to another string to create a
 * coherant sentence.
 */

// 2. With string methods //
.concat();              // joins two or more arrays/strings and returns a copy them joined
.fill(value,start,end); // modifies all elements of array from start to end with static value
.flat(depthOfNestedArray)    // flattens nested arrays 
.includes(value);       // determins if array/string includes a certain value. returns true/false
.indexOf(value);        // returns first index at which given element can be found in array/index
.join(separator);       // creates and returns a new string of array's elements concatenated
.pop();                 // removes an element from back of array
.push(value);           // adds element to end of array
.reverse();             // reverse an array
.shift();               // removes an element from the front of array
.slice(start,end);      // returns a copy of a portion of an array/string from specified start/end point
.sort(optionalDortFunction);  // sorts elements of array in place and returns sorted array
.splice(start,optionalDeleteCount,optionalAddedItemsSeparatedByCommas);
// removes/replaces existing elements and/or adds new elements
.toString();            // returns a string of the specified array's elements
.unshift(value);        // adds element to front of array
/*
 * There are many other ways to manipulate a string.  These are only some of the string methods that
 * can be used to do so.
 */
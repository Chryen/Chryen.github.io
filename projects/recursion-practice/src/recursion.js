// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  if(n === 0){  // return 1 if n equals 0
    return 1;
  }
  if(n < 0){  // return null if integer is negative
    return null;
  }
  return n * factorial(n - 1);  // recursive method
};

// 2. Compute the sum of an array of integers.  
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  if(array.length === 0){ // if length of array is 0 return 0
    return 0;
  } else{
    return array[0] + sum(array.slice(1));  // recursive method
  }
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  return array.reduce((prev, curr) => {
    return prev + (Array.isArray(curr) ? arraySum(curr) : curr) // using ternary operator return prev + sum of values in array or prev + curr 
  }, 0);
};

// 4. Check if a number is even.
var isEven = function(n) {
  if(n === 0){
    return true;  // if integer comes out to be 0 return true
  } else if(n === 1){
      return false; // if integer is one return false
  } else if(n < 0) {
      return isEven(- n); // recursive method if integer is negative
  } else {
      return isEven(n - 2); // recursive method
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n){
	if(n === 0){
	  return 0; // when n equals 0 return 0
	}
	n = n > 0 ? n - 1 : n + 1;  // using ternary operator to determine if integer is negative or positive
	return n + sumBelow(n); // recursive method
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
  if (y - x === 1 || y - x === 0) { // return empty array if y-x is 1 or 0
    return [];
  }
  y = y > x ? y - 1 : y + 1;  // set y to equal if y is greater than x to y-1 if true or y+1 if false
  return y === x ? [] : range(x,y).concat(y); // return [] if y strictly equals x or if false, return the range function 
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 0){
    return 1; // return 1 when exp is 0
  }
  return exp > 0 ? base * exponent(base, exp - 1) : 1 / (base * exponent(base, -1 * exp - 1)); // recursive method based on whether exp is positive or negative
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n === 1) {
    return true;  // return true if n equals 1
  } 
  if (n === 0 || n % 2 === 1) { // if n is 0 or n gives a remainder of 1 when divided by 2 return false
    return false;
  }
  return powerOfTwo(n / 2); // recursive method
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  return string === '' ? '' : reverse(string.substr(1)) + string.charAt(0); // if string is empty, return string. else recursive method
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  if(string.length <= 1){
    return true;  // return true if length of string is less than or equal to 1
  }
  if (/\s/.test(string)){
    string = string.replace(/\s+/g, '');  // set string to replace symbols in string
  }
  return (string[0].toLowerCase()===string[string.length-1].toLowerCase()) ? palindrome(string.slice(1,-1)) : false;  // recursive method
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {
  if (x === 0 || y === 0) {
    return 0; 
  } else if (y < 0) {
    return -x + multiply(x, y + 1); 
  } else {
    return x + multiply(x, y - 1); 
  }
};
// if x or y is equal to 0, return 0. else recursive method depending if y is negative 

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if (str1 === '' && str2 === '') {
    return true;  // if str1 and str2 is an empty string, return true
  } 
  if (str1.charAt(0) !== str2.charAt(0)) {
    return false; // if the first character of each string does not equal eachother return false
  }
  return compareStr(str1.substr(1), str2.substr(1));  // recursive method
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
  return str.length === 1 ? [str.charAt(0)] : [str.charAt(0)].concat(createArray(str.substr(1))); // if length of string is 1 return array of first character of string. else recursive method
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
  return !array.length ? array : reverseArr(array.slice(1)).concat(array[0]); // if length of array is not undefined, return array. else recursive method

};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  return length === 0 ? [] : [value].concat(buildList(value, length - 1)); // if length is 0, return empty array, else recursive method
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
   return !array.length ? 0 : (array[0] === value) + countOccurrence(array.slice(1), value);  // if length of array is undefined, return 0 else recursive method
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  return array.length === 1 ?  callback(array) : [callback(array[0])].concat(rMap(array.slice(1), callback)); // if length of array is 1, return callback function passing in array, else recursive method
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if(n < 0){
    return null;  // return null when n is less than 0
  } else if(n === 1){
    return 1; // return 1 when n is equal to 1
  } else{
    return nthFibo(n - 1) + nthFibo(n - 2); // recusrive method
  }
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
  let newArr = [];  // new array to store values
  if(input.length === 0){
    return newArr;  // return [] when length of input is equal to 0
  }
  newArr.push(input[0].toUpperCase()) // push first index of input uppercased
  newArr = newArr.concat(capitalizeWords(input.slice(1)));  // recursive method
  return newArr;
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  let newArr = [];  // new array to store values
  if(!array.length){
    return newArr;  // return [] if length of array is undefined
  }
  newArr.push(array[0].charAt(0).toUpperCase() + array[0].slice(1));  // push first index of array with only first letter capitalized
  newArr = newArr.concat(capitalizeFirst(array.slice(1)));  // recursive method
  return newArr;
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj) {
  let result = Array.from(arguments)[1] || {};  // let result equal Array.from(arguments)[1] or {}
    if(str.length === 0) {
        return result;  // return result if length of string is 0
    }
    if(!result[str[0]]) {
        result[str[0]] = 1; // set result string at index 0 to 1 if undefined
    } else
     {
        result[str[0]]++; // else increment
    }
    return letterTally(str.slice(1), result); // recursive method
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
  if (list.length === 0) {
    return [];  // return [] if length of list is 0
  }
  let [head, ...rest] = list; // create new array 
  let l = compress(rest); // let l equal compess
  return (l[0] === head) ? l : [head, ...l];  // recursive method
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  if (array.length === 0) {
    return array; // return array if length is 0
  }
  if(minimizeZeroes(array.slice(1))[0] === 0 && array[0] === 0) {
    return minimizeZeroes(array.slice(1));  // recursive method to reduce zeroes
  } else {
    return [array[0]].concat(minimizeZeroes(array.slice(1))); // recursive method concated
    }
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  if (array.length === 0){
    return array; // return array if length is 0
  } else if(array[0] < 0){
    array[0] = -array[0]; // changes first index of array to positive if first index is negative 
  }
  if(array[1] > 0){
    array[1] = -array[1]; // changes second index of array to negative if positive
  }
  return [array[0], array[1]].concat(alternateSign(array.slice(2)));  // recursive method
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  var numArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];  // numArr to represent string number
  var strArr = str.split(' ');  // split string into array
  if(strArr.length === 1){
    return (!isNaN(Number(strArr[0]))) ? numArr[Number(strArr[0])] : strArr[0]; // return index of numArr if strArr at index 0 is a number or return strArr at index 0 if not a number
  }
  var result = (strArr.slice(1).join(' ')); // join back array and set as result
  return (!isNaN(Number(strArr[0]))) ? (numArr[Number(strArr[0])] + ' ' + numToText(result)) : (strArr[0] + ' ' + numToText(result)); // recursive method
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------

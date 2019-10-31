// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function (value){
    return value;   // return itself
}


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = function(value){
    if(typeof value === 'string'){
        return 'string';    // return 'string' if value is string
    } else if(Array.isArray(value)){
        return 'array';     // return 'array' if value is array
    } else if(typeof value === 'undefined'){
        return 'undefined'; // return 'undefined' if value is undefined
    } else if(typeof value === 'number'){
        return 'number';    // return 'number' if value is number
    } else if(typeof value === 'boolean'){
        return 'boolean';   // return 'boolean' if value is boolean
    } else if(value === null){
        return 'null';      // return 'null' if value is null
    } else if(typeof value === 'function'){
        return 'function';  // return 'function' if value is function
    } else{
        return 'object';    // return 'object' as default
    }
}


/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
_.first = function(array, number){
    if(!Array.isArray(array)){
        return [];  // return empty array if array is not an array
    } else if(typeof number !== 'number'){
        return array[0];    // return first index of array if number is not a number
    } else if(number > array.length){
        let arr = [];
        for(let i = 0; i < array.length; i++){
        arr.push(array[i]); // pushes everything into new array if number is greater than the length of array
        }
        return arr;
    } else if(number > 0){
        let arr = [];
        for(let i = 0; i < number; i++){
        arr.push(array[i]); // pushes the length of number into new array
        }
        return arr;
    } else{
        return [];
    }
}


/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = function(array, number){
    if(!Array.isArray(array)){
        return [];  // return empty array if array is not an array
    } else if(typeof number !== 'number'){
        return array[array.length - 1]; // if number is not a number return the last element in array
    } else if(number > array.length){
        return array;   // return array if number is greater than the length of array
    } else if(number > 0){
        return array.slice(-number, number + 1);    // use slice method to return the last elements of array set by number
    } else{
        return [];
    }
}


/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = function(array, value){
    for(var i = 0; i < array.length; i++){
        if(value === array[i]){
            return i;   // return the amount of time value has occured in array
        }
    }
    return -1;  // return -1 if value does not appear
}

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
_.contains = function(array, value){
    for(let i = 0; i < array.length; i++){
        if(array[i] === value){
            return true;    // return true if value appears in array
        }
    }
    return false;
}


/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
_.each = function(collection, test){
    if(Array.isArray(collection)){  // if collection is an array
        for(let i = 0; i < collection.length; i++){
            test(collection[i], i , collection);    // perform function at every element
        }
    } else{ // if collection is an object
        for(var key in collection){
            test(collection[key], key, collection); // perform function at every element
        }
    }
}


/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
_.unique = function(array){
    return [...new Set(array)]; // return new array of all elements with dupes removed using set
}


/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
_.filter = function(array, test){
    var newArr = [];    // new array to be returned
    for(let i = 0; i < array.length; i++){
        if(test(array[i], i, array)){
            newArr.push(array[i]);  // push elements that have passed function into new array
        }
    }
    return newArr;
}


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
_.reject = function(array, test){
    var trues = _.filter(array, test);  // use filter function on trues.
    var falses = [];
    for(let i = 0; i < array.length; i++){
        if(!trues.includes(array[i])){
            falses.push(array[i]);  // if trues does not include an element in array push it to falses
        }
    }
    return falses;
}
        


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function(array, test){
    var trues = _.filter(array, test);  // use filter function on trues
    var falses = _.reject(array, test); // use reject function of falses
    var combinedArray = [trues, falses];// new array to be returned containing trues and falses
    return combinedArray;
}


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = function(collection, test){
    var newArr = [];    // new array to be returned
    if(Array.isArray(collection)){  // if collection is array
        for(let i = 0; i < collection.length; i++){
            newArr.push(test(collection[i], i, collection));    // loop through each element and push each tested into new array
        }
    } else{ // if collection is object
        Object.entries(collection).forEach(([key, val]) => {
            newArr.push(test(collection[key], key, collection));     // loop through each element and push each tested into new array
        });
    }
    return newArr;
}


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
_.pluck = function(arr, prop){
   return  _.map(arr, function(object, index, array){   // return map function using array
        return object[prop];    // return property of object
    });
}

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
_.every = function(collection, test){
 var truthy = true; // set default value to true
    if(!test){  // if test does not exist
        if(Array.isArray(collection)){  // if collection is array
            for(var i = 0; i < collection.length; i++){
                if(!collection[i] === true){    // if element in array is not true
                truthy = false;
                }
            }
        } else {    // if collection is object
            for(var key in collection){
                if(!collection[i] === true){    // if element in object is not true
                truthy = false;
                }
            }
        }
    } else{
        if(Array.isArray(collection)){  // if collection is array
            for(var i = 0; i < collection.length; i++){
                if(!test(collection[i], i, collection)){    // if tested element in array is not true
                truthy = false;
                }
            }
        } else {    // if collection is object
            for(var key in collection){ 
                if(test(collection[i], i, collection)){     // if tested element in object is true
                truthy = false;
                }
            }
        }
    }
    return truthy;
}


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function(collection, test){
 var truthy = false;    // set default value to false
    if(!test){  // if test does not exist
        if(Array.isArray(collection)){  // if collection is array
            for(var i = 0; i < collection.length; i++){
                if(collection[i] === true){ // if element in array is true
                truthy = true;
                }
            }
        } else {    // if collection is object
            for(var key in collection){
                if(collection[i] === true){ // if element in object is true
                truthy = true;
                }
            }
        }
    } else{
        if(Array.isArray(collection)){  // if collection is array
            for(var i = 0; i < collection.length; i++){
                if(test(collection[i], i, collection)){ // if tested element in array is true
                truthy = true;
                }
            }
        } else {    // if collection is object
            for(var key in collection){
                if(!test(collection[i], i, collection)){    // if tested element in object is false
                truthy = true;
                }
            }
        }
    }
    return truthy;
}


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
_.reduce = function(array, test, seed){
    if(seed === undefined){ // if seed is undefined
        for(var i = 0;i <= array.length - 1; i++){
            if(i === 0){    // if i is 0
                seed = array[0];    // set seed to first index of array
            } else{
                seed = test(seed,array[i],i);   // use seed as previous result
            }
        }
    } else{ // if seed is defined
        for(var i = 0; i < array.length; i++){
            seed = test(seed,array[i],i);   // iterate as normal
        }
    }
    return seed;
}

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
_.extend = function(object){
    object = object || {};  // object is object or empty object
    for(let i = 0; i < arguments.length; i++){  // loop through length of arguments using keyword arguments
        if(!arguments[i])   // if index of arguemnts does not exist continue
        continue;
        for(var key in arguments[i]){   // for in loop for arguments
            if(arguments[i].hasOwnProperty(key)){   // if arguments at index i has property key
                object[key] = arguments[i][key];    // set object of key to arguments key at index i
            }
        }
    }
    return object;  // return object
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}

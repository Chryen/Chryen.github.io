////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step = start <= end ? 1 : -1) {
    var array = [];     // empty array to hold new range
    if(start === end){
        return array;   // if the numbers are the same return empty array
    } else{
        for(let i = start; step >= 0 ? i <= end : i >= end; i+=step) {
            array.push(i);  // set conditional ending point using ternary operator
        }
        return array;
    }
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array){  
    var sum = 0;  // variable used to add sum
    for(let i = 0; i < array.length; i++){
        sum = sum + array[i];   // add each element of range(array) to sum
    }
    return sum;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
    var arr = [];   // empty array to hold newly reversed array
    for(let i = array.length - 1; i >= 0; i--){
        arr.push(array[i]); // push values of array from last to 1st position into new array
    }
    return arr;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
    array.reverse();    // use reverse method to reverse same array
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
    var list = null;    // initialize list to null
    for(let i = array.length - 1; i >= 0; i--){
        list = prepend(array[i], list); // loop through array and use prepend function to add {value, rest: list} to list
    }
    return list; // return list
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
    var result = [];    // empty array to hold array of list
    while(list){
        result.push(list.value);
        list = list.rest;   // pushes all elements in list to new array
    }
    return result;  // return array
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value, list) {
    return{
        value,
        rest: list      // return value, rest: list for array to list function
    }

}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, index) {
    return listToArray(list)[index];    // returns function listToArray with argument list with index taken from parameter
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(value1, value2) {
    if(value1 === value2){  // if value2 and value2 strictly equals eachother return true
        return true;
    } else if((typeof value1 === 'object' && value1 !== null) && (typeof value2 === 'object' && value2 !== null)){  // set condtions for object
        if(Object.keys(value1).length !== Object.keys(value2).length){  // if object is not empty
            return false;   // returns false
        }
        for(var key in value1){ // for in loop for object value1
            if(value2.hasOwnProperty(key)){ // if value2 contains key
                if(! deepEqual(value1[key], value2[key])){  
                    return false;   // if key does not deeply equal for value1 and value2 return false
                }
            } else{
                return false; // return false if value2 does not have a key
            }
        }
         return true;
    }
    else{
        return false;
    }
}


////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
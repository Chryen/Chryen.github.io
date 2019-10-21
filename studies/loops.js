/*
 * LOOPS:
 * 
 * Loops are built-in constructs, or features of JavaScript, that
 * allow us to execute a block of code as many times as needed. 
 * 
 * 1. Explain while, for, and for-in loops
 * 2. Loop any number of times, counting up and down to 0
 * 3. Loop over an array, forwards and backwards
 * 4. Loop over an Object
 */

// 1. 2. 3. For Loop (forwards) - great for iterating and looping over arrays //
var array = [2,4,6];
for(var i = 0; i < array.length; i++){      // sets a starting point, ending point, and an incrementer for the loop
    console.log(i);                         // prints => i ex. 0, 1, 2
    console.log(array[i]);                  // prints the element inside of array[i] ex. 2, 4, 6
}
// 3. For Loop (backwards) //
for(var i = array.length - 1; i > -1; i--){      // sets a starting point, ending point, and an incrementer for the loop
    console.log(i);                         // prints => i ex. 2, 1, 0
    console.log(array[i]);                  // prints the element inside of array[i] ex. 6, 4, 2
}

// 4. For-in Loop - designed for iterating/looping over Objects //
var person = { nameFirst: 'Chris', nameLast: 'Nguyen' };
for(var key in person){                     // retrieve those keys to get values from the person Object
    console.log([key]);
}

/*
 * Keys are essentially Strings.  The variable key is populated, one by one,
 * with keys of the person Object.
 */

// 1. While Loop //
var count = -1;                             // set starting point outside while loop
while(count < 10){                          // set condition
    console.log(count);
    count++;                                // set increment within the while loop
}

/*
 * The While Loop functions simlarly with the for loop. However, 
 * the conditions are located in separate places in the code.
 */
/*
 * FUNCTIONS:
 * 
 * 1. The two phases to using functions: First we must ___? Next we 
 * can execute (or two other words for executing a function?) a 
 * function by?
 * 
 * 2. What’s the difference between a function’s parameters and 
 * arguments PASSED to a function?
 * 
 * 3. What’s the syntax for a NAMED function?
 * 
 * 4. How do we assign a function to a variable?
 * 
 * 5. Functions can OPTIONALLY take inputs, and OPTIONALLY return 
 * a single value. How do we specify inputs, and how do we specify 
 * outputs?
 * 
 * 6. Scope: Functions can see and modify variables in parent or 
 * global scopes. The inverse is NOT true. 
 * 
 * 7. Closures: Functions form closures around the data they house. 
 * If an object returned from the Function and is held in memory 
 * somewhere (referenced), that closure stays ALIVE, and data can
 * continue to exist in these closures! 
 */

// 1. Declaring the function and calling/invoking //
// 3. Syntax for a named function // 
function add(num1, num2){   // 2. num1, num2 are parameters
    return num1 + num2;
    // 5. We can specify the outputs through the return statement
}
add(2,5);   // 2. 2, 5 are arguments
// 5. We can specify the inputs through the arguments
var x = add();  // 4. Assigning a function to a variable

// 6. Scope //
var num = 2;    // Global scope
function isNum(num){    // Local scope
    if(num === 1){
        console.log('Number is 1');
    } else{
        console.log('Number is not 1');
    }
}

// 7. Closures //
var globalVariable = 1;
function(){
    var funcVariable = 2;   // No Closure
    return funcVariable;
}
function(){
    var funcVariable = 2 + globalVariable;  // Closure
    return funcVariable;
}


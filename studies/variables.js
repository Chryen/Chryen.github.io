/*
* VARIABLES:
*
* To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/*
 * CONSTANTS:
 * 
 * Unlike variables, constants are containers whose values can never change.  They are block
 * scoped and are not hoisted to the top of their block scope.
 * 
 * To create a constant we use the keyword, const, followed by a name for our constant.
 * 
 * Constants must be assigned a value immediately and cannot be left unassigned or undefined.
 */

// Not allowed! //
// const myConstName;

// initialization //
const myConstName = 'chris';
console.log(myConstName); // prints => chris

/*
 * LETS:
 * 
 * Similar to variables, let can be reassigned.  It allows us to declare a block scope local
 * variable.  When used inside a block, let limits the variable's scope to that block.
 * 
 * To create a let we use the keyword, let, followed by a name for our variable. 
 */

// An example of let being used inside a block //
const city = 'Harvey';
if(city === 'Harvey'){
    // console.log(onlyAvailableInsideIfBlock); // prints undefined, let is hoisted to here
    
    var availableOutsideIfBlock = 'foo';
    let onlyAvailableInsideIfBlock = 'bar';
}

/*
 * 4. BLOCK SCOPED & HOISTING:
 * 
 * As mentioned before in the constants section, constants are block scoped.  This means they are
 * pinned to the code block in which they're declared/assigned.  Constants are not hoisted 
 * to the top of their enclosing block of code.
 * 
 * Hoisting with var within block or local scopes will be treated as if var was declared at the top 
 * of the block or local scope(if declared inside a function).
 */

function day(weather){
    // msg not available here, because it's scoped to the if-else block
    if(weather === 'sunny'){
        // if sunny
        console.log(msg); // throws error
        const msg = 'Nice day, eh?';
        console.log(msg); // prints Nice day, eh?
    } else {
        // if not sunny
        console.log(msg); // throws error
        const msg = "Nice weather, for a duck!";
        console.log(msg); // Nice weather, for a duck!;
    }
    // msg not available here because it's scoped to the if-else block
}




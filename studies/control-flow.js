/*
 * CONTROL FLOW:
 * 
 * This is also known as Conditional Statements or Branching.  Conditional Statements
 * allow us to control the flow of our application.  We can have our code make 
 * decisions by asking true or false questions.  Based on the answer, the code will 
 * run something different.  To do this, we use if-statements and their chains. 
 * 
 * 1. If
 * 2. Else-if
 * 3. Else
 * 4. Switch
 */

// 1. If statement + 2. Else-if statement + 3. Else statement //
var city = 'New Orleans';

if(city === 'New Orleans'){
    // block of code executed if condition is true
} else if(city === 'New York'){
    // block of code executed if condition is true the previous condition is false
} else{
    // block of code executed if all other conditions are false
}
/*
 * By chaining together all three statements together, we can create a series of 
 * comparisons.  We may extend this by adding additional else-if statements in between 
 * the if statement and the else statement.  It is also important to note that these
 * types of chains must end with an else statment.
 */

// 4. Switch statement //
var color = 'red';

switch(color){
    case 'orange':
    // block of code executed if color is orange
    break;
    case 'red':
    // block of code executed if color is red
    break;
    case 'yellow':
    // block of code executed if color is yellow
    break;
}
/*
 * Switch statements function similarly to the if-else chain.  An input expression is 
 * evaluated directly by using "case" to determine if the condition is true or false. 
 * If the case matches, the block of code is executed.  After execution, a break 
 * stetement is used to exit the switch statement immediately.
 */





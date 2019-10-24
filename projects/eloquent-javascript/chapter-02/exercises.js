
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(size) {
    for (let i = "#"; i.length <= size; i = i + "#"){  // adds # to i for every loop
	   console.log(i);
    }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
    for(let i = 1; i <= 15; i++){  // set for loop with starting position 1 and ending position 100
        if(i % 3 === 0 && i % 5 !== 0){ // if there is no remainder when i/15
            console.log("fizz");
        } else if(i % 3 !== 0 && i % 5 === 0){  // if there is no remainder when i/3
            console.log("buzz");
        } else if(i % 3 === 0 && i % 5 === 0){ // if there is no remainder when i/5
            console.log("fizzbuzz");
        } else {
            console.log(i); // print i when all other conditions fail
        }
    }
}



////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(size) {
    var board = "";	// empty string that will contain chessboard
    
    for(var i = 1; i <= size; i++){	// for loop to create a new line 8 times
        for(var j = 1; j <= size; j++){	// for loop to check 8 characters in a line
            if((i + j) % 2 === 0){	// condition to print even numbers
                board += " ";	// adds " " when condition is even
            } else {
                board += "#";	// adds "#" when condition is odd
            }
        }
    board += "\n";	// new line after 8 characters have been created in a line
    }
    console.log(board);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}

/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animals, name){
    for(let i = 0; i < animals.length; i++){    // loop through animals to check every animal
        if(name === animals[i].name){
            return animals[i];  // if name(user input) = animals return it
        } else{
        }
    }  return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement){
    for(let i = 0; i < animals.length; i++){
        if(name === animals[i].name){
            animals[i] = replacement;   // replace the name(user input) if it exists
        } else {
            
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name){
    for(let i = 0; i < animals.length; i++){
        if(name === animals[i].name){
             animals.splice(i,i);   // use splice to remove specific element in array if name(user input) matches
        } else if(name === animals[0].name){
            animals.shift();    // removes animal in 1st element with shift
        } else{
        }
    }
}




//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal){
    if(animal['name'].length > 0 && animal['species'].length > 0){  // if statement to check if animal's string is longer than 0
        for(let i = 0; i < animals.length; i++){
            if(animals[i]['name'] === animal['name']){  // if statement to check if animal already exists
                break;  // if animal already exists, break out and do nothing
            } else{
                animals.push(animal);   // else animal does not exists, push animal and break
                break;
            }
        }
    }
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}

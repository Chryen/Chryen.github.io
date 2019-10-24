//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    var array = []; // create empty array to hold object keys
    for(let key in object){
        array.push(object[key]);    // push keys of object into new array
    }
    return array;   // return new array with object keys
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    return Object.keys(object).join(" ");   // returns the keys of objects and spaces them out using join method
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    return objectValues(object).filter(string => typeof string === 'string').join(' '); /* returns string of objects by using filter method to search 'string' using typeof 
                                                                                         * and use join method to space them out
                                                                                        */ 
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if(Array.isArray(collection)){
        return 'array'; // return 'array' by using Array.isArray method
    } else if(typeof collection === 'object'){
        return 'object';    // return 'object' using typeof method
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string[0].toUpperCase() + string.slice(1);   // returns string with first letter capitalized by using toUpperCase method on first letter and adding the rest of the string through slice method
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    return string.split(" ").map(string => capitalizeWord(string)).join(" ");   // returns all words of string capitalized by using capitalizeWord function.
                                                                                // the words are first split using split method then map is used with capitalizeWord
                                                                                // to capitalize each word's 1st letter
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    return `Welcome ${capitalizeWord(object.name)}!`;   // returns Welcome name by using back tick/template literals to create a sentence
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    return `${capitalizeWord(object.name)} is a ${capitalizeWord(object.species)}`; // similar to welcome message. returns the name and species of
                                                                                    // an object using template literals
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    if(!object.hasOwnProperty('noises') || object.noises.length === 0){
        return "there are no noises";   // returns there are no noises if object.noises does not exist
    }
    return  object.noises.join(' ');    // if noises exist, return it spaced out using join method
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    return (string.includes(word)); // returns true if string has word using include method
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object.friends.push(name);  // push name to object friends to add friend
    return object;  // return object
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    if(object.hasOwnProperty('friends')){
        return object.friends.includes(name);   // returns true if object.friends contains the name using includes method
    } else{
        return false;   // returns false if otherwise
    }
}


//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    var person; // empty var person to hold name
    var arr;    // empty arr to hold new array of non friends
    for(let i = 0; i < array.length; i++){
        if(array[i].name === name){
            person = array[i];  // loop through array and checks if name exists in array. If so, add to person
        }
    }
    arr = array.map(obj => obj.name);
    return arr.filter(str => !isFriend(str, person) && str !== person.name);    // use filter method to return the negation of isFriend function
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    object[key] = value;
    return object;  // return updated object
}


//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    array.forEach(str => {if(object.hasOwnProperty(str)) {delete object[str]}});    // use forEach method to remove certain objects if it matches array
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    return [...new Set(array)]; // use set method to return new array without dupes
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}
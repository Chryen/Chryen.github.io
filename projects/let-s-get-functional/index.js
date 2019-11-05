// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-chryen");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./<YOUR_GITHUB_FOLDER/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    var malesArr = _.filter(array, function(customerObj, i, array){ // use filter function to return only male customers
        return customerObj.gender === 'male';
    })
    return malesArr.length; // returns length of malesArr
};

var femaleCount = function(array){
    return _.reduce(array, function(prev, curr, i){
        if(curr.gender === 'female'){    // if gender is female
            prev++; // add one to prev
        }
        return prev;
    }, 0)
};

var oldestCustomer = function(array){
    var oldest = null;  // set oldest to hold age
    var name = "";      // set name to hold name
    for(let i = 0; i < array.length; i++){
        if(array[i].age >= oldest){ // if the age in element is greater than oldest
            oldest = array[i].age;  // replace oldest with age
            name = array[i].name;   // replace name with new name
        }
    }
    return name;    // return name
}

var youngestCustomer = function(array){
    var youngest = 1000;    // set youngest to an age noone will reach
    var name = "";          // set name to hold name
    for(let i = 0; i < array.length; i++){
        if(array[i].age <= youngest){   // if the age in element is less than oldest
            youngest = array[i].age;    // replace youngest with age
            name = array[i].name;       // replace name with new name
        }
    }
    return name;    // return new name
}

var averageBalance = function(array){
    var average = null;     // empty number
    var averageArray = [];  // empty array
    var averageArray2 = []; // empty array
    for(let i = 0; i < array.length; i++){   
        averageArray.push(array[i]['balance']); // push value of balance into an array
    }
    for(let i = 0; i < averageArray.length; i++){
        averageArray2.push(parseFloat(averageArray[i].substr(1).replace(/,/g, '')));    // push value of balance converted to a number by removing unwanted symbols into array2
    }
    //console.log(averageArray2);
    average =  _.reduce(averageArray2, function(prev, curr, i){ // reduce method to add up sum
        prev += curr;
        return prev;
    }, 0)
    //console.log(average);
    average = average/(averageArray2.length);   // computes average by finally dividing by number of elements in array2
    //console.log(average.toFixed(2));
    return average;  // return average with 2 decimal points
}

var firstLetterCount = function(array, letter){
    return _.reduce(array, function(prev, curr, i){ 
        if(curr.name[0] === letter || curr.name[0].toLowerCase() === letter){   // if letter uppercase and lowercase is equal to letter
            prev++; // add to prev
        }
        return prev;
    }, 0)
}

var friendFirstLetterCount = function(array, customer, letter){
    var count = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i].name === customer){
            //console.log(customer);
            for(let j = 0; j < array[i].friends.length; j++){
                if(array[i].friends[j].name[0].toLowerCase() === letter.toLowerCase()){
                    //console.log(array[i].friends[j]);
                    count++;
                }
            }
        }
    }
    return count;
}

var friendsCount = function(array, name){
    var friends = [];   // empty array to be returned
    for(var i = 0; i < array.length; i++){  // loop through customers]
        if(array[i].hasOwnProperty('name')){    // element has property name
            for(let j = 0; j < array[i].friends.length; j++){   // loop through friends array
                if(array[i].friends[j].name === name){  // if name strictly equals name
                    friends.push(array[i].name); // push name into friends array
                }
            }
        }
    }
    return friends;
    
    /*
    var newArr = [];
    var friendsArr = [];
    friendsArr =  _.reduce(array, function(prev, curr, i){
        newArr =  _.reduce(curr.friends, function(prev, curr, i){
            prev.push(curr.name === name);
            return prev;
        }, [])
        if(newArr[i] === true){
            prev.push(curr.name);
        }
        return prev;
    }, [])
    return friendsArr;
    */
}

var topThreeTags = function(array){
    let tags = [];
    _.map(array, function(customer){
        return _.map(customer.tags, function(tag){
            //console.log(tag);
            tags.push(tag);
        })
    });  // pluck to hold tags in array
    // tags = tags.join().split(','); // split tags array with ,
    //console.log(tags);
    let count = {};                     // empty object count
    _.filter(tags, function(element, i, array){ 
        if(count.hasOwnProperty(element) === false){
            count[element] = 0;
        }
        return count[element]++ ;
    });
    while(Object.keys(count).length > 3){   // while loop to set up tags to have 3 strings
        for (var key in count){
            count[key]-- ;
            if (count[key] < 1){
                delete count[key]; 
            }
        }
    }
    //console.log(count);
    return Object.keys(count);
}

var genderCount = function(array){
    var maleCount = null;   // empty number variable to hold number of males
    var femaleCount = null; // empty number variable to hold number of females
    var nonBiCount = null;  // empty number variable to hold number of nonbinary
    maleCount = _.reduce(array, function(prev, curr, i){
        if(curr.gender === 'male'){
            prev++;
        }
        return prev;
    }, 0)
    femaleCount = _.reduce(array, function(prev, curr, i){
        if(curr.gender === 'female'){
            prev++;
        }
        return prev;
    }, 0)
    nonBiCount = _.reduce(array, function(prev, curr, i){
        if(curr.gender !== 'female' && curr.gender !== 'male'){
            prev++;
        }
        return prev;
    }, 0)
    var object = {          // create object to be returned with correct format
        'male': maleCount,
        'female': femaleCount,
        'non-binary': nonBiCount
    }
    return object;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;

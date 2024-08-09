// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

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
 *    npm start --prefix ./let-s-get-functional.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    let males = array.filter(customer => customer.gender === 'male')
    return males.length;
};

var femaleCount = function(array){
    let females = array.reduce ((acc, current) => {
        if (current.gender === 'female'){
            acc++;
        }
        return acc;
    }, 0);

    return females;
};

var oldestCustomer = function(array) {
    let oldestAge = 0;
    let oldestName = '';
    array.forEach(customer => {
        if (customer.age > oldestAge) {
            oldestAge = customer.age;
            oldestName = customer.name;
        }
    });

    return oldestName;
};

var youngestCustomer = function(customers) {
    if (!Array.isArray(customers) || customers.length === 0) {
        return "No customers";
    }

    let youngestAge = Infinity;
    let youngestName = "";

    customers.forEach(customer => {
        if (customer.age < youngestAge) {
            youngestAge = customer.age;
            youngestName = customer.name;
        }
    });

    return youngestName;
};

var averageBalance= function(array) {
    let totalBalance = array.reduce((acc, customer) => acc + Number(customer.balance.replace(/[$,]/g,'')), 0);
    let average = totalBalance / array.length;
    return average;
};
console.log(averageBalance(customers));

var firstLetterCount= function(array, letter) {
    letter = letter.toLowerCase();
    return array.filter(customer => customer.name.toLowerCase().startsWith(letter)).length;
};

var friendFirstLetterCount = function(array, customer, letter) {
    let friendsFirstLetter;
    for ( let i = 0; i < array.length; i++ ) {
        if ( array[i].name === customer ) {
            friendsFirstLetter = _.filter(array[i].friends, elem => elem.name[0].toLowerCase() === letter.toLowerCase()).length;
        }
    }
    return friendsFirstLetter;
};

var friendsCount = function(array, name) {
    let count = [];
    for ( let i = 0; i < array.length; i++ ) {
        for ( let n = 0; n < array[i].friends.length; n++ ) {
            if( array[i].friends[n].name === name) {
                count.push(array[i].name);
            }
        }
    }
    return count;

};

var topThreeTags = function(array) {
    let tagsCount = {};

    array.forEach(customer => {
        customer.tags.forEach(tag => {
            tagsCount[tag] = (tagsCount[tag] || 0) + 1;
        });
    });

    const sortedTags = Object.keys(tagsCount).sort((a, b) => tagsCount[b] - tagsCount[a]);

    return sortedTags.slice(0, 3);
};

var genderCount = function(array) {
    if (!Array.isArray(array) || array.length === 0) {
        return "Invalid input or empty array";
    }

    let genderCounts = {
        male: 0,
        female: 0,
        'non-binary': 0
    };

    array.forEach(person => {
        if (person.gender === 'male') {
            genderCounts.male++;
        } else if (person.gender === 'female') {
            genderCounts.female++;
        } else {
            genderCounts['non-binary']++;
        }
    });

    return genderCounts;
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

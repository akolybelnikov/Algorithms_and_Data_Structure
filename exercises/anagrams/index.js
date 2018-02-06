// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

    // 0.354s

    return cleanString(stringA) === cleanString(stringB)

    

    // 0.259s

    // const objA = {};
    // const objB = {};
    // const A = stringA.replace(/[^\w]/g, "").toLowerCase().split('');
    // const B = stringB.replace(/[^\w]/g, "").toLowerCase().split('');

    // if (A.length === B.length) {
    //     for (let char of A) {
    //         objA[char] ? objA[char] +=1 : objA[char] = 1;
    //     }    
    //     for (let char of B) {
    //         objB[char] ? objB[char] +=1 : objB[char] = 1;
    //     }        
    //     for (let key of Object.keys(objA)) {
    //         if (objA[key] === objB[key]) {
    //             return true;
    //         } else {
    //             return false
    //         }
    //     } 
    // }
    //return false;

    // 0.324s

    // const aCharMap = buildCharMap(stringA);
    // const bCharMap = buildCharMap(stringB);

    // if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    //     return false;
    // } 

    // for (let char in aCharMap) {
    //     if (aCharMap[char] !== bCharMap[char]) {
    //         return false;
    //     }
    // }

    // return true;
    
}

cleanString = (str) => {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

// buildCharMap = (str) => {
//     const charMap = {};
//     for (let char of str.replace(/[^\w]/g).toLowerCase()) {
//         charMap[char] = charMap[char] +1 || 1; 
//     }

//     return charMap;
// }

module.exports = anagrams;

// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// 0.333s

// function vowels(str) {
//     count = 0;
//     if (str.toLowerCase().includes('a')) {
//         count += 1;
//     }
//     if (str.toLowerCase().includes('e')) {
//         count += 1;
//     }
//     if (str.toLowerCase().includes('i')) {
//         count += 1;
//     }
//     if (str.toLowerCase().includes('o')) {
//         count += 1;
//     }
//     if (str.toLowerCase().includes('u')) {
//         count += 1;
//     }
//     return count;
// }

// module.exports = vowels;

// 0.353s

// function vowels(str) {
//     count = 0;
//     const substring = ['a', 'e', 'i', 'o', 'u'];

//     for (let char of str.toLowerCase()) {
//         if (substring.includes(char)) {
//             count++;
//         }
//     }

//     return count;
// }

// module.exports = vowels;

// 0.420s

function vowels(str) {

    const matches = str.match(/[aeiou]/gi);

    return matches ? matches.length : 0;

}

module.exports = vowels;
// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// 1.785s

// function reverseInt(n) {
//     var rev = n.toString().split('').reverse().join('');
//     if (n < 0 ) {
//         return parseInt(rev, 10) * -1;
//     }
//     return parseInt(rev, 10);
// }

// 1.41s

// function reverseInt(n) {
//     var rev = n.toString().split('').reverse().join('');
//     return parseInt(rev, 10) * Math.sign(n);
// }

// 1.277s

function reverseInt(n) {

    return parseInt(n
        .toString()
        .split('')
        .reverse()
        .join('')
    , 10) * Math.sign(n);
}

module.exports = reverseInt;

// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// 0.443s

// function steps(n) {
//     if (n === 1) {
//         console.log("#"); 
//     } else {
//         for (let i = 1; i <= n; i ++) {
//             console.log("#".repeat(i) + " ".repeat(n - i));
//         }
//     }
// }

// module.exports = steps;

// 0.352s

// function steps(n) {

//     for (let row = 0; row < n; row++) {
//         let stair = '';

//         for (let column = 0; column < n; column++) {
//             if (column <= row) {
//                 stair += '#';
//             } else {
//                 stair += ' '
//             }
//         }

//         console.log(stair);
//     }

// }

// module.exports = steps;

// 0.342s

function steps(n, row = 0, stair = '') {

    if (n === row) {
        return;
    }

    if (n === stair.length) {
        console.log(stair);
        steps(n, row + 1);
        return;
    }

    // if (stair.length <= row) {
    //     stair += '#';
    // } else {
    //     stair += ' ';
    // }

    // steps(n, row, stair);

    //ternary solution: 0.3s

    const add = stair.length <= row ? '#' : ' ';

    steps(n, row, stair + add);

}

module.exports = steps;
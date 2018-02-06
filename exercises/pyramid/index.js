// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n, row = 0, pounds='') {

//     if (n === row) {
//         return;
//     }

//     if (pounds.length === (n * 2) - 1) {
//         console.log(pounds);
//         return pyramid(n, row += 1);
//     }

//     const pound = pounds.length < n - row - 1 ? ' ' : pounds.length > n + row - 1 ? ' ' : '#';
//     pyramid(n, row, pounds += pound);   

// }

// module.exports = pyramid;

// 0.285s

function pyramid(n) {
    const midPoint = Math.floor((2 * n - 1) / 2);
    if (n === 0) {
        return;
    }

    for (let row = 0; row < n; row++) {
        level = '';
        for (let column = 0; column < n * 2 - 1; column++) {
            
            if (midPoint - row <= column && midPoint + row >= column) {
                level += '#';
            } else {
                level += ' ';
            }
        }

        console.log(level);
    }

}

module.exports = pyramid;

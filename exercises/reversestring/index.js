// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

    debugger;
    return str.split('').reduce((rev, char) => char + rev, '');
    // return str
    //     .split('')
    //     .reverse()
    //     .join('');

}

reverse('asdf');

module.exports = reverse;

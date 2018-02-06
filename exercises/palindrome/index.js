// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {

    // 1.328s:
    if (str.split('').reverse().join('') !== str) {
        return false;
    }
    return true

    //1.759s
    // return str.split('').reduce((rev, char) => char + rev, '') === str;

    //1.96s
    // return str.split('').every((char, i) => {
    //     return char === str[str.length - i - 1];
    // });

}

module.exports = palindrome;

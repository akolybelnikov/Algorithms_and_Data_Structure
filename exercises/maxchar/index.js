// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"



function maxChar(str) {
    let obj = {};
    let max = 0;
    let maxChar = '';
    for (let char of str.split('')) {

        // 2.564s

        // if (!obj[char]) {
        //     obj[char]  =1;
        // } else {
        //     obj[char]++;
        // }

        // 2.172s

        obj[char] = obj[char] + 1 || 1;
    }

    // let oftest = Math.max(...Object.values(obj));

    // for (let pair of Object.entries(obj)) {
    //     if (pair[1] === oftest) {
    //       return pair[0];
    //   }
    // }

    // 1.703s

    for (let char in obj) {
        if (obj[char] > max) {
            max = obj[char];
            maxChar = char;
        }
    }

    return maxChar;
}

module.exports = maxChar;

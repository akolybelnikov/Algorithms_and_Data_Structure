// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]



function chunk(array, size) {
    // const chunked = [];

    //0.3s

    // while (array.length > 0) {
    //     let spliced = array.splice(0, size);
    //     chunked.push(spliced);
    // }

    //0.259s

    // for (let el of array) {
    //     const last = chunked[chunked.length - 1];
    //     if (!last || last.length === size) {
    //         chunked.push([el]);
    //     } else {
    //         last.push(el);
    //     }
    // }

    // 0.366s

    //0.268s
    
    const numChunk = Math.ceil(array.length / size);
    let arrayPos = 0;
    let arrChunk = [];
    for (var i = 0; i < numChunk; i++) {
        arrChunk[i] = [];
            for (var j = 0; j < size; j++) {
            arrChunk[i][j] = array[arrayPos];
            if (arrayPos === array.length - 1) {
                break;
            }
            arrayPos++;
        }
    }
    return arrChunk;
}

module.exports = chunk;

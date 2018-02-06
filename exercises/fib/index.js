// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// 0.379s
// Big O = linear

// Iterative solution

// function fib(n) {
//     const fnums = [0, 1];

//     for (let i = 2; i <= n; i++) {
//         const now = fnums[i - 1];
//         const last = fnums[i - 2];

//         fnums.push(now + last);
//     }
//     console.log(fnums[n]);
//     return fnums[n];
// }

// module.exports = fib;



// Recursive solution:
// 2.706s

// function fib(n) {

//     if (n < 2) return n;
//     return fib(n - 1) + fib(n - 2);
// }

// module.exports = fib;

// imporved recursive solution with memoization:

function memoize(fn) {
    const cache = {};
    return function(...args) {
        if (cache[args]) {
            console.log(args);
            return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;
        console.log(result);
        return result;
    }
}

function slowFib(n) {

    if (n < 2) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);

module.exports = fib;

// Problem 74
// ==========
// 
// The number 145 is well known for the property that the sum of the
// factorial of its digits is equal to 145:
// 
// 1! + 4! + 5! = 1 + 24 + 120 = 145
// 
// Perhaps less well known is 169, in that it produces the longest chain of
// numbers that link back to 169; it turns out that there are only three such
// loops that exist:
// 
// 169 363601 1454 169
// 871 45361 871
// 872 45362 872
// 
// It is not difficult to prove that EVERY starting number will eventually
// get stuck in a loop. For example,
// 
// 69 363600 1454 169 363601 ( 1454)
// 78 45360 871 45361 ( 871)
// 540 145 ( 145)
// 
// Starting with 69 produces a chain of five non-repeating terms, but the
// longest non-repeating chain with a starting number below one million is
// sixty terms.
// 
// How many chains, with a starting number below one million, contain exactly
// sixty non-repeating terms?

const factorial = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];
const nextCache = [];

const chainCache = [];
chainCache[871] = 2;
chainCache[872] = 2;
chainCache[45361] = 2;
chainCache[45362] = 2;
chainCache[169] = 3;
chainCache[1454] = 3;
chainCache[363601] = 3;

function next(n) {
    if (n in nextCache) {
        return nextCache[n];
    }
    let output = 0;
    while(n) {
        const d = n % 10;
        output += factorial[d];
        n = (n - d) / 10;
    }
    return (nextCache[n] = output);
}

function chain(n) {
    if (n in chainCache) {
        return chainCache[n];
    }
    const o = next(n);
    if (n == o) {
        return 1;
    }
    return (chainCache[n] = chain(o) + 1);
}

return Array(1e6)
    .fill(0)
    .map((_, i) => i)
    .filter(a => chain(a) == 60)
    .length;

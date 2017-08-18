// Problem 1
// =========
// 
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
// 
// Find the sum of all the multiples of 3 or 5 below 1000.

// Natural numbers as a generator
function* naturals(limit) {
    for (let n = 1; n < limit; n++) {
        yield n;
    }
}

return [...naturals(1000)]
    .filter(x => x % 3 == 0 || x % 5 == 0)
    .reduce((a, b) => a + b);

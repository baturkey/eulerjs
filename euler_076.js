// Problem 76
// ==========
// 
// It is possible to write five as a sum in exactly six different ways:
// 
// 4 + 1
// 3 + 2
// 3 + 1 + 1
// 2 + 2 + 1
// 2 + 1 + 1 + 1
// 1 + 1 + 1 + 1 + 1
// 
// How many different ways can one hundred be written as a sum of at least
// two positive integers?

function findsum(n, min) {
    if (2 * min > n) {
        return 0;
    }
    return findsum(n, min + 1) + findsum(n - min, min) + 1;
}

return findsum(100, 1);

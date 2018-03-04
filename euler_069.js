// Problem 69
// ==========
// 
// Euler's Totient function, f(n) [sometimes called the phi function], is
// used to determine the number of numbers less than n which are relatively
// prime to n. For example, as 1, 2, 4, 5, 7, and 8, are all less than nine
// and relatively prime to nine, f(9)=6.
// 
// +------------------------------------------+
// | n  | Relatively Prime | f(n) | n/f(n)    |
// |----+------------------+------+-----------|
// | 2  | 1                | 1    | 2         |
// |----+------------------+------+-----------|
// | 3  | 1,2              | 2    | 1.5       |
// |----+------------------+------+-----------|
// | 4  | 1,3              | 2    | 2         |
// |----+------------------+------+-----------|
// | 5  | 1,2,3,4          | 4    | 1.25      |
// |----+------------------+------+-----------|
// | 6  | 1,5              | 2    | 3         |
// |----+------------------+------+-----------|
// | 7  | 1,2,3,4,5,6      | 6    | 1.1666... |
// |----+------------------+------+-----------|
// | 8  | 1,3,5,7          | 4    | 2         |
// |----+------------------+------+-----------|
// | 9  | 1,2,4,5,7,8      | 6    | 1.5       |
// |----+------------------+------+-----------|
// | 10 | 1,3,7,9          | 4    | 2.5       |
// +------------------------------------------+
// 
// It can be seen that n=6 produces a maximum n/f(n) for n 10.
// 
// Find the value of n 1,000,000 for which n/f(n) is a maximum.

const MAX = 1e6;
const SQRT_MAX = Math.trunc(Math.sqrt(MAX));
const HALF_MAX = Math.trunc(MAX / 2);
const f = Array(MAX + 1).fill(0).map((_, a) => a - 1);

for (let i = 2; i <= SQRT_MAX; i++) {
    for (let j = 2; j < i; j++) {
        const index = i * j;
        f[index] -= f[i];
        f[index] -= f[j];
    }
    f[i * i] -= f[i];
}

for (let i = SQRT_MAX + 1; i <= HALF_MAX; i++) {
    const limit = Math.trunc(MAX / i);
    for (let j = 2; j < limit; j++) {
        const index = i * j;
        f[index] -= f[i];
        f[index] -= f[j];
    }
}

let maxValue = Number.NEGATIVE_INFINITY;
let maxIndex = 0;

for (let i = 2; i <= MAX; i++) {
    const division = i / f[i];
    if (division > maxValue) {
        maxValue = division;
        maxIndex = i;
    }
}

return maxIndex;

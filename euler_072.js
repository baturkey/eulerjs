// Problem 72
// ==========
// 
// Consider the fraction, n/d, where n and d are positive integers. If n < d
// and HCF(n,d)=1, it is called a reduced proper fraction.
// 
// If we list the set of reduced proper fractions for d 8 in ascending order
// of size, we get:
// 
// 1/8, 1/7, 1/6, 1/5, 1/4, 2/7, 1/3, 3/8, 2/5, 3/7, 1/2, 4/7, 3/5, 5/8, 2/3,
//                        5/7, 3/4, 4/5, 5/6, 6/7, 7/8
// 
// It can be seen that there are 21 elements in this set.
// 
// How many elements would be contained in the set of reduced proper
// fractions for d 1,000,000?

const MAX = 1e6;
const SQRT_MAX = Math.floor(Math.sqrt(MAX));
const HALF_MAX = Math.floor(MAX / 2);
const f = Array(MAX + 1).fill(0).map((_, a) => a - 1);

for (let i = 2; i <= SQRT_MAX; i++) {
    for (let j = 2; j < i; j++) {
        f[i * j] -= f[i] + f[j];
    }
    f[i * i] -= f[i];
}

for (let i = SQRT_MAX + 1; i <= HALF_MAX; i++) {
    const limit = Math.floor(MAX / i);
    for (let j = 2; j <= limit; j++) {
        f[i * j] -= f[i] + f[j];
    }
}

return f.reduce((a, b) => a + b, 1);

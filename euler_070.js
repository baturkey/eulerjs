// Problem 70
// ==========
// 
// Euler's Totient function, f(n) [sometimes called the phi function], is
// used to determine the number of positive numbers less than or equal to n
// which are relatively prime to n. For example, as 1, 2, 4, 5, 7, and 8, are
// all less than nine and relatively prime to nine, f(9)=6.
// The number 1 is considered to be relatively prime to every positive
// number, so f(1)=1.
// 
// Interestingly, f(87109)=79180, and it can be seen that 87109 is a
// permutation of 79180.
// 
// Find the value of n, 1 < n < 10^7, for which f(n) is a permutation of n
// and the ratio n/f(n) produces a minimum.

const MAX = 1e7;
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
    for (let j = 2; j <= limit; j++) {
        const index = i * j;
        f[index] -= f[i];
        f[index] -= f[j];
    }
}

let minValue = Number.POSITIVE_INFINITY;
let minIndex = 0;

for (let i = 2; i < MAX; i++) {
    if (isPermutation(i, f[i])) {
        const division = i / f[i];
        if (division < minValue) {
            minValue = division;
            minIndex = i;
        }
    }
}

return minIndex;

function isPermutation(a, b) {
    const digits = [0,0,0,0,0,0,0,0,0,0];
    let d;

    while(a) {
        d = a % 10;
        digits[d]++;
        a = (a - d) / 10;
    }
    
    while(b) {
	d = b % 10;
        if (!digits[d]) {
            return false;
        }
	digits[d]--;
	b = (b - d) / 10;
    }

    for(var i = 0; i < 10; i++) {
	if(digits[i]) {
	    return false;
	}
    }
    return true;
}

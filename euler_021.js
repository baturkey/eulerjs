// Problem 21
// ==========
// 
// Let d(n) be defined as the sum of proper divisors of n (numbers less than
// n which divide evenly into n).
// If d(a) = b and d(b) = a, where a =/= b, then a and b are an amicable pair
// and each of a and b are called amicable numbers.
// 
// For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22,
// 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1,
// 2, 4, 71 and 142; so d(284) = 220.
// 
// Evaluate the sum of all the amicable numbers under 10000.

const MAX = 1e4;
const SQRT_MAX = Math.trunc(Math.sqrt(MAX));
const HALF_MAX = Math.trunc(MAX / 2);
const d = Array(MAX + 1).fill(1);

for (let i = 2; i <= SQRT_MAX; i++) {
    for (let j = 2; j < i; j++) {
        d[i * j] += i + j;
    }
    d[i * i] += i;
}

for (let i = SQRT_MAX + 1; i <= HALF_MAX; i++) {
    const limit = Math.trunc(MAX / i);
    for (let j = 2; j <= limit; j++) {
        d[i * j] += i + j;
    }
}

var total = 0;
for(var i = 2; i < MAX; i++) {
    var s = d[i];
    if(i != d[i] && d[s] == i) {
	total += i;
    }
}
return total;

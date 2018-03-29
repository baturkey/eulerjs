// Problem 73
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
// It can be seen that there are 3 fractions between 1/3 and 1/2.
// 
// How many fractions lie between 1/3 and 1/2 in the sorted set of reduced
// proper fractions for d 12,000?

const primes = [2, 3];
let count = 0;

for (let den = 5; den <= 12e3; den++) {
    const lower = (den - den % 3) / 3 + 1;
    const limit = (den + (den & 1)) / 2;

    const primeFactors = primes.filter(p => den % p == 0);
    
    if (!primeFactors.length) {
        primes.push(den);
        count += limit - lower;
        continue;
    }

    l: for (let num = lower; num < limit; num++) {
        const half_num = (num - (num & 1)) / 2;
        for (let p of primeFactors) {
            if (p > half_num) {
                break;
            }
            if (num % p == 0) {
                continue l;
            }
        }
        count++;
    }
}

return count;

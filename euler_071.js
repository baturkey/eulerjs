// Problem 71
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
// It can be seen that 2/5 is the fraction immediately to the left of 3/7.
// 
// By listing the set of reduced proper fractions for d 1,000,000 in
// ascending order of size, find the numerator of the fraction immediately to
// the left of 3/7.

const MAX = 1e6;

let output = {num: 0, den: 1};

for (let den = MAX; den > 1; den--) {
    for (let num = Math.floor(den * 3 / 7); num > 0; num--) {
        if (num * output.den < den * output.num) {
            break;
        }
        if (num * 7 < den * 3) {
            output = {num, den};
            break;
        }
    }
}

return reduce(output).num;

function reduce(frac) {
    for (let i = 2; i < Math.sqrt(frac.num); i++) {
        if (frac.num % i == 0 && frac.den % i == 0) {
            return reduce({num: frac.num / i, den: frac.den / i});
        }
    }
    return frac;
}

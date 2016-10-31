// Problem 27
// ==========
// 
// Euler published the remarkable quadratic formula:
// 
//                                n^2 + n + 41
// 
// It turns out that the formula will produce 40 primes for the consecutive
// values n = 0 to 39. However, when n = 40, 40^2 + 40 + 41 = 40(40 + 1) + 41
// is divisible by 41, and certainly when n = 41, 41^2 + 41 + 41 is clearly
// divisible by 41.
// 
// Using computers, the incredible formula  n^2 - 79n + 1601 was discovered,
// which produces 80 primes for the consecutive values n = 0 to 79. The
// product of the coefficients, 79 and 1601, is 126479.
// 
// Considering quadratics of the form:
// 
//   n^2 + an + b, where |a| < 1000 and |b| < 1000
// 
//                               where |n| is the modulus/absolute value of n
//                                                e.g. |11| = 11 and |-4| = 4
// 
// Find the product of the coefficients, a and b, for the quadratic
// expression that produces the maximum number of primes for consecutive
// values of n, starting with n = 0.

var isPrime = function() {
	var memo = [false, false, true];

	return function(n) {
		if(n < 0) {
			return false;
		}
		if(n in memo) {
			return memo[n];
		}
		if(n % 2 == 0) {
			return (memo[n] = false);
		}
		for(var i = 3; i <= Math.sqrt(n); i += 2) {
			if(n % i == 0) {
				return (memo[n] = false);
			}
		}
		return (memo[n] = true);
	};
}();

function numPrimes(a, b) {
	for(var num = 0; isPrime(num * num + a * num + b); num++);
	return num;
}

var max = 0;
var product = 0;

for(var a = -999; a < 1000; a++) {
	for(var b = -999; b < 1000; b++) {
		var num = numPrimes(a, b);
		if(num > max) {
			max = num;
			product = a * b;
		}
	}
}

return product;

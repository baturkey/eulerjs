// Problem 47
// ==========
// 
// The first two consecutive numbers to have two distinct prime factors are:
// 
// 14 = 2 * 7
// 15 = 3 * 5
// 
// The first three consecutive numbers to have three distinct prime factors
// are:
// 
// 644 = 2^2 * 7 * 23
// 645 = 3 * 5 * 43
// 646 = 2 * 17 * 19.
// 
// Find the first four consecutive integers to have four distinct primes
// factors. What is the first of these numbers?

var isPrime = function() {
	var memo = [false, false, true];

	return function(n) {
		if(n in memo) {
			return memo[n];
		}

		if(n % 2 == 0) {
			return (memo[n] = false);
		}
	
		var upper = Math.sqrt(n);
		for(var i = 3; i <= upper; i += 2) {
			if(n % i == 0) {
				return (memo[n] = false);
			}
		}
		return (memo[n] = true);
	};
}();

var primeFactors = function() {
	var memo = [];

	return function(n) {
		var output = [];
		
		if(n in memo) {
			return memo[n];
		}
		if(isPrime(n)) {
			return (memo[n] = [n]);
		} else if(n % 2 == 0) {
			return (memo[n] = [2].concat(primeFactors(n/2)));
		} else {
			var upper = Math.sqrt(n);
			for(var i = 3; i <= upper; i += 2) {
				if(n % i == 0 && isPrime(i)) {
					return (memo[n] = [i].concat(primeFactors(n/i)));
				}
			}
		}
	}
}();

function countDistinct(a) {
	if(a.length < 2) {
		return true;
	}
	var current = a[0];
	var count = 1;
	for(var i = 1; i < a.length; i++) {
		if(a[i] != current) {
			count++;
			current = a[i];
		}
	}
	return count;
}

var i = 646;
do {
	i++;
} while(countDistinct(primeFactors(i    )) != 4 ||
		countDistinct(primeFactors(i + 1)) != 4 ||
		countDistinct(primeFactors(i + 2)) != 4 ||
		countDistinct(primeFactors(i + 3)) != 4);

return i;

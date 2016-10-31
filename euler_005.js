// Problem 5
// =========
// 
// 2520 is the smallest number that can be divided by each of the numbers
// from 1 to 10 without any remainder.
// 
// What is the smallest number that is evenly divisible by all of the numbers
// from 1 to 20?

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

function primeFactors(n) {
	if(isPrime(n)) {
		return [n];
	} else if(n % 2 == 0) {
		return [2].concat(primeFactors(n/2));
	} else {
		var upper = Math.sqrt(n);
		for(var i = 3; i <= upper; i += 2) {
			if(n % i == 0 && isPrime(i)) {
				return [i].concat(primeFactors(n/i));
			}
		}
	}
}

var max_factors = [];

for(var i = 2; i <= 20; i++) {
	primeFactors(i)
		.reduce((acc, current) => {
			acc[current] = current in acc ? acc[current] + 1 : 1;
			return acc;
		}, [])
		.map((value, prime) => {
			max_factors[prime] = prime in max_factors ? Math.max(max_factors[prime], value) : value;
		});
}

return max_factors.reduce((acc, value, index) => acc *= Math.pow(index, value), 1);

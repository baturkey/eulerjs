// Problem 50
// ==========
// 
// The prime 41, can be written as the sum of six consecutive primes:
// 
//                        41 = 2 + 3 + 5 + 7 + 11 + 13
// 
// This is the longest sum of consecutive primes that adds to a prime below
// one-hundred.
// 
// The longest sum of consecutive primes below one-thousand that adds to a
// prime, contains 21 terms, and is equal to 953.
// 
// Which prime, below one-million, can be written as the sum of the most
// consecutive primes?

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

var sums      = [0, 2];
var max_terms = 0;
var max_prime = 0;

for(var i = 3; sums[sums.length - 1] < 1000000; i += 2) {
	if(isPrime(i)) {
		var newsum = sums[sums.length - 1] + i;
		sums.push(newsum);
		for(var j = 0; sums.length - j > max_terms; j++) {
			var test = newsum - sums[j];
			if(isPrime(test)) {
				max_terms = (sums.length - j);
				max_prime = test;
			}
		}
	}
}

return max_prime;

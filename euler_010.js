// Problem 10
// ==========
// 
// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// 
// Find the sum of all the primes below two million.

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
			if(n % i == 0 && isPrime(i)) {
				return (memo[n] = false);
			}
		}
		return (memo[n] = true);
	};
}();

var sum = 2;
for(var i = 3; i < 2000000; i += 2) {
	if(isPrime(i)) {
		sum += i;
	}
}

// TODO: return your answer for this prompt.
return sum;

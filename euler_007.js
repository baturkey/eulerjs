// Problem 7
// =========
// 
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see
// that the 6th prime is 13.
// 
// What is the 10001st prime number?

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

var i = 3;
for(var counter = 1; counter < 10001; i += 2) {
	if(isPrime(i)) {
		counter++;
	}
}

return i - 2;

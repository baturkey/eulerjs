// Problem 3
// =========
// 
// The prime factors of 13195 are 5, 7, 13 and 29.
// 
// What is the largest prime factor of the number 600851475143?

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

var max = 0;
var n = 600851475143;
var upper = Math.sqrt(n);
for(var i = 3; i < upper; i += 2) {
	if(n % i == 0 && isPrime(i)) {
		max = i;
	}
}

return max;

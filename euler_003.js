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
	
		for(var i = 3; i <= Math.sqrt(n); i += 2) {
			if(n % i == 0 && isPrime(i)) {
				return (memo[n] = false);
			}
		}
		return (memo[n] = true);
	};
}();

var max = 0;
var n = 600851475143;
for(var i = 3; i < Math.sqrt(n); i += 2) {
	if(n % i == 0 && isPrime(i)) {
		max = i;
	}
}

return max;

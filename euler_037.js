// Problem 37
// ==========
// 
// The number 3797 has an interesting property. Being prime itself, it is
// possible to continuously remove digits from left to right, and remain
// prime at each stage: 3797, 797, 97, and 7. Similarly we can work from
// right to left: 3797, 379, 37, and 3.
// 
// Find the sum of the only eleven primes that are both truncatable from left
// to right and right to left.
// 
// NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.

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

function truncate(n) {
	var output = [n];
	var r = n;
	var magnitude = 0;
	while((r = Math.floor(r / 10)) > 0) {
		output.push(r);
		magnitude++;
	}

	for(var i = magnitude; i > 0; i--) {
		n = n % Math.pow(10, i);
		output.push(n);
	}
	
	return output;
}

for(var sum = 0, count = 0, i = 11; count < 11; i += 2) {
	var trunc = truncate(i);
	if(trunc.length == trunc.filter(x => isPrime(x)).length) {
		sum += i
		count++;
	}
}

return sum;

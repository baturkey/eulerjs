// Problem 35
// ==========
// 
// The number, 197, is called a circular prime because all rotations of the
// digits: 197, 971, and 719, are themselves prime.
// 
// There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37,
// 71, 73, 79, and 97.
// 
// How many circular primes are there below one million?

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

function rotations(n) {
	var s = n.toString();

	if(n < 10) {
		return [s];
	}

	var output = [];
	var i = 0;

	do {
		output.push(s);
		s = s.substr(1) + s[0];
	} while(i++ < Math.floor(Math.log10(n)));

	return output;
}

for(var count = 0, i = 2; i < 1000000; i++) {
	var rot = rotations(i);
	if(rot.filter(x => isPrime(x)).length == rot.length) {
		count++;
	}
}

return count;

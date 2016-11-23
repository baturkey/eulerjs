// Problem 60
// ==========
// 
// The primes 3, 7, 109, and 673, are quite remarkable. By taking any two
// primes and concatenating them in any order the result will always be
// prime. For example, taking 7 and 109, both 7109 and 1097 are prime. The
// sum of these four primes, 792, represents the lowest sum for a set of four
// primes with this property.
// 
// Find the lowest sum for a set of five primes for which any two primes
// concatenate to produce another prime.

var isOddPrime = function() {
	var memo = [false, false, true];

	return function(n) {
		if(n in memo) {
			return memo[n];
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

const LIMIT = 5;

var primes     = [3];
var good_pairs = {3:[]};

for(var i = 7; i < 10000; i += 2) { // skip 5
	if(isOddPrime(i)) {
		good_pairs[i] = [];
		for(var j = 0; j < primes.length; j++) {

			if(isOddPrime(parseInt("" + primes[j] + i)) &&
			   isOddPrime(parseInt("" + i + primes[j]))) {

				good_pairs[primes[j]].push(i);
				good_pairs[i].push(primes[j]);

				if(good_pairs[primes[j]].length >= LIMIT - 1) {
					var prime_set = [primes[j]];
					for(var k = 0; k < good_pairs[primes[j]].length; k++) {
						var p = good_pairs[primes[j]][k];
						var matches = true;
						for(var l = 1; l < prime_set.length; l++) {
							if(good_pairs[prime_set[l]].indexOf(p) == -1) {
								matches = false;
								continue;
							}
						}
						if(matches) {
							prime_set.push(p);
							if(prime_set.length == LIMIT) {
								return prime_set.reduce((a, b) => a + b);
							}
						}
					}
				}
			}
		}
		primes.push(i);
	}
}
return 0;

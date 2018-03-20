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

function concat(i, j) {
    for (let k = j; k > 1; k /= 10) {
        i *= 10;
    }
    return i + j;
}

function sortedEquals(a, b) {
    if (a.length != b.length) {
        return false;
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] != b[i]) {
            return false;
        }
    }
    return true;
}

const LIMIT = 5;

let prime_sets = [[3]];

for (let i = 7; ; i += 2) {
    if (!isOddPrime(i)) {
        continue;
    }

    const limit = prime_sets.length;
    for (let j = 0; j < limit; j++) {
        const set = prime_sets[j];
        const match_set = set.filter(prime => isOddPrime(concat(prime, i)) && isOddPrime(concat(i, prime)));
        if (match_set.length == set.length) {
            set.push(i);
            if (set.length == LIMIT) {
		return set.reduce((a, b) => a + b);
            }
        } else if(match_set.length) {
            match_set.push(i);

            let found = false;
            for (let k = limit; k < prime_sets.length; k++) {
                if (sortedEquals(prime_sets[k], match_set)) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                prime_sets.push(match_set);
            }
        }
    }
    prime_sets.push([i]);
}

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

const isPrime = function() {
    const memo = [false, false, true];

    return function(n) {
	if(n in memo) {
	    return memo[n];
	}

	if(n % 2 == 0) {
	    return (memo[n] = false);
	}
	
	const upper = Math.sqrt(n);
	for(var i = 3; i <= upper; i += 2) {
	    if(n % i == 0) {
		return (memo[n] = false);
	    }
	}
	return (memo[n] = true);
    };
}();

function primeRotations(n) {
    var s = n.toString();
    for (var i = 0; i < Math.floor(Math.log10(n)) + 1; i++) {
        if (!isPrime(s)) {
            return false;
        }
        s = s.substr(1) + s[0];
    }
    return true;
}

for(var count = 1, i = 3; i < 1e6; i += 2) {
    if (primeRotations(i)) {
        count++;
    }
}

return count;

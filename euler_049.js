// Problem 49
// ==========
// 
// The arithmetic sequence, 1487, 4817, 8147, in which each of the terms
// increases by 3330, is unusual in two ways: (i) each of the three terms are
// prime, and, (ii) each of the 4-digit numbers are permutations of one
// another.
// 
// There are no arithmetic sequences made up of three 1-, 2-, or 3-digit
// primes, exhibiting this property, but there is one other 4-digit
// increasing sequence.
// 
// What 12-digit number do you form by concatenating the three terms in this
// sequence?

function isPrime(n) {
	if(n % 2 == 0) {
		return false;
	}
	for(var i = 3; i <= Math.sqrt(n); i += 2) {
		if(n % i == 0) {
			return false;
		}
	}
	return true;
}

function permute(s) {
	var output = [];
	if(s.length == 1) {
		return [s];
	}
	var first = s[0];
	var rest  = permute(s.substr(1));
	for(var i in rest) {
		for(var pos = 0; pos <= rest[i].length; pos++) {
			output.push(rest[i].substr(0, pos) + first + rest[i].substr(pos));
		}
	}
	return output;
}

function matches(n) {
	var permutations = permute(n.toString());
	for(var i in permutations) {
		var p = parseInt(permutations[i]);
		if(p <= n) {
			continue;
		}

		var avg = (n + p) / 2;

		if(permutations.indexOf(avg.toString()) == -1) {
			continue;
		}
		
		if(isPrime(n) && isPrime(avg) && isPrime(p)) {
			return "" + n + avg + p;
		}
	}
	return false;
}

for(var i = 1001; i < 10000; i += 2) {
	if(i == 1487) {
		continue;
	}
	var result = matches(i);
	if(result) {
		return result;
	}
}

return 0;

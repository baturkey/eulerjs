// Problem 51
// ==========
// 
// By replacing the 1st digit of *57, it turns out that six of the possible
// values: 157, 257, 457, 557, 757, and 857, are all prime.
// 
// By replacing the 3rd and 4th digits of 56**3 with the same digit, this
// 5-digit number is the first example having seven primes, yielding the
// family: 56003, 56113, 56333, 56443, 56663, 56773, and 56993. Consequently
// 56003, being the first member of this family, is the smallest prime with
// this property.
// 
// Find the smallest prime which, by replacing part of the number (not
// necessarily adjacent digits) with the same digit, is part of an eight
// prime value family.

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

function combinations(a) {
	if(a.length == 1) {
		return [a];
	}

	var last = a.pop();
	var output = [[last]];
	var remaining = combinations(a);

	for(var i in remaining) {
		output.push(remaining[i]);
		output.push(remaining[i].concat(last));
	}
	
	return output;
}

function numPrimes(n) {
	if(!isPrime(n)) {
		return 0;
	}
	var numArray  = n.toString().split("");
	var maxcount  = 0;
	var combos    = combinations(Array(Math.floor(Math.log10(n)) + 1).fill(0).map((a, i) => i));
	combos.pop();

	for(var j in combos) {
		var combo = combos[j];
		var count = 0;

		if(combo.length > 1) {
			var match = true;
			for(var z = 1; z < combo.length; z++) {
				if(numArray[combo[z]] != numArray[combo[0]]) {
					match = false;
					break;
				}
			}
			if(!match) {
				continue;
			}
		}

		for(var d = 0; d < 10; d++) {
			var newArray = [];
			for(var k in numArray) {
				newArray[k] = numArray[k];
			}
			for(k in combo) {
				newArray[combo[k]] = d.toString();
			}
			var test = parseInt(newArray.join(""));
			if(test >= n && isPrime(test)) {
				count++;
			}
		}
		maxcount = Math.max(count, maxcount);
	}
	return maxcount;
}

for(var i = 56005, nump; (nump = numPrimes(i)) < 8; i += 2);

return i;

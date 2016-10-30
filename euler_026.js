// Problem 26
// ==========
// 
// A unit fraction contains 1 in the numerator. The decimal representation of
// the unit fractions with denominators 2 to 10 are given:
// 
//    1/2  =  0.5
//    1/3  =  0.(3)
//    1/4  =  0.25
//    1/5  =  0.2
//    1/6  =  0.1(6)
//    1/7  =  0.(142857)
//    1/8  =  0.125
//    1/9  =  0.(1)
//   1/10  =  0.1
// 
// Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can
// be seen that ^1/[7] has a 6-digit recurring cycle.
// 
// Find the value of d < 1000 for which ^1/[d] contains the longest recurring
// cycle in its decimal fraction part.

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

var primeFactors = function() {
	var memo = [];

	return function(n) {
		var output = [];
		
		if(n in memo) {
			return memo[n];
		}
		if(isPrime(n)) {
			return (memo[n] = [n]);
		} else if(n % 2 == 0) {
			return (memo[n] = [2].concat(primeFactors(n/2)));
		} else {
			var upper = Math.sqrt(n);
			for(var i = 3; i <= upper; i += 2) {
				if(n % i == 0 && isPrime(i)) {
					return (memo[n] = [i].concat(primeFactors(n/i)));
				}
			}
		}
	}
}();

function terminates(n) {
	return primeFactors(n).filter(x => x != 2 && x != 5).length == 0;
}

function fractional(n) {
	var output = [];
	for(var digit, i = 0, next = 10; i < 1965; i++, next = 10 * (next - digit * n)) {
		output.push((digit = Math.floor(next / n)));
	}
	return output;
}

function cycleLength(a, s) {
	var offset = 0;
	while((offset = a.indexOf(a[s], s + offset + 1) - s) >= 0 && offset < a.length - offset - s) {
		var isCycle = true;
		for(var i = s; i < Math.floor((a.length - s - offset) / offset) * offset; i++) {
			if(a[i] != a[i+offset]) {
				isCycle = false;
			}
		}
		if(isCycle) {
			return offset;
		}
	}
	return -1;
}

function analyze(a) {
	var length;
	for(var i = 0; (length = cycleLength(a, i)) == -1 && i < a.length; i++);
	return length;
}

var maxlength = 0;
var maxvalue  = 0;

for(var i = 2; i < 1000; i++) {
	if(!terminates(i)) {
		var length = analyze(fractional(i));
//		console.log(i, length);
		if(length > maxlength) {
			maxlength = length;
			maxvalue = i;
		}
	}
}

return maxvalue;

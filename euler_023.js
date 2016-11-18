// Problem 23
// ==========
// 
// A perfect number is a number for which the sum of its proper divisors is
// exactly equal to the number. For example, the sum of the proper divisors
// of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect
// number.
// 
// A number whose proper divisors are less than the number is called
// deficient and a number whose proper divisors exceed the number is called
// abundant.
// 
// As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the
// smallest number that can be written as the sum of two abundant numbers is
// 24. By mathematical analysis, it can be shown that all integers greater
// than 28123 can be written as the sum of two abundant numbers. However,
// this upper limit cannot be reduced any further by analysis even though it
// is known that the greatest number that cannot be expressed as the sum of
// two abundant numbers is less than this limit.
// 
// Find the sum of all the positive integers which cannot be written as the
// sum of two abundant numbers.

function isAbundant(n) {
	var divisors = [1];
	var upper = n/2;
	for(var i = 2; i <= upper; i++) {
		if(n % i == 0) {
			divisors.push(i);
		}
	}
	return divisors.reduce((a, b) => a + b) > n;
}

var total    = 0;
var abundant = [];
var sums     = {};

for(var x = 1; x <= 28123; x++) {
	if(isAbundant(x)) {
		abundant.push(x);
		for(var y = 0; y < abundant.length; y++) {
			var newsum = x + abundant[y];
			if(!(newsum in sums)) {
				sums[newsum] = true;
			}
		}
	}

	if(!(x in sums)) {
		total += x;
	}
}

return total;

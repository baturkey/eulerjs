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

Array.prototype.diff = function(a) {
    return this.filter(i => a.indexOf(i) < 0);
};

function isAbundant(n) {
	return Array(Math.floor((n + 1) / 2)).fill(0).map((cur, ind) => ind + 1)
			.filter(x => n % x == 0)
			.reduce((a, b) => a + b) > n;
}

var integers = Array(28123).fill(0).map((cur, ind) => ind + 1);
var abundant = integers.filter(x => isAbundant(x));

var output = {};
for(var i = 0; i < abundant.length; i++) {
	for(var j = 0; j < abundant.length; j++) {
		var sum = abundant[i] + abundant[j];
		if(sum <= 28123) {
			output[sum] = true;
		}
	}
}

return integers
	.diff(Object.keys(output).map(x => parseInt(x)))
	.reduce((a, b) => a + b);

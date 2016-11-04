// Problem 30
// ==========
// 
// Surprisingly there are only three numbers that can be written as the sum
// of fourth powers of their digits:
// 
//   1634 = 1^4 + 6^4 + 3^4 + 4^4
//   8208 = 8^4 + 2^4 + 0^4 + 8^4
//   9474 = 9^4 + 4^4 + 7^4 + 4^4
// 
// As 1 = 1^4 is not a sum it is not included.
// 
// The sum of these numbers is 1634 + 8208 + 9474 = 19316.
// 
// Find the sum of all the numbers that can be written as the sum of fifth
// powers of their digits.

function convert(n) {
	var output = [];
	while(n > 0) {
		output.unshift(n % 10);
		n = Math.floor(n / 10);
	}
	return output;
}

var power = 5;
var total = 0;
var upper = power * Math.pow(9, power);
for(var n = 10; n <= upper; n++) {
	if(n === convert(n).reduce((acc, cur) => acc + Math.pow(cur, power), 0)) {
		total += n;
	}
}

return total;

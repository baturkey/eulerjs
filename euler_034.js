// Problem 34
// ==========
// 
// 145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.
// 
// Find the sum of all numbers which are equal to the sum of the factorial of
// their digits.
// 
// Note: as 1! = 1 and 2! = 2 are not sums they are not included.

var factorial = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];

function convert(n) {
	var output = [];
	while(n > 0) {
		output.unshift(n % 10);
		n = Math.floor(n / 10);
	}
	return output;
}

for(var total = 0, i = 10; i < 362880; i++) {
	if(convert(i).map(x => factorial[x]).reduce((a, b) => a + b) == i) {
		total += i;
	}
}

return total;

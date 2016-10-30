// Problem 4
// =========
// 
// A palindromic number reads the same both ways. The largest palindrome made
// from the product of two 2-digit numbers is 9009 = 91 * 99.
// 
// Find the largest palindrome made from the product of two 3-digit numbers.

function isPalindrome(n) {
	var reverse = 0;
	var magnitude = Math.floor(Math.log(n) / Math.LN10);
	for(var i = 0; i <= magnitude; i++) {
		reverse += Math.floor(n / Math.pow(10, i)) % 10 * Math.pow(10, magnitude - i);
	}
	return n == reverse;
}

var max = 0;
for(var i = 100; i < 1000; i++) {
	for(var j = 100; j < 1000; j++) {
		var product = i * j;
		if(product > max && isPalindrome(product)) {
			max = product;
		}
	}
}

// TODO: return your answer for this prompt.
return max;

// Problem 4
// =========
// 
// A palindromic number reads the same both ways. The largest palindrome made
// from the product of two 2-digit numbers is 9009 = 91 * 99.
// 
// Find the largest palindrome made from the product of two 3-digit numbers.

function isPalindrome(n) {
	var s = n.toString();
	for(var i = 0; i < s.length / 2; i++) {
		if(s[i] != s[s.length - 1 - i]) {
			return false;
		}
	}
	return true;
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
return max;

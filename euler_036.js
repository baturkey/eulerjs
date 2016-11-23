// Problem 36
// ==========
// 
// The decimal number, 585 = 1001001001[2] (binary), is palindromic in both
// bases.
// 
// Find the sum of all numbers, less than one million, which are palindromic
// in base 10 and base 2.
// 
// (Please note that the palindromic number, in either base, may not include
// leading zeros.)

function convert(n) {
	var output = [];
	while(n > 0) {
		output.unshift(n % 10);
		n = Math.floor(n / 10);
	}
	return output;
}

function dec2bin(n) {
	var max2 = Math.floor(Math.log2(n));
	var b_a = Array(max2 + 1).fill(0);

	while(n > 0) {
		b_a[max2] = 1;
		n -= Math.pow(2, max2);
		max2 = Math.floor(Math.log2(n));
	}
	return b_a;
}

function isPalindrome(a) {
	var l = a.length;
	for(var i = 0; i < l / 2; i++) {
		if(a[i] != a[l - 1 - i]) {
			return false;
		}
	}
	return true;
}

for(var sum = 0, i = 1; i < 1000000; i++) {
	if(isPalindrome(convert(i)) && isPalindrome(dec2bin(i))) {
		sum += i;
	}
}

return sum;

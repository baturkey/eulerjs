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

function convert(n, base = 10) {
	var output = [];
	while(n > 0) {
		output.unshift(n % base);
		n = Math.floor(n / base);
	}
	return output;
}

function isPalindrome(a) {
	for(var i = 0; i < a.length / 2; i++) {
		if(a[i] != a[a.length - 1 - i]) {
			return false;
		}
	}
	return true;
}

for(var sum = 0, i = 1; i < 1000000; i++) {
	if(isPalindrome(convert(i)) && isPalindrome(convert(i, 2))) {
		sum += i;
	}
}

return sum;

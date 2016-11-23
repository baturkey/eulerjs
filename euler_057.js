// Problem 57
// ==========
// 
// It is possible to show that the square root of two can be expressed as an
// infinite continued fraction.
// 
//             2 = 1 + 1/(2 + 1/(2 + 1/(2 + ... ))) = 1.414213...
// 
// By expanding this for the first four iterations, we get:
// 
// 1 + 1/2 = 3/2 = 1.5
// 1 + 1/(2 + 1/2) = 7/5 = 1.4
// 1 + 1/(2 + 1/(2 + 1/2)) = 17/12 = 1.41666...
// 1 + 1/(2 + 1/(2 + 1/(2 + 1/2))) = 41/29 = 1.41379...
// 
// The next three expansions are 99/70, 239/169, and 577/408, but the eighth
// expansion, 1393/985, is the first example where the number of digits in
// the numerator exceeds the number of digits in the denominator.
// 
// In the first one-thousand expansions, how many fractions contain a
// numerator with more digits than denominator?

function convert(n) {
	var output = [];
	while(n > 0) {
		output.unshift(n % 10);
		n = Math.floor(n / 10);
	}
	return output;
}

function add(a, b) {
	var maxlength = Math.max(a.length, b.length);
	while(a.length < maxlength) {
		a.unshift(0);
	}
	while(b.length < maxlength) {
		b.unshift(0);
	}

	var output = [];
	for(var i = 0; i < maxlength; i++) {
		output[i] = a[i] + b[i];
	}
	for(var i = maxlength - 1; i >= 0; i--) {
		if(output[i] > 9) {
			output[i] %= 10;
			if(i > 0) {
				output[i - 1]++;
			} else {
				output.unshift(1);
			}
		}
	}
	return output;
}

function mult10(a, p) {
	for(var i = p; i > 0; i--) {
		a.push(0);
	}
	return a;
}

function multiply(a, b) {
	var output = [];
	for(var i = a.length - 1; i >= 0; i--) {
		for(var j = b.length - 1; j >= 0; j--) {
			output = add(output, mult10(convert(a[i] * b[j]),
										a.length + b.length - i - j - 2));
		}
	}
	return output;
}

var cnt =  0 ;
var num = [1];
var den = [2];
var tmp;

for(var i = 0; i < 1000; i++) {
	if(add(num, den).length > den.length) {
		cnt++;
	}

	tmp = num;
	num = den;
	den = add(multiply([2], den), tmp);
}
return cnt;

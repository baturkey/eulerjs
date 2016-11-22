// Problem 56
// ==========
// 
// A googol (10^100) is a massive number: one followed by one-hundred zeros;
// 100^100 is almost unimaginably large: one followed by two-hundred zeros.
// Despite their size, the sum of the digits in each number is only 1.
// 
// Considering natural numbers of the form, a^b, where a, b < 100, what is
// the maximum digital sum?

//var cache = [[], [1], [2], [3], [4], [5], [6], [7], [8], [9], [1, 0]];
function convert(n) {
	/*
	if(n <= 10) {
		return cache[n];
	}
*/
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

var max = 0;
for(var a = 99; a > 1; a--) {
	if(a % 10 == 0) {
		continue;
	}
	var base = convert(a);
	var result = [1];

	for(var b = 1; b < 99; b++) {
		result = multiply(result, base);
		var sum = result.reduce((a, b) => a + b);
		if(sum > max) {
			max = sum;
		}
	}
}
return max;

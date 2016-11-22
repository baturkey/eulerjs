// Problem 16
// ==========
// 
// 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
// 
// What is the sum of the digits of the number 2^1000?

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
	for(var i = 0; i < p; i++) {
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

function exp(a, e) {
	var output = a;
	for(var i = 1; i < e; i++) {
		output = multiply(output, a);
	}
	return output;
}

return exp([2], 1000).reduce((acc, cur) => acc + cur);

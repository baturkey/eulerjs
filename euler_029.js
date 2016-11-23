// Problem 29
// ==========
// 
// Consider all integer combinations of a^b for 2 a 5 and 2 b 5:
// 
//   2^2=4, 2^3=8, 2^4=16, 2^5=32
//   3^2=9, 3^3=27, 3^4=81, 3^5=243
//   4^2=16, 4^3=64, 4^4=256, 4^5=1024
//   5^2=25, 5^3=125, 5^4=625, 5^5=3125
// 
// If they are then placed in numerical order, with any repeats removed, we
// get the following sequence of 15 distinct terms:
// 
//      4, 8, 9, 16, 25, 27, 32, 64, 81, 125, 243, 256, 625, 1024, 3125
// 
// How many distinct terms are in the sequence generated by a^b for
// 2 <= a <= 100 and 2 <= b <= 100?

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

var cache = {};

for(var a = 100; a > 1; a--) {
	var result = [a];
	var base   = [a];
	for(var b = 2; b <= 100; b++) {
		result = multiply(result, base);
		if(!(result in cache)) {
			cache[result] = 1;
		}
	}
}

return Object.keys(cache).length;

// Problem 65
// ==========
// 
// The square root of 2 can be written as an infinite continued fraction.
// 
// 2 = 1 +          1
//         2 +        1
//             2 +      1
//                 2 +    1
//                     2 + ...
// 
// The infinite continued fraction can be written, 2 = [1;(2)], (2) indicates
// that 2 repeats ad infinitum. In a similar way, 23 = [4;(1,3,1,8)].
// 
// It turns out that the sequence of partial values of continued fractions
// for square roots provide the best rational approximations. Let us consider
// the convergents for 2.
// 
// 1 + 1 = 3/2
//     2
// 
// 1 +   1   = 7/5
//     2 + 1
//         2
// 
// 1 +     1     = 17/12
//     2 +   1
//         2 + 1
//             2
// 
// 1 +       1       = 41/29
//     2 +     1
//         2 +   1
//             2 + 1
//                 2
// 
// Hence the sequence of the first ten convergents for 2 are:
// 1, 3/2, 7/5, 17/12, 41/29, 99/70, 239/169, 577/408, 1393/985, 3363/2378,
// ...
// 
// What is most surprising is that the important mathematical constant,
// e = [2; 1,2,1, 1,4,1, 1,6,1 , ... , 1,2k,1, ...].
// 
// The first ten terms in the sequence of convergents for e are:
// 2, 3, 8/3, 11/4, 19/7, 87/32, 106/39, 193/71, 1264/465, 1457/536, ...
// 
// The sum of digits in the numerator of the 10th convergent is 1+4+5+7=17.
// 
// Find the sum of digits in the numerator of the 100th convergent of the
// continued fraction for e.

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
	return a.concat(Array(p).fill(0));
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

function seq(i) {
	if(i == 0) return [2];
	return convert(i % 3 == 2 ? (i + 1) / 3 * 2 : 1);
}

function addFrac(i, n, d) {
	var numerator = add(multiply(i, d), n);
	return [numerator, d];
}

var term = 100;
var n = seq(term - 1);
var d = [1];

for(var i = term - 1; i > 0; i--) {
	[n, d] = addFrac(seq(i - 1), d, n);
}

return n.reduce((a, b) => a + b);

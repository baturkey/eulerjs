// Problem 66
// ==========
// 
// Consider quadratic Diophantine equations of the form:
// 
//                               x^2 - Dy^2 = 1
// 
// For example, when D=13, the minimal solution in x is 649^2 - 13 * 180^2 =
// 1.
// 
// It can be assumed that there are no solutions in positive integers when D
// is square.
// 
// By finding minimal solutions in x for D = {2, 3, 5, 6, 7}, we obtain the
// following:
// 
// 3^2 - 2 * 2^2 = 1
// 2^2 - 3 * 1^2 = 1
// 9^2 - 5 * 4^2 = 1
// 5^2 - 6 * 2^2 = 1
// 8^2 - 7 * 3^2 = 1
// 
// Hence, by considering minimal solutions in x for D 7, the largest x is
// obtained when D=5.
// 
// Find the value of D 1000 in minimal solutions of x for which the largest
// value of x is obtained.

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

function equals(a, b) {
	if(a.length === b.length) {
		for(var i = a.length - 1; i >= 0; i--) {
			if(a[i] !== b[i]) {
				return false;
			}
		}
	}
	return true;
}

// https://en.wikipedia.org/wiki/Pell%27s_equation
function findX(D) {
	const convertD = convert(D);
	const root   = Math.sqrt(D);

	var denom0 = 1;
	var rest0  = Math.floor(root);
	var seq    = [rest0];

	for(var term = 1; true; term++) {

		// find convergent
		var n = convert(seq[seq.length - 1]);
		var d = [1];
		for(var i = seq.length - 1; i > 0; i--) {
			[n, d] = [add(multiply([seq[i - 1]], n), d), n];
		}

		if(equals(multiply(n, n),
				  add([1], multiply(convertD, multiply(d, d))))) {
			return n.reduce((a, b) => 10 * a + b, 0);
		}

		var denom1 = D - rest0 * rest0;
		var next = Math.floor(denom0 * (root + rest0) / denom1);
		denom0 = Math.round(denom1 / denom0);
		rest0 = denom0 * next - rest0;
		seq.push(next);
	}
}

var maxD = 0;
var maxX = 0;

for(var D = 2; D <= 1000; D++) {
	if(Number.isInteger(Math.sqrt(D))) {
		continue;
	}
	var x = findX(D);
	if(x > maxX) {
		maxX = x;
		maxD = D;
	}
}

return maxD;

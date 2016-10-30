// Problem 25
// ==========
// 
// The Fibonacci sequence is defined by the recurrence relation:
// 
//   F[n] = F[n[1]] + F[n[2]], where F[1] = 1 and F[2] = 1.
// 
// Hence the first 12 terms will be:
// 
//   F[1] = 1
//   F[2] = 1
//   F[3] = 2
//   F[4] = 3
//   F[5] = 5
//   F[6] = 8
//   F[7] = 13
//   F[8] = 21
//   F[9] = 34
//   F[10] = 55
//   F[11] = 89
//   F[12] = 144
// 
// The 12th term, F[12], is the first term to contain three digits.
// 
// What is the first term in the Fibonacci sequence to contain 1000 digits?

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
				output[i-1]++;
			} else {
				output.unshift(1);
			}
		}
	}
	return output;
}

var n1 = [1];
var n2 = [0];
var fib;

for(var count = 1; (fib = add(n1, n2)).length < 1000; count++) {
	n1 = n2;
	n2 = fib;
}

return count;

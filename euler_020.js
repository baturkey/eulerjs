// Problem 20
// ==========
// 
// n! means n * (n - 1) * ... * 3 * 2 * 1
// 
// Find the sum of the digits in the number 100!

function convert(n) {
	var output = [];
	while(n > 0) {
		output.unshift(n % 10);
		n = Math.floor(n / 10);
	}
	return output;
}

function add(a, b) {
	while(a.length < b.length) {
		a.unshift(0);
	}
	while(b.length < a.length) {
		b.unshift(0);
	}

	var output = [];
	for(var i = 0; i < a.length; i++) {
		output[i] = a[i] + b[i];
	}
	for(i = a.length - 1; i >= 0; i--) {
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

let product = [1];
for(let n = 100; n > 0; n--) {
	product = multiply(product, [n]);
}

return product.reduce((a, b) => a+b);

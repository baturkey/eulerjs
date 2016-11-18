// Problem 48
// ==========
// 
// The series, 1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317.
// 
// Find the last ten digits of the series, 1^1 + 2^2 + 3^3 + ... + 1000^1000.

function powMod(n, e, m) {
	var product = 1;
	for(var i = 0; i < e; i++) {
		product = product * n % m;
	}
	return product;
}

var total = 0;

for(var i = 1; i <= 1000; i++) {
	total = (total + powMod(i, i, 10000000000)) % 10000000000;
}

return total;

// Problem 33
// ==========
// 
// The fraction 49/98 is a curious fraction, as an inexperienced
// mathematician in attempting to simplify it may incorrectly believe that
// 49/98 = 4/8, which is correct, is obtained by cancelling the 9s.
// 
// We shall consider fractions like, 30/50 = 3/5, to be trivial examples.
// 
// There are exactly four non-trivial examples of this type of fraction, less
// than one in value, and containing two digits in the numerator and
// denominator.
// 
// If the product of these four fractions is given in its lowest common
// terms, find the value of the denominator.

function isCurious(n, d) {
	if(n % 10 == 0 && d % 10 == 0) {
		return false;
	}

	var n1 = Math.floor(n / 10);
	var n2 = n % 10;
	var d1 = Math.floor(d / 10);
	var d2 = d % 10;

	if((n1 == d2 && n2 * d == n * d1) || (n2 == d1 && n1 * d == n * d2)) {
		return true;
	}
	return false;
}

var num = 1;
var den = 1;

for(var i = 10; i < 100; i++) {
	for(var j = i + 1; j < 100; j++) {
		if(isCurious(i, j)) {
			num *= i;
			den *= j;
		}
	}
}

for(var i = 2; i <= num; i++) {
	while(num % i == 0 && den % i == 0) {
		num /= i;
		den /= i;
	}
}

return den;

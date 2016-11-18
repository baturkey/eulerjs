// Problem 7
// =========
// 
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see
// that the 6th prime is 13.
// 
// What is the 10001st prime number?

function isOddPrime(n) {
	for(var i = 3; i <= Math.sqrt(n); i += 2) {
		if(n % i == 0) {
			return false;
		}
	}
	return true;
}

var i = 3;
for(var counter = 1; counter < 10001; i += 2) {
	if(isOddPrime(i)) {
		counter++;
	}
}

return i - 2;

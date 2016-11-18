// Problem 10
// ==========
// 
// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// 
// Find the sum of all the primes below two million.

function isOddPrime(n) {
	for(var i = 3; i <= Math.sqrt(n); i += 2) {
		if(n % i == 0) {
			return false;
		}
	}
	return true;
}

var sum = 2;
for(var i = 3; i < 2000000; i += 2) {
	if(isOddPrime(i)) {
		sum += i;
	}
}
return sum;

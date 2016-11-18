// Problem 46
// ==========
// 
// It was proposed by Christian Goldbach that every odd composite number can
// be written as the sum of a prime and twice a square.
// 
// 9 = 7 + 2 * 1^2
// 15 = 7 + 2 * 2^2
// 21 = 3 + 2 * 3^2
// 25 = 7 + 2 * 3^2
// 27 = 19 + 2 * 2^2
// 33 = 31 + 2 * 1^2
// 
// It turns out that the conjecture was false.
// 
// What is the smallest odd composite that cannot be written as the sum of a
// prime and twice a square?

function isOddPrime(n) {
	for(var i = 3; i <= Math.sqrt(n); i += 2) {
		if(n % i == 0) {
			return false;
		}
	}
	return true;
}

var primes = [3];

function isConjecture(n) {
	for(var i in primes) {
		if(primes[i] > n) {
			return false;
		}
		if(Number.isInteger(Math.sqrt((n - primes[i]) / 2))) {
			return true;
		}
	}
	return false;
}

var n = 3;

do {
	n += 2;
	if(isOddPrime(n)) {
		primes.push(n);
	}
} while(isConjecture(n));

return n;

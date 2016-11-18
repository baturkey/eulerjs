// Problem 3
// =========
// 
// The prime factors of 13195 are 5, 7, 13 and 29.
// 
// What is the largest prime factor of the number 600851475143?

function isOddPrime(n) {
	for(var i = 3; i <= Math.sqrt(n); i += 2) {
		if(n % i == 0) {
			return false;
		}
	}
	return true;
}

var max = 0;
var n = 600851475143;
for(var i = 3; i < Math.sqrt(n); i += 2) {
	if(n % i == 0 && isOddPrime(i)) {
		max = i;
	}
}
return max;

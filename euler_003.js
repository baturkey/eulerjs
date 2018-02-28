// Problem 3
// =========
// 
// The prime factors of 13195 are 5, 7, 13 and 29.
// 
// What is the largest prime factor of the number 600851475143?

function isOddPrime(n)
{
    for (var i = 3; i <= Math.sqrt(n); i += 2) {
	if (n % i == 0) {
	    return false;
	}
    }
    return true;
}

const n = 0b1000101111100101100010011110101011000111;

for(var i = Math.ceil(Math.sqrt(n)); i > 1; i -= 2) {
	if(n % i == 0 && isOddPrime(i)) {
	    return i;
	}
}

return 0;

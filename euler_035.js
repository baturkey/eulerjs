// Problem 35
// ==========
// 
// The number, 197, is called a circular prime because all rotations of the
// digits: 197, 971, and 719, are themselves prime.
// 
// There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37,
// 71, 73, 79, and 97.
// 
// How many circular primes are there below one million?

const primeCache = [false, false, true];

function isPrime(n) {
    if(n in primeCache) {
	return primeCache[n];
    }

    if(n % 2 == 0) {
	return (primeCache[n] = false);
    }

    const upper = Math.sqrt(n);
    for(var i = 3; i <= upper; i += 2) {
	if(n % i == 0) {
	    return (primeCache[n] = false);
	}
    }
    return (primeCache[n] = true);
}

function primeRotations(n) {
    let mag = 0;
    for (let m = n; m >= 10; m /= 10) {
        mag++;
    }

    for (let i = 0; i <= mag; i++) {
        if (!isPrime(n)) {
            return false;
        }
        let d = n % 10;
        n = d * 10 ** mag + (n - d) / 10;
    }
    return true;
}

let count = 1;
for(let i = 3; i < 1e6; i += 2) {
    if (primeRotations(i)) {
        count++;
    }
}
return count;

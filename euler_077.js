// Problem 77
// ==========
// 
// It is possible to write ten as the sum of primes in exactly five different
// ways:
// 
// 7 + 3
// 5 + 5
// 5 + 3 + 2
// 3 + 3 + 2 + 2
// 2 + 2 + 2 + 2 + 2
// 
// What is the first value which can be written as the sum of primes in over
// five thousand different ways?

function maxPrime(primes) {
    return primes[primes.length - 1];
}

function addPrime(primes) {
    function nextPrime(test, primes) {
        if (primes.some(p => test % p === 0)) {
            return nextPrime(test + 1, primes);
        }
        return test;
    }
    return primes.concat(nextPrime(maxPrime(primes) + 1, primes));
}

function findsum(n, primes) {
    if (primes.length < 2 || primes[0] > n) {
        return 0;
    }
    if (primes[0] === n) {
        return 1;
    }
    return findsum(n, primes.slice(1)) + findsum(n - primes[0], primes);
}

function doit(test, primes) {
    while (maxPrime(primes) < test) {
        primes = addPrime(primes);
    }
    if (findsum(test, primes) < 5000) {
        return doit(test + 1, primes);
    }
    return test;
}

return doit(11, [2]);

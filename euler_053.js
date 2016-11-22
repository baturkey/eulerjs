// Problem 53
// ==========
// 
// There are exactly ten ways of selecting three from five, 12345:
// 
//            123, 124, 125, 134, 135, 145, 234, 235, 245, and 345
// 
// In combinatorics, we use the notation, nCr(5,3) = 10.
// 
// In general,
// 
// nCr(n,r) = n!/(r!(n-r)!), where r =< n, n! = n * (n1) * ... * 3 * 2 * 1,
// and 0! = 1.
// 
// It is not until n = 23, that a value exceeds one-million: nCr(23,10) =
// 1144066.
// 
// How many values of nCr(n,r), for 1 =< n =< 100, are greater than one-million?

function nCr(n, r) {
	if(n == r) {
		return 1;
	}
	var top = 1;
	var bot = 1;;
	for(var i = r + 1; i <= n; i++) {
		top *= i;
	}
	for(i = 1; i <= n - r; i++) {
		bot *= i;
	}
	return top / bot;
}

var count = 0;

for(var n = 23; n <= 100; n++) {
	for(var r = 1; r <= n; r++) {
		if(nCr(n, r) > 1000000) {
			count++;
		}
	}
}

return count;

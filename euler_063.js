// Problem 63
// ==========
// 
// The 5-digit number, 16807=7^5, is also a fifth power. Similarly, the
// 9-digit number, 134217728=8^9, is a ninth power.
// 
// How many n-digit positive integers exist which are also an nth power?

var count = 0;
for(var e = 1; e < 100; e++) {
	for(var n = 1; n < 10; n++) {
		var num = Math.pow(n, e);
		if(Math.trunc(Math.log10(num)) + 1 == e) {
			count++;
		}
	}
}

return count;

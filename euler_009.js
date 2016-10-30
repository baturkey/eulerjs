// Problem 9
// =========
// 
// A Pythagorean triplet is a set of three natural numbers, a < b < c, for
// which,
//                              a^2 + b^2 = c^2
// 
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
// 
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

for(var a = 1; a < 999; a++) {
	for(var b = 1; b < 999; b++) {
		var c = 1000 - a - b;
		var csq = Math.pow(c, 2);
		if(Math.pow(a, 2) + Math.pow(b, 2) == csq) {
			return a*b*c;
		}
	}
}

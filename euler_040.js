// Problem 40
// ==========
// 
// An irrational decimal fraction is created by concatenating the positive
// integers:
// 
//                   0.123456789101112131415161718192021...
//                                ^
// 
// It can be seen that the 12th digit of the fractional part is 1.
// 
// If d[n] represents the n-th digit of the fractional part, find the value
// of the following expression.
// 
//     d[1] * d[10] * d[100] * d[1000] * d[10000] * d[100000] * d[1000000]

var s = "";
for(var i = 0; s.length <= 1000000; i++) {
	s += i;
}

return s.charAt(1) * s.charAt(10) * s.charAt(100) * s.charAt(1000) * s.charAt(10000) * s.charAt(100000) * s.charAt(1000000);

// Problem 39
// ==========
// 
// If p is the perimeter of a right angle triangle with integral length
// sides, {a,b,c}, there are exactly three solutions for p = 120.
// 
//                     {20,48,52}, {24,45,51}, {30,40,50}
// 
// For which value of p < 1000, is the number of solutions maximised?

function solutions(n) {
	var output = 0;
	for(var a = 1; a <= n - 2; a++) {
		for(var b = a; b <= n - 2; b++) {
			var c = n - a - b;
			if(a * a + b * b == c * c) {
				output++;
			}
		}
	}
	return output;
}

var max_s = 0;
var max_p = 0;
for(var p = 0; p < 1000; p++) {
	var s = solutions(p);
	if(s > max_s) {
		max_s = s;
		max_p = p;
	}
}

return max_p;

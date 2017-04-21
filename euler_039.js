// Problem 39
// ==========
// 
// If p is the perimeter of a right angle triangle with integral length
// sides, {a,b,c}, there are exactly three solutions for p = 120.
// 
//                     {20,48,52}, {24,45,51}, {30,40,50}
// 
// For which value of p < 1000, is the number of solutions maximised?

function solutions(__, n) {
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

/*
A lot slower
function solutions(__, n) {
	if(n < 3) return 0;
	return Array(n - 2).fill(0).map((c, i) => i+1).map(a =>
		Array(n - 1 - a)
			.fill(a)
			.map((c, i) => c + i)
			.filter(b => Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(n - a - b, 2))
			.length)
		.reduce((a, b) => a + b);
}
*/

return Array(1000)
	.fill(0)
	.map(solutions)
	.reduce((acc, val, ind) => val > acc.max_s ? {max_s: val, max_p: ind} : acc, {max_s: 0, max_p: 0})
	.max_p;

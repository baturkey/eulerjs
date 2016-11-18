// Problem 67
// ==========
// 
// By starting at the top of the triangle below and moving to adjacent
// numbers on the row below, the maximum total from top to bottom is 23.
// 
//                                     3
//                                    7 4
//                                   2 4 6
//                                  8 5 9 3
// 
// That is, 3 + 7 + 4 + 9 = 23.
// 
// Find the maximum total from top to bottom in triangle.txt, a 15K text file
// containing a triangle with one-hundred rows.
// 
// NOTE: This is a much more difficult version of Problem 18. It is not
// possible to try every route to solve this problem, as there are 2^99
// altogether! If you could check one trillion (10^12) routes every second it
// would take over twenty billion years to check them all. There is an
// efficient algorithm to solve it. ;o)

var triangle = require('fs')
	.readFileSync('triangle.txt', {encoding: 'utf-8'})
	.split("\r\n")
	.map(x => x.split(" "));

triangle.pop();

var calculate = function() {
	var memo = [];
	return function(triangle, x, y) {
		var index = x * 100 + y;
		if(index in memo) {
			return memo[index];
		}
		var output = parseInt(triangle[x][y]);
		if(x < triangle.length - 1) {
			output += Math.max(calculate(triangle, x+1, y  ),
							   calculate(triangle, x+1, y+1));
		}
		return (memo[index] = output);
	}
}();

return calculate(triangle, 0, 0);

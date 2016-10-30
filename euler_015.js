// Problem 15
// ==========
// 
// Starting in the top left corner of a 2 * 2 grid, there are 6 routes
// (without backtracking) to the bottom right corner.
// 
// How many routes are there through a 20 * 20 grid?

var size = 20;

var routes = function() {
	var memo = [];
	return function(x, y) {
		var index = x * (size+1) + y;
		if(index in memo) {
			return memo[index];
		}
		var output = 0;
		if(x == size && y == size) {
			return 1;
		}
		if(x < size) {
			output += routes(x+1, y);
		}
		if(y < size) {
			output += routes(x, y+1);
		}
		return (memo[index] = output);
	}
}();

return routes(0, 0);

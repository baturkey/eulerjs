// Problem 68
// ==========
// 
// Consider the following "magic" 3-gon ring, filled with the numbers 1 to 6,
// and each line adding to nine.
// 
// Working clockwise, and starting from the group of three with the
// numerically lowest external node (4,3,2 in this example), each solution
// can be described uniquely. For example, the above solution can be
// described by the set: 4,3,2; 6,2,1; 5,1,3.
// 
// It is possible to complete the ring with four different totals: 9, 10, 11,
// and 12. There are eight solutions in total.
// 
//         Total          Solution Set
//         9              4,2,3; 5,3,1; 6,1,2
//         9              4,3,2; 6,2,1; 5,1,3
//         10             2,3,5; 4,5,1; 6,1,3
//         10             2,5,3; 6,3,1; 4,1,5
//         11             1,4,6; 3,6,2; 5,2,4
//         11             1,6,4; 5,4,2; 3,2,6
//         12             1,5,6; 2,6,4; 3,4,5
//         12             1,6,5; 3,5,4; 2,4,6
// 
// By concatenating each group it is possible to form 9-digit strings; the
// maximum string for a 3-gon ring is 432621513.
// 
// Using the numbers 1 to 10, and depending on arrangements, it is possible
// to form 16- and 17-digit strings. What is the maximum 16-digit string for
// a "magic" 5-gon ring?

function permute(a) {
	var output = [];
	if(a.length == 1) {
		return [a];
	}
	var first = a[0];
	var rest  = permute(a.slice(1));
	for(var i in rest) {
		for(var pos = 0; pos <= rest[i].length; pos++) {
			output.push(rest[i].slice(0, pos)
						.concat(first)
						.concat(rest[i].slice(pos)));
		}
	}
	return output;
}

function check(inner, outer) {
	var check_array = [[outer[0], inner[0], inner[1]],
					   [outer[1], inner[1], inner[2]],
					   [outer[2], inner[2], inner[3]],
					   [outer[3], inner[3], inner[4]],
					   [outer[4], inner[4], inner[0]]];

	if(check_array
	   .map(a => a.reduce((x, y) => x + y))
	   .reduce((x, y) => x == y ? x : false)) {
		return check_array.reduce((a, b) => a + b.reduce((c, d) => c + d, ''), '');
	}
	return false;
}

var rings = [[1, 2, 3, 4,  5],
			 [1, 3, 5, 7,  9],
			 [2, 4, 6, 8, 10],
			 [6, 7, 8, 9, 10]];

var output = [];

for(var ring_index in rings) {
	var spoke_index = rings.length - 1 - ring_index;

	var ring_list  = permute(rings[ring_index]);
	var spoke_list = permute(rings[spoke_index].slice(1))
		.map(b => [rings[spoke_index][0]].concat(b));

	for(var i in ring_list) {
		for(var j in spoke_list) {
			output.push(check(ring_list[i], spoke_list[j]));
		}
	}
}

return output
	.filter(a => a.length === 16)
	.sort()
	.pop();

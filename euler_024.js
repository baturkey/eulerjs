// Problem 24
// ==========
// 
// A permutation is an ordered arrangement of objects. For example, 3124 is
// one possible permutation of the digits 1, 2, 3 and 4. If all of the
// permutations are listed numerically or alphabetically, we call it
// lexicographic order. The lexicographic permutations of 0, 1 and 2 are:
// 
//                     012   021   102   120   201   210
// 
// What is the millionth lexicographic permutation of the digits 0, 1, 2, 3,
// 4, 5, 6, 7, 8 and 9?

function permute(s) {
	if(s.length == 1) {
		return [s];
	}
	var output = [];
	var rest   = permute(s.substr(1));
	for(var i in rest) {
		for(var pos = 0; pos <= rest[i].length; pos++) {
			output.push(rest[i].substr(0, pos) + s[0] + rest[i].substr(pos));
		}
	}
	return output;
}

return permute("0123456789").sort()[999999];

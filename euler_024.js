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

function permute(a) {
	var output = [];
	if(a.length == 1) {
		return [a];
	}

	var first = a.pop();
	
	var remaining = permute(a.filter(x => x != first));
	for(var i in remaining) {
		for(var pos = 0; pos <= remaining[i].length; pos++) {
			if(pos == 0) {
				output.push([first].concat(remaining[i]));
			} else if(pos == remaining[i].length) {
				output.push(remaining[i].concat([first]));
			} else {
				output.push(remaining[i].slice(0, pos).concat([first]).concat(remaining[i].slice(pos)));
			}
		}
	}
	return output;
}

return permute(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']).map(x => x.join('')).sort()[999999];

// Problem 62
// ==========
// 
// The cube, 41063625 (345^3), can be permuted to produce two other cubes:
// 56623104 (384^3) and 66430125 (405^3). In fact, 41063625 is the smallest
// cube which has exactly three permutations of its digits which are also
// cube.
// 
// Find the smallest cube for which exactly five permutations of its digits
// are cube.

function isPermutation(n1, n2) {
	var digits = Array(10).fill(0);
	var d;

	while(n1 > 0) {
		d = n1 % 10;
		digits[d]++;
		n1 = (n1 - d) / 10;
	}

	while(n2 > 0) {
		d = n2 % 10;
		digits[d]--;
		n2 = (n2 - d) / 10;
	}

	for(var i = 0; i < 10; i++) {
		if(digits[i] != 0) {
			return false;
		}
	}
	return true;
}

var cubes = {};

for(var i = 2; i < 10000; i++) {
	var cube = Math.pow(i, 3);
	var magnitude = Math.trunc(Math.log10(cube));
	if(!(magnitude in cubes)) {
		cubes[magnitude] = [];
	}
	
	var count = 0;
	for(var j = cubes[magnitude].length - 1; j >= 0; j--) {
		if(isPermutation(cube, cubes[magnitude][j])) {
			if(count == 3) {
				return cubes[magnitude][j];
			}
			count++;
		}
	}
	cubes[magnitude].push(cube);
}
return 0;

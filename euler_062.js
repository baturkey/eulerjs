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

function isPermutation(raw, n) {
    const digits = raw.slice(0);
    let d;

    while(n) {
	d = n % 10;
        if (!digits[d]) {
            return false;
        }
	digits[d]--;
	n = (n - d) / 10;
    }

    for(var i = 0; i < 10; i++) {
	if(digits[i]) {
	    return false;
	}
    }
    return true;
}

const cubes = [];

for(var i = 2; ; i++) {
    let cube = Math.pow(i, 3);
    const magnitude = Math.trunc(Math.log10(cube));
    if(!(magnitude in cubes)) {
	cubes[magnitude] = [];
    }
    cubes[magnitude].unshift(cube);

    const raw = [0,0,0,0,0,0,0,0,0,0];
    let d;
    while(cube) {
	d = cube % 10;
	raw[d]++;
	cube = (cube - d) / 10;
    }

    let count = 1;
    for(let j = 1; j < cubes[magnitude].length; j++) {
	if(isPermutation(raw, cubes[magnitude][j])) {
	    if(++count == 5) {
		return cubes[magnitude][j];
	    }
	}
    }
}

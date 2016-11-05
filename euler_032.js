// Problem 32
// ==========
// 
// We shall say that an n-digit number is pandigital if it makes use of all
// the digits 1 to n exactly once; for example, the 5-digit number, 15234,
// is 1 through 5 pandigital.
// 
// The product 7254 is unusual, as the identity, 39 * 186 = 7254, containing
// multiplicand, multiplier, and product is 1 through 9 pandigital.
// 
// Find the sum of all products whose multiplicand/multiplier/product
// identity can be written as a 1 through 9 pandigital.
// 
// HINT: Some products can be obtained in more than one way so be sure to
// only include it once in your sum.

function isPandigital(s) {
	var check = {'1': true,
				 '2': true,
				 '3': true,
				 '4': true,
				 '5': true,
				 '6': true,
				 '7': true,
				 '8': true,
				 '9': true,
				};
	if(s.length != 9) {
		return false;
	}
	for(var i = 0; i < 9; i++) {
		if(check[s[i]] == true) {
			check[s[i]] = false;
		} else {
			return false;
		}
	}
	for(var i = 0; i < 9; i++) {
		if(check[i] == true) {
			return false;
		}
	}
	return true;
}

var cache = {};
for(var i = 1; i < 100; i++) {
	for(var j = i + 1; j < 10000; j++) {
		var product = i * j;
		if(isPandigital("" + i + j + product)) {
			cache[product] = true;
		}
	}
}
return Object.keys(cache).reduce((acc, cur) => acc + parseInt(cur), 0);

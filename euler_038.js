// Problem 38
// ==========
// 
// Take the number 192 and multiply it by each of 1, 2, and 3:
// 
//   192 * 1 = 192
//   192 * 2 = 384
//   192 * 3 = 576
// 
// By concatenating each product we get the 1 to 9 pandigital, 192384576. We
// will call 192384576 the concatenated product of 192 and (1,2,3)
// 
// The same can be achieved by starting with 9 and multiplying by 1, 2, 3, 4,
// and 5, giving the pandigital, 918273645, which is the concatenated product
// of 9 and (1,2,3,4,5).
// 
// What is the largest 1 to 9 pandigital 9-digit number that can be formed as
// the concatenated product of an integer with (1,2, ... , n) where n > 1?

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
	return true;
}

var max = 0;
for(var i = 1; i < 10000; i++) {
	for(var j = 2, s = i.toString(); s.length < 9; j++) {
		s += (i * j).toString();
	}
	if(isPandigital(s)) {
		max = Math.max(max, parseInt(s));
	}
}

return max;

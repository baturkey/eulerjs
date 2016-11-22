// Problem 52
// ==========
// 
// It can be seen that the number, 125874, and its double, 251748, contain
// exactly the same digits, but in a different order.
// 
// Find the smallest positive integer, x, such that 2x, 3x, 4x, 5x, and 6x,
// contain the same digits.

function matches(n) {
	var org_digits = n.toString().split("").sort();
	for(var scale = 2; scale <= 6; scale++) {
		var new_digits = (n * scale).toString().split("").sort();
		if(org_digits.length != new_digits.length) {
			return false;
		}
		for(var i = 0; i < org_digits.length; i++) {
			if(org_digits[i] != new_digits[i]) {
				return false;
			}
		}
	}
	return true;
}

for(var i = 1; !matches(i); i++);

return i;

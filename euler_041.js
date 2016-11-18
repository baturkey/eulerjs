// Problem 41
// ==========
// 
// We shall say that an n-digit number is pandigital if it makes use of all
// the digits 1 to n exactly once. For example, 2143 is a 4-digit pandigital
// and is also prime.
// 
// What is the largest n-digit pandigital prime that exists?

function isOddPrime(n) {
	for(var i = 3; i <= Math.sqrt(n); i += 2) {
		if(n % i == 0) {
			return false;
		}
	}
	return true;
}

function permute(s) {
	var output = [];
	if(s.length == 1) {
		return [s];
	}
	var first = s[0];
	var rest  = permute(s.substr(1));
	for(var i in rest) {
		for(var pos = 0; pos <= rest[i].length; pos++) {
			output.push(rest[i].substr(0, pos) + first + rest[i].substr(pos));
		}
	}
	return output;
}

var strings = ["123456789",
			   "12345678",
			   "1234567",
			   "123456",
			   "12345",
			   "1234",
			   "123",
			   "12"];

var max = 0;
var string_i = 0;
do {
	var nums = permute(strings[string_i]).map(x => parseInt(x));
	for(var i in nums) {
		if(nums[i] % 2 == 1 && isOddPrime(nums[i])) {
			max = Math.max(max, nums[i]);
		}
	}
	string_i++;
} while(max == 0);

return max;

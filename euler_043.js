// Problem 43
// ==========
// 
// The number, 1406357289, is a 0 to 9 pandigital number because it is made
// up of each of the digits 0 to 9 in some order, but it also has a rather
// interesting sub-string divisibility property.
// 
// Let d[1] be the 1st digit, d[2] be the 2nd digit, and so on. In this
// way, we note the following:
// 
//   * d[2]d[3]d[4]=406 is divisible by 2
//   * d[3]d[4]d[5]=063 is divisible by 3
//   * d[4]d[5]d[6]=635 is divisible by 5
//   * d[5]d[6]d[7]=357 is divisible by 7
//   * d[6]d[7]d[8]=572 is divisible by 11
//   * d[7]d[8]d[9]=728 is divisible by 13
//   * d[8]d[9]d[10]=289 is divisible by 17
// 
// Find the sum of all 0 to 9 pandigital numbers with this property.

function permute(s) {
    if(s.length == 1) {
	return [s];
    }
    const output = [];
    for(let i of permute(s.substr(1))) {
	for(let pos = 0; pos <= i.length; pos++) {
	    output.push(i.substr(0, pos) + s[0] + i.substr(pos));
	}
    }
    return output;
}

const matches = s =>
      s[3] % 2 == 0 &&
      (s[5] == '0' || s[5] == '5') &&
      s.substr(7, 3) % 17 == 0 &&
      s.substr(6, 3) % 13 == 0 &&
      s.substr(5, 3) % 11 == 0 &&
      s.substr(4, 3) %  7 == 0 &&
      s.substr(2, 3) %  3 == 0;

return permute('0123456789')
    .filter(matches)
    .reduce((a, b) => a + +b, 0);

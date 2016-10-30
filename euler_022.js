// Problem 22
// ==========
// 
// Using names.txt, a 46K text file containing over five-thousand first names,
// begin by sorting it into alphabetical order. Then working out the
// alphabetical value for each name, multiply this value by its alphabetical
// position in the list to obtain a name score.
// 
// For example, when the list is sorted into alphabetical order, COLIN, which
// is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So,
// COLIN would obtain a score of 938 * 53 = 49714.
// 
// What is the total of all the name scores in the file?

var fs = require('fs');
var path = require('path');

function namevalue(s) {
	return s.split('').map(x => x.charCodeAt() - 64).reduce((a, b) => a + b);
}

return fs.readFileSync(path.join('.', 'names.txt'), {encoding: 'utf-8'})
	.split(',')
	.map(x => x.replace(/"/g, ''))
	.sort()
	.map((name, index) => namevalue(name) * (index+1))
	.reduce((a, b) => a + b);

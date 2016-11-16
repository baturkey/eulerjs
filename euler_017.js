// Problem 17
// ==========
// 
// If the numbers 1 to 5 are written out in words: one, two, three, four,
// five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
// 
// If all the numbers from 1 to 1000 (one thousand) inclusive were written
// out in words, how many letters would be used?
// 
// NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and
// forty-two) contains 23 letters and 115 (one hundred and fifteen) contains
// 20 letters. The use of "and" when writing out numbers is in compliance
// with British usage.

function convert(n) {
	if(n < 20) {
		switch(n) {
		case 0:
			return "";
		case 1:
			return "one";
		case 2:
			return "two";
		case 3:
			return "three";
		case 4:
			return "four";
		case 5:
			return "five";
		case 6:
			return "six";
		case 7:
			return "seven";
		case 8:
			return "eight";
		case 9:
			return "nine";
		case 10:
			return "ten";
		case 11:
			return "eleven";
		case 12:
			return "twelve";
		case 13:
			return "thirteen";
		case 14:
			return "fourteen";
		case 15:
			return "fifteen";
		case 16:
			return "sixteen";
		case 17:
			return "seventeen";
		case 18:
			return "eighteen";
		case 19:
			return "nineteen";
		}
	} else if(n >= 20 && n < 30) {
		return "twenty"  + convert(n%10);
	} else if(n >= 30 && n < 40) {
		return "thirty"  + convert(n%10);
	} else if(n >= 40 && n < 50) {
		return "forty"   + convert(n%10);
	} else if(n >= 50 && n < 60) {
		return "fifty"   + convert(n%10);
	} else if(n >= 60 && n < 70) {
		return "sixty"   + convert(n%10);
	} else if(n >= 70 && n < 80) {
		return "seventy" + convert(n%10);
	} else if(n >= 80 && n < 90) {
		return "eighty"  + convert(n%10);
	} else if(n >= 90 && n < 100) {
		return "ninety"  + convert(n%10);
	} else if(n >= 100 && n < 1000) {
		return convert(Math.floor(n / 100)) + "hundred" + (n % 100 == 0 ? "" : "and" + convert(n%100));
	} else if(n == 1000) {
		return "onethousand";
	}
}

return Array(1000)
	.fill(0)
	.map((cur, ind) => convert(ind + 1).length)
	.reduce((a, b) => a+b);

// Problem 19
// ==========
// 
// You are given the following information, but you may prefer to do some
// research for yourself.
// 
//   * 1 Jan 1900 was a Monday.
//   * Thirty days has September,
//     April, June and November.
//     All the rest have thirty-one,
//     Saving February alone,
//     Which has twenty-eight, rain or shine.
//     And on leap years, twenty-nine.
//   * A leap year occurs on any year evenly divisible by 4, but not on a
//     century unless it is divisible by 400.
// 
// How many Sundays fell on the first of the month during the twentieth
// century (1 Jan 1901 to 31 Dec 2000)?

function numDays(m, y) {
	switch(m) {
	case 1:
	case 3:
	case 5:
	case 7:
	case 8:
	case 10:
	case 12:
		return 31;
	case 4:
	case 6:
	case 9:
	case 11:
		return 30;
	case 2:
		return y % 4 == 0 && (y % 100 != 0 || y % 400 == 0) ? 29 : 28;
	}
}

var days = -1;
for(var m = 1; m <= 12; m++) {
	days += numDays(m, 1900);
}

var count = 0;

for(var y = 1901; y <= 2000; y++) {
	for(var m = 1; m <= 12; m++) {
		if(days % 7 == 0) {
			count++;
		}
		days += numDays(m, y);
	}
}

return count;

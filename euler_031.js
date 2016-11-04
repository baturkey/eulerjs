// Problem 31
// ==========
// 
// In England the currency is made up of pound, -L-, and pence, p, and there
// are eight coins in general circulation:
// 
//   1p, 2p, 5p, 10p, 20p, 50p, -L-1 (100p) and -L-2 (200p).
// 
// It is possible to make -L-2 in the following way:
// 
//   1 * -L-1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
// 
// How many different ways can -L-2 be made using any number of coins?

var coins = [1, 2, 5, 10, 20, 50, 100, 200];

function ways(n, s) {
	var total = 0;

	if(n == 0) {
		return 1;
	}

	for(var i = s; i < coins.length; i++) {
		if(coins[i] <= n) {
			total += ways(n-coins[i], i);
		} else {
			break;
		}
	}
	
	return total;
}

return ways(200, 0);

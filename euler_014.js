// Problem 14
// ==========
// 
// The following iterative sequence is defined for the set of positive
// integers:
// 
// n->n/2 (n is even)
// n->3n+1 (n is odd)
// 
// Using the rule above and starting with 13, we generate the following
// sequence:
//                   13->40->20->10->5->16->8->4->2->1
// 
// It can be seen that this sequence (starting at 13 and finishing at 1)
// contains 10 terms. Although it has not been proved yet (Collatz Problem),
// it is thought that all starting numbers finish at 1.
// 
// Which starting number, under one million, produces the longest chain?
// 
// NOTE: Once the chain starts the terms are allowed to go above one million.

var collatz = function() {
	var memo = [];
	return function(n) {
		if(n in memo) {
			return memo[n];
		}
		if(n % 2 == 0) {
			return (memo[n] = n/2);
		} else {
			return (memo[n] = 3 * n + 1);
		}
	}
}();

var count_collatz = function() {
	var memo = [0, 1];
	return function(n) {
		if(n in memo) {
			return memo[n];
		}
		return (memo[n] = count_collatz(collatz(n)) + 1);
	}
}();

var max_num   = 0;
var max_count = 0;

for(var i = 1; i < 1000000; i++) {
	var count = count_collatz(i);
	if(count > max_count) {
		max_count = count;
		max_num = i;
	}
}

// TODO: return your answer for this prompt.
return max_num;

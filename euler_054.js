// Problem 54
// ==========
// 
// In the card game poker, a hand consists of five cards and are ranked, from
// lowest to highest, in the following way:
// 
//   * High Card: Highest value card.
//   * One Pair: Two cards of the same value.
//   * Two Pairs: Two different pairs.
//   * Three of a Kind: Three cards of the same value.
//   * Straight: All cards are consecutive values.
//   * Flush: All cards of the same suit.
//   * Full House: Three of a kind and a pair.
//   * Four of a Kind: Four cards of the same value.
//   * Straight Flush: All cards are consecutive values of same suit.
//   * Royal Flush: Ten, Jack, Queen, King, Ace, in same suit.
// 
// The cards are valued in the order:
// 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace.
// 
// If two players have the same ranked hands then the rank made up of the
// highest value wins; for example, a pair of eights beats a pair of fives
// (see example 1 below). But if two ranks tie, for example, both players
// have a pair of queens, then highest cards in each hand are compared (see
// example 4 below); if the highest cards tie then the next highest cards are
// compared, and so on.
// 
// Consider the following five hands dealt to two players:
// 
//         Hand   Player 1            Player 2              Winner
//         1      5H 5C 6S 7S KD      2C 3S 8S 8D TD        Player 2
//                Pair of Fives       Pair of Eights
//         2      5D 8C 9S JS AC      2C 5C 7D 8S QH        Player 1
//                Highest card Ace    Highest card Queen
//         3      2D 9C AS AH AC      3D 6D 7D TD QD        Player 2
//                Three Aces          Flush with Diamonds
//                4D 6S 9H QH QC      3D 6D 7H QD QS
//         4      Pair of Queens      Pair of Queens        Player 1
//                Highest card Nine   Highest card Seven
//                2H 2D 4C 4D 4S      3C 3D 3S 9S 9D
//         5      Full House          Full House            Player 1
//                With Three Fours    with Three Threes
// 
// The file poker.txt contains one-thousand random hands dealt to two players.
// Each line of the file contains ten cards (separated by a single space): the
// first five are Player 1's cards and the last five are Player 2's cards. You
// can assume that all hands are valid (no invalid characters or repeated
// cards), each player's hand is in no specific order, and in each hand there
// is a clear winner.
// 
// How many hands does Player 1 win?

function cardVal(s) {
	var n;
	switch(s[0]) {
	case '2':
	case '3':
	case '4':
	case '5':
	case '6':
	case '7':
	case '8':
	case '9':
		n = parseInt(s);
		break;
	case 'T':
		n = 10;
		break;
	case 'J':
		n = 11;
		break;
	case 'Q':
		n = 12;
		break;
	case 'K':
		n = 13;
		break;
	case 'A':
		n = 14;
		break;
	}
	return n;
}

function pad(n) {
	return (n < 10 ? '0' : '') + n;
}

function cardComparator(a, b) {
	var aVal = cardVal(a);
	var bVal = cardVal(b);
	return aVal > bVal ? 1 : (aVal == bVal ? 0 : -1);
}

function isStraight(h) {
	var firstVal = cardVal(h[0]);
	for(var i = 1; i < h.length; i++) {
		if(cardVal(h[i]) != firstVal + i) {
			return false;
		}
	}
	return true;
}

function isFlush(h) {
	var firstSuit = h[0][1];
	for(var i = 1; i < h.length; i++) {
		if(h[i][1] != firstSuit) {
			return false;
		}
	}
	return true;
}

function getCardObj(h) {
	return h.reduce((acc, cur) => {
		var val = cardVal(cur);
		acc[val] = val in acc ? acc[val] + 1 : 1;
		return acc;
	}, {});
}

function getCardCounts(h) {
	var count_obj = getCardObj(h);
	var keys = Object.keys(count_obj);
	var output = [];
	for(var i = 0; i < keys.length; i++) {
		output.push(count_obj[keys[i]]);
	}
	return output.sort();
}

function evaluate(h) {
	h.sort(cardComparator);
	var s = isStraight(h);
	var f = isFlush(h);

	if(s && f) {
		return '8' + pad(cardVal(h[4]));
	}

	var counts = getCardCounts(h);

	if(counts[1] == 4) {
		return '7' + pad(cardVal(h[1]));
	}

	if(counts[0] == 2 && counts[1] == 3) {
		return '6' + pad(cardVal(h[2]));
	}

	if(f) {
		return '5' + pad(cardVal(h[4]));
	}

	if(s) {
		return '4' + pad(cardVal(h[4]));
	}

	if(counts[2] == 3) {
		return '3' + pad(cardVal(h[2]));
	}

	if(counts[1] == 2 && counts[2] == 2) {
		return '2' + pad(cardVal(h[3]));
	}

	if(counts[3] == 2) {
		var o = getCardObj(h);
		var k = Object.keys(o);
		var high = 0;
		for(var i in k) {
			if(o[k[i]] == 2) {
				high = pad(k[i]);
			}
		}
		return '1' + high;
	}

	return '0' + pad(cardVal(h[4]));
}

var hands = require('fs').readFileSync('poker.txt', {encoding: 'utf-8'}).split("\r\n").map(x => x.split(' '));
hands.pop();

var count = 0;

for(var i in hands) {
	if(evaluate(hands[i].slice(0, 5)) > evaluate(hands[i].slice(5))) {
		count++;
	}
}

return count;

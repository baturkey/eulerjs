// Problem 56
// ==========
// 
// A googol (10^100) is a massive number: one followed by one-hundred zeros;
// 100^100 is almost unimaginably large: one followed by two-hundred zeros.
// Despite their size, the sum of the digits in each number is only 1.
// 
// Considering natural numbers of the form, a^b, where a, b < 100, what is
// the maximum digital sum?

function multiply(a, b) {

    function convert(n) {
        let output = [];
        let d;

        while(n) {
            d = n % 10;
	    n = (n - d) / 10;
            output.unshift(d);
        }
        return output;
    }

    function add(a, b) {
        while(a.length < b.length) {
            a.unshift(0);
        }
        while(b.length < a.length) {
	    b.unshift(0);
        }

        for(var i = 0; i < a.length; i++) {
	    a[i] += b[i];
        }
        for(i = a.length - 1; i >= 0; i--) {
	    if(a[i] > 9) {
	        a[i] %= 10;
                if (!i) {
		    a.unshift(1);
                } else {
		    a[i - 1]++;
	        }
	    }
        }
    }

    function mult10(a, p) {
        return a.concat(Array(p).fill(0));
    }

    var output = [];
    for(var i = a.length - 1; i >= 0; i--) {
	for(var j = b.length - 1; j >= 0; j--) {
	    add(output, mult10(convert(a[i] * b[j]),
			       a.length + b.length - i - j - 2));
	}
    }
    return output;
}

var max = 0;
for(var a = 99; a > 1; a--) {
    if(a % 10 == 0) {
	continue;
    }
    var base = [a];
    var result = [1];

    for(var b = 1; b < 99; b++) {
	result = multiply(result, base);
	var sum = result.reduce((a, b) => a + b);
	if(sum > max) {
	    max = sum;
	}
    }
}
return max;

// Problem 75
// ==========
// 
// It turns out that 12 cm is the smallest length of wire can be bent to form
// a right angle triangle in exactly one way, but there are many more
// examples.
// 
// 12 cm: (3,4,5)
// 24 cm: (6,8,10)
// 30 cm: (5,12,13)
// 36 cm: (9,12,15)
// 40 cm: (8,15,17)
// 48 cm: (12,16,20)
// 
// In contrast, some lengths of wire, like 20 cm, cannot be bent to form a
// right angle triangle, and other lengths allow more than one solution to be
// found; for example, using 120 cm it is possible to form exactly three
// different right angle triangles.
// 
// 120 cm: (30,40,50), (20,48,52), (24,45,51)
// 
// Given that L is the length of the wire, for how many values of L 1,500,000
// can exactly one right angle triangle be formed?

const MAX = 1500000;
const SQRT_MAX = Math.trunc(Math.sqrt(MAX));
const HALF_MAX = Math.trunc(MAX / 2);

const squares = Array(MAX).fill(0).map((_, n) => n * n);
const factors = Array(MAX + 1);
const results = Array(MAX).fill(0);

for (let i = 0; i < factors.length; i++) {
    factors[i] = [];
}

for (let i = 2; i <= SQRT_MAX; i++) {
    for (let j = 2; j < i; j++) {
        factors[i * j].push(i);
        factors[i * j].push(j);
    }
    factors[i * i].push(i);
}

for (let i = SQRT_MAX + 1; i <= HALF_MAX; i++) {
    const limit = Math.trunc(MAX / i);
    for (let j = 2; j <= limit; j++) {
        factors[i * j].push(i);
        factors[i * j].push(j);
    }
}

for (let b = 0; b < squares.length; b++) {
    let odds = oddifySquare(squares[b], factors[b]);
    for (let j = 0; j < odds.length; j++) {
        let a = (odds[j].result - 1) / 2;
        if (b > a) {
            results[a + b + a + odds[j].factor]++;
        }
    }
}

return results.filter(i => i == 1).length;

function oddifySquare(sq, input) {
    const output = [];
    const isOdd = sq & 1;
    const factorArray = new Set(input);

    for (let i in input) {
        for (let j = i; j < input.length; j++) {
            factorArray.add(input[i] * input[j]);
        }
    }
    
    for (let factor of factorArray.values()) {
        if (isOdd != (factor & 1)) {
            continue;
        }

        let div = sq / factor;

        if (factor > div || isOdd != (div & 1)) {
            continue;
        }

        let result = div - factor + 1;

        if (result !== 1) {
            output.push({result, factor});
        }
    }
    return output;
}

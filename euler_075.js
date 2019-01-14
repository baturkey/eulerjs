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

const factors = Array(MAX + 1).fill(undefined).map(() => []);

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

const results = Array(MAX).fill(0);
for (let b = 0; b < HALF_MAX; b++) {
    const sq = b * b;
    const isOdd = sq & 1;
    const used = {};
    const factorArray = [];

    for (let i = 0; i < factors[b].length; i++) {
        if (isOdd == (factors[b][i] & 1)) {
            factorArray.push(factors[b][i]);
        }
        for (let j = i; j < factors[b].length; j++) {
            const f = factors[b][i] * factors[b][j];
            if (isOdd == (f & 1)) {
                factorArray.push(f);
            }
        }
    }

    for (let factor of factorArray) {
        const div = sq / factor;
        if (factor < div && isOdd == (div & 1)) {
            const a = (div - factor) / 2;
            if (b > a && !(factor in used)) {
                results[a + b + a + factor]++;
                used[factor] = true;
            }
        }
    }
}

return results.filter(i => i == 1).length;

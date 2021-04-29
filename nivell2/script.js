var nom = ["S","I","M","A","R","R","O"];

var dict = {};
for (let index = 0; index < nom.length; index++) {
    const letter = nom[index];

    numRep = nom.map(x => (x===letter)).filter(Boolean).reduce((a, b) => a + b, 0);
    dict[letter] = numRep;
}
console.log(dict)
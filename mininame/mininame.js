const miniName = lmax => name =>
    name
        .split(" ")
        .map(x => x.length < lmax ? x : x[0] + ".")
        .join(" ");

//test:
var joao = "Joao Roberto da Silva Santos Tchecoslovaquia",
    maria = "Maria de Campos Fundao da Rocha";


const mini2 = miniName(1),
    mini4 = miniName(4),
    mini7 = miniName(7);

console.log(mini2(joao));
console.log(mini4(joao));
console.log(mini7(joao));

console.log(mini2(maria));
console.log(mini4(maria));
console.log(mini7(maria));

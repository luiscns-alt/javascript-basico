// A solução desenvolvida por você:
//Se preparando para ler dados da entrada padrão
const stdin = process.openStdin();
//Lendo dados
stdin.addListener("data", (text) => {
    const textoLido = text
        .toString()
        .trim()
        .split("\n")
        .map((s) => s.trim());

    stdin.pause(); // para leitura

    main(textoLido);
});
function diferenca(m, n) {
    //Informe seu código aqui
    const x = m.filter((numero) => !n.includes(numero));
    const y = n.filter((numero) => !m.includes(numero));
    const difference = x.concat(y);
    difference.map(parseInt).sort();

    for (let diff of difference) {
        console.log(diff);
    }
}
function main(colecoes) {
    diferenca(colecoes[0].split(" "), colecoes[1].split(" "));
}

// Resposta do Professor
//Se preparando para ler dados da entrada padrão
const stdin = process.openStdin();

//Lendo dados
stdin.addListener("data", (text) => {
    const textoLido = text
        .toString()
        .trim()
        .split("\n")
        .map((s) => s.trim());

    stdin.pause(); // para leitura

    main(textoLido);
});

function diferenca(m, n) {
    let diff = m
        .filter((e) => !n.includes(e))
        .concat(n.filter((e) => !m.includes(e)));

    diff.map(parseInt).sort();

    for (let item of diff) console.log(item);
}

function main(colecoes) {
    diferenca(colecoes[0].split(" "), colecoes[1].split(" "));
}

// Dado um array de objetos, que contém com dois campos: nome e placar, ordene os valores em ordem decrescente do placar. Caso 2 ou mais nomes possuirem o mesmo placar, eles devem ser ordenados alfabeticamente por nome.

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
function ordenacao(jogadores) {
    //Informe seu código aqui
    var x = jogadores.sort((a, b) => {
        if (a.placar === b.placar) return b.nome < a.nome ? 1 : -1;
        return b.placar - a.placar;
    });
    x.forEach((item) => console.log(`${item.nome} ${item.placar}`));
}
function main(dados) {
    let jogadores = [];

    for (let d of dados) {
        var jogador = d.split(" ");
        jogadores.push({ nome: jogador[0], placar: parseInt(jogador[1]) });
    }

    ordenacao(jogadores);
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

function ordenacao(jogadores) {
    jogadores.sort((j1, j2) => {
        if (j1.placar == j2.placar) {
            if (j1.nome < j2.nome) return -1;
            else return 1;
        } else if (j1.placar > j2.placar) return -1;
        else return 1;
    });
    for (let j of jogadores) console.log(j.nome + " " + j.placar);
}

function main(dados) {
    let jogadores = [];

    for (let d of dados) {
        var jogador = d.split(" ");
        jogadores.push({ nome: jogador[0], placar: parseInt(jogador[1]) });
    }

    ordenacao(jogadores);
}

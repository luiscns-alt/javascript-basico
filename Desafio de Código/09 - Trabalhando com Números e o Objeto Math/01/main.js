//Resposta
//Se preparando para ler dados da entrada padrão
const stdin = process.openStdin();
//Lendo dados
stdin.addListener("data", (text) => {
    const textoLido = text.toString().trim().split("\n");

    stdin.pause(); // para leitura

    main(textoLido);
});
function main(linhas) {
    for (let linha of linhas) {
        var [a, b, c] = linha.trim().split(" ");

        //Informe seu código aqui
        var multiplicacao = 0;
        var aux = 0;
        var soma = 0;
        for (var w = 0; w < c; w++) {
            multiplicacao = b * Math.pow(2, w);
            aux = aux + multiplicacao;
            soma = parseInt(a) + aux;
            console.log(soma);
        }
    }
}

// =====================//
//Resposta do Professor
//Se preparando para ler dados da entrada padrão
const stdin = process.openStdin();

//Lendo dados
stdin.addListener("data", (text) => {
    const textoLido = text.toString().trim().split("\n");

    stdin.pause(); // para leitura

    main(textoLido);
});

function main(linhas) {
    for (let linha of linhas) {
        var [a, b, n] = linha.trim().split(" ").map(Number);

        var result = [];

        for (let j = 0; j < n; j++) {
            result[j] = a;
            for (let k = 0; k <= j; k++) {
                var exp = Math.pow(2, k);
                result[j] += exp * b;
            }
        }

        console.log(result.join(" "));
    }
}

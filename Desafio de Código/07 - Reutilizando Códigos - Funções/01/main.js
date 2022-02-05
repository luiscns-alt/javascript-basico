//Se preparando para ler dados da entrada padrão
const stdin = process.openStdin();
//Lendo dados
stdin.addListener("data", (text) => {
    const textoLido = text.toString().trim().split(" ");

    stdin.pause(); // stop reading

    main(Number(textoLido));
});
// Declare sua função aqui

function fatorial(n) {
    var resultado = n;
    var primeiroMultipicador = n - 1;
    for (var i = primeiroMultipicador; i > 1; i--) {
        resultado *= i;
    }

    return resultado;
}
function main(n) {
    console.log(fatorial(n));
}

// Resposta do Professor
//Se preparando para ler dados da entrada padrão
const stdin = process.openStdin();

//Lendo dados
stdin.addListener("data", (text) => {
    const textoLido = text.toString().trim().split(" ");

    stdin.pause(); // stop reading

    main(Number(textoLido));
});

function fatorial(n) {
    if (n === 0) return 1;

    return n * fatorial(n - 1);
}

function main(n) {
    console.log(fatorial(n));
}

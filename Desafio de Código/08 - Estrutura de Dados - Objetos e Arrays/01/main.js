//Se preparando para ler dados da entrada padrão
const stdin = process.openStdin();

//Lendo dados
stdin.addListener("data", (text) => {
    const textoLido = text
        .toString()
        .trim()
        .split("\n")
        .map((s) => s.trim());

    stdin.pause(); // stop reading

    main(textoLido);
});

function segundoMaior(numeros) {
    let maior = numeros[0];
    let segMaior = numeros[0];
    for (let num of numeros) {
        if (num > maior) {
            segMaior = maior;
            maior = num;
        } else if (num > segMaior && num != maior) segMaior = num;
    }
    return segMaior;
}

function main(linhas) {
    for (let valores of linhas) {
        console.log(segundoMaior(valores.split(" ").map(Number)));
    }
}

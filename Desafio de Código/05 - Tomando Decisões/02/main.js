//Se preparando para ler dados da entrada padrão
const stdin = process.openStdin();
//Lendo dados
stdin.addListener("data", (text) => {
    const textoLido = text.toString().trim().split(" ");

    stdin.pause(); // stop reading

    main(Number(textoLido));
});
//Função
function main(n) {
    //Informe seu código aqui

    if (n % 2 != 0) {
        console.log("Estranho");
    } else if (n % 2 == 0 && n < 10) {
        console.log("Não é estranho");
    } else if (n % 2 == 0 && n > 10 && n < 20) {
        console.log("Estranho");
    } else if (n % 2 == 0 && n > 20) {
        console.log("Não é estranho");
    }
}

// Resposta do Professor
//Se preparando para ler dados da entrada padrão
const stdin = process.openStdin();

//Lendo dados
stdin.addListener("data", (text) => {
    const textoLido = text.toString().trim();

    stdin.pause(); // stop reading

    main(Number(textoLido));
});

//Função
function main(n) {
    if (n % 2 != 0) {
        console.log("Estranho");
    } else {
        if (n < 10) {
            console.log("Não é estranho");
        } else if (n >= 10 && n <= 20) {
            console.log("Estranho");
        } else {
            console.log("Não é estranho");
        }
    }
}

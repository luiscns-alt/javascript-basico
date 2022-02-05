//Se preparando para ler dados da entrada padrão
const stdin = process.openStdin();
//Lendo dados
stdin.addListener("data", (text) => {
    const textoLido = text.toString().trim();

    stdin.pause(); // stop reading

    main(textoLido);
});
//Função
function main(c) {
    //Informe seu código aqui

    if (c == "a" || c == "e" || c == "i" || c == "o" || c == "u") {
        console.log("A");
    } else if (c == "b" || c == "c" || c == "d" || c == "f" || c == "g") {
        console.log("B");
    } else if (c == "h" || c == "j" || c == "k" || c == "l" || c == "m") {
        console.log("C");
    } else if (
        c == "c" ||
        c == "p" ||
        c == "q" ||
        c == "r" ||
        c == "s" ||
        c == "t" ||
        c == "v" ||
        c == "w" ||
        c == "x" ||
        c == "y" ||
        c == "z"
    ) {
        console.log("D");
    }
}

// Resposta do Professor
//Se preparando para ler dados da entrada padrão
const stdin = process.openStdin();

//Lendo dados
stdin.addListener("data", (text) => {
    const textoLido = text.toString().trim();

    stdin.pause(); // stop reading

    main(textoLido);
});

//Função
function main(c) {
    switch (c) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            console.log("A");
            break;
        case "b":
        case "c":
        case "d":
        case "f":
        case "g":
            console.log("B");
            break;
        case "h":
        case "j":
        case "k":
        case "l":
        case "m":
            console.log("C");
            break;
        default:
            console.log("D");
    }
}

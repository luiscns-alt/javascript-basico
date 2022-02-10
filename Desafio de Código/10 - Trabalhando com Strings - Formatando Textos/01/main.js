//Se preparando para ler dados da entrada padrão
const stdin = process.openStdin();

//Lendo dados
stdin.addListener("data", (text) => {
    const textoLido = text.toString().trim();
    stdin.pause(); // para leitura
    main(textoLido);
});

function expressRegular() {
    //Informe seu código aqui
    return /[\d]+/g;
}

function main(valor) {
    const re = expressRegular();
    const r = valor.match(re);
    for (const e of r) {
        console.log(e);
    }
}

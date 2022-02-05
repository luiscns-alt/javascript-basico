function meuObjeto(a, b) {
    //Informe seu código aqui

    let meuObjeto = {
        largura: a,
        comprimento: b,
        perimetro: 2 * (a + b),
        area: a * b,
    };
    return meuObjeto;
}

// ===================== //
// Resposta do Professor //

//Se preparando para ler dados da entrada padrão
const stdin = process.openStdin();

//Lendo dados
stdin.addListener("data", (text) => {
    const textoLido = text
        .toString()
        .trim()
        .split("\n")
        .map((s) => Number(s));

    stdin.pause(); // stop reading

    main(textoLido);
});

function meuObjeto(a, b) {
    return {
        largura: a,
        comprimento: b,
        perimetro: 2 * (a + b),
        area: a * b,
    };
}

function main(valores) {
    let obj = meuObjeto(valores[0], valores[1]);
    console.log(obj.largura);
    console.log(obj.comprimento);
    console.log(obj.perimetro);
    console.log(obj.area);
}

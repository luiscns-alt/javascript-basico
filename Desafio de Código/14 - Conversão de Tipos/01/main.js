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
function operacao(segInt, segFloat, segString) {
    let priInt = 4;
    let priFloat = 3.17;
    let priString = "JavaScript - ";

    //Informe seu código aqui
    console.log(priInt + parseInt(segInt));
    console.log(priFloat + parseFloat(segFloat));
    console.log(priString + segString);
}
function main(valores) {
    operacao(valores[0], valores[1], valores[2]);
}

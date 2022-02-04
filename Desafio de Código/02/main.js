//Se preparando para ler dados da entrada padrão
const stdin = process.openStdin();
//Lendo dados
stdin.addListener("data", (text) => {
    const textoLido = text.toString().trim();

    stdin.pause(); // stop reading

    main(Number(textoLido));
});
//Função
function main(textoLido) {
    //Informe seu código aqui
    console.log(Number.isInteger(textoLido));
}

//Se preparando para ler dados da entrada padrão
const stdin = process.openStdin();
//Lendo dados
stdin.addListener("data", (text) => {
    const textoLido = text.toString().trim().split(" ");

    stdin.pause(); // stop reading

    main(Number(textoLido));
});
//Função
function main(N) {
    //Informe seu código aqui
    if (N % 2 == 0) {
        console.log("Par");
    } else {
        console.log("Ímpar");
    }
}

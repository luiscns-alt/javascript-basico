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

    for (var i = n; i >= 0; i--) {
        console.log(i);
    }
}

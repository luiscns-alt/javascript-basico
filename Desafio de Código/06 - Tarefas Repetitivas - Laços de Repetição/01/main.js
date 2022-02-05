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
    for (var i = 1; i <= 10; i++) {
        resultado = n * i;
        console.log(n + " x " + i + " = " + resultado);
    }
}

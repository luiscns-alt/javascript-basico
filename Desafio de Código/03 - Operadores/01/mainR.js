//Se preparando para ler dados da entrada padrão
const stdin = process.openStdin();
//Lendo dados
stdin.addListener("data", (text) => {
    const textoLido = text.toString().trim().split(" ");

    stdin.pause(); // stop reading

    main(Number(textoLido[0]), Number(textoLido[1]));
});
//Função
function main(valor1, valor2) {
    //Informe seu código aqui
    soma = valor1 + valor2;
    sub = valor1 - valor2;
    console.log(soma);
    console.log(sub);
}

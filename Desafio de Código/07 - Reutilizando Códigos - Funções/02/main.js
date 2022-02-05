//Se preparando para ler dados da entrada padrão
const stdin = process.openStdin();
//Lendo dados
stdin.addListener("data", (text) => {
    const textoLido = text
        .toString()
        .trim()
        .split(" ")
        .map((s) => Number(s));

    stdin.pause(); // stop reading

    main(textoLido);
});
function arrowfunction() {
    //Informe sua arrow function aqui
    return (s) => (s % 2 === 0 ? s * 2 : s * 3);
}
function main(valores) {
    let transformacao = arrowfunction();
    try {
        new transformacao();
        console.log("É necessário definir uma arrow function");
    } catch (e) {}

    console.log(valores.map(transformacao).toString().split(",").join(" "));
}

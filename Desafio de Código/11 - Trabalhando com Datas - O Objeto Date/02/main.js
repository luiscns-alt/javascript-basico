function getData(dataString = "2009-10-11") {
    //Informe seu código aqui
    let dateFormat = dataString.split("-").reverse().join("/");
    let date = new Date(dateFormat);
    var dd = date.getDate();
    var mm = date.getMonth() + 1; //January is 0!
    var yyyy = date.getFullYear();
    if (dd < 10) {
        dd = "0" + dd;
    }
    if (mm < 10) {
        mm = "0" + mm;
    }
    date = `${dd}/${mm}/${yyyy}`;
    return date.toString();
}

console.log(getData());

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

function getData(dataString) {
    let partes = dataString.match(/\d+/gm);

    var data = new Date(partes[0], partes[2] - 1, partes[1]);

    return data.toLocaleDateString("pt-BR");
}

function main(datas) {
    for (var data of datas) {
        let dia = getData(data);
        console.log(dia);
    }
}

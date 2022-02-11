function weekDay(dataString = "10/11/2009") {
    let [dia, mes, ano] = dataString.split("/").map((v) => parseInt(v));
    let date = new Date(ano, mes - 1, dia);
    console.log(date);

    let data_americana = String(dataString).split("/").reverse().join("/");
    let data = new Date(data_americana);
    var strSplitDate = String(data_americana).split(" ");
    console.log(data_americana);
    console.log(data);
    // var curr_date = date.getDate();

    // var curr_month = date.getMonth();

    // var curr_year = date.getFullYear();
    // let dat = curr_date + "-" + curr_month + "-" + curr_year;
    // console.log(date);
    // console.log(strSplitDate);
    let days = [
        "Domingo",
        "Segunda-Feira",
        "Terça-Feira",
        "Quarta-Feira",
        "Quinta-Feira",
        "Sexta-Feira",
        "Sábado",
    ];
    return days[date.getDay()];
}

console.log(weekDay());

// Resposta do professor
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

function getDiaSemana(dataString) {
    let partes = dataString.match(/\d+/gm);

    var data = new Date(partes[2], partes[1] - 1, partes[0]);

    let dias = [
        "Domingo",
        "Segunda-Feira",
        "Terça-Feira",
        "Quarta-Feira",
        "Quinta-Feira",
        "Sexta-Feira",
        "Sábado",
    ];

    return dias[data.getDay()];
}

function main(datas) {
    for (var data of datas) {
        let dia = getDiaSemana(data);
        console.log(dia);
    }
}

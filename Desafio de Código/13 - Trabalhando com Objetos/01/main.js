// Dado um array de objetos, que contém dois campos: x e y, retorne a quantidade de elementos o que satisfaçam a condição o.x == o.y.

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
function quantidade(objetos) {
    //Informe o código aqui

    let n = 0;
    for (let x = 0; x <= objetos.length - 1; x++) {
        if (objetos[x].x === objetos[x].y) {
            n++;
        }
    }
    return n;
}
function main(dados) {
    let objetos = [];

    for (let d of dados) {
        var obj = d.split(" ").map((t) => parseInt(t));
        objetos.push({ x: obj[0], y: obj[1] });
    }

    console.log(quantidade(objetos));
}

// Resposta do Professor
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

function quantidade(objetos) {
    let count = 0;
    for (var obj of objetos) {
        if (obj.x == obj.y) count++;
    }

    return count;
}

function main(dados) {
    let objetos = [];

    for (let d of dados) {
        var obj = d.split(" ").map((t) => parseInt(t));
        objetos.push({ x: obj[0], y: obj[1] });
    }

    console.log(quantidade(objetos));
}

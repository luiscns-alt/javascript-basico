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
function somaSimilaridade(s) {
    //Informe seu código aqui
    var str = s.trim().split("");
    var n = str.length;
    var total = n;
    var z = [n];
    var L = 0,
        R = 0;
    for (var i = 1; i < n; i++) {
        if (i > R) {
            L = R = i;
            while (R < n && s[R - L] == s[R]) R++;
            z[i] = R - L;
            R--;
        } else {
            var k = i - L;
            if (z[k] < R - i + 1) {
                z[i] = z[k];
            } else {
                L = i;
                while (R < n && s[R - L] == s[R]) {
                    R++;
                }
                z[i] = R - L;
                R--;
            }
        }
        total += z[i];
    }
    return total;
}
function main(valores) {
    for (var s of valores) {
        let soma = somaSimilaridade(s);
        console.log(soma);
    }
}

// Resposta do Professor
//
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

function somaSimilaridade(s) {
    let soma = 0;
    for (let i = 0; i < s.length; i++) {
        const sufixo = s.substr(i);
        for (let j = 0; j < sufixo.length; j++) {
            if (s[j] === sufixo[j]) soma++;
            else break;
        }
    }
    return soma;
}

function main(valores) {
    for (var s of valores) {
        let soma = somaSimilaridade(s);
        console.log(soma);
    }
}

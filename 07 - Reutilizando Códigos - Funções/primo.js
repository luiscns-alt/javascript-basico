// var n = 11;

// function verificar() {
//     if (n % 2 === 0) {
//         console.log("Numero Primo");
//     } else {
//         console.log("Não é numero Primo");
//     }
// }

// verificar();

function isPrime(num) {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num !== 1;
}

isPrime(1);

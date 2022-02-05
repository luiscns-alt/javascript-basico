// function sum(a, b) {
//     var total = a + b;
//     return total;
// }

// console.log(sum(4, 5));

// function sum(n1, n2) {
//     var total = 0;

//     for (let i = 0; i < 10; i++) {
//         console.log(i);
//         if (i === 2) {
//             return "Finish";
//         }
//     }
// }

// var sum = function (n) {
//     return 0;
// };

// Callback
function myFunction() {
    console.log("Hello");
}

setTimeout(myFunction, 1000);

// Função Anonimas
setTimeout(function () {
    console.log("ABC");
}, 1000);

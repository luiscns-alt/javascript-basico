// setTimeout(() => {
//     console.log("DEF");
// }, 2000);

function myFunc(otherFunc) {
    console.log(otherFunc());
}

myFunc(() => 12 + 23);

var numero = [2, 30, 10];

function min(myArray) {
    var min = myArray[0];
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] < min) {
            min = myArray[i];
        }
    }
}

console.log(min([102, 30, 50, 45, 1]));

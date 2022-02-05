function sum(n, m, l) {
    return n + m + l;
}

var myArray = [5, 20, 6];

console.log(sum(myArray[0], myArray[1]));
console.log("========= Spread =========");
console.log(sum(...myArray));

var myArray2 = [4, 5, 6];

console.log([...myArray, ...myArray2]);

var myArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

console.log(myArray.length);

console.log(myArray.every((n) => n % 2 === 0));

console.log(myArray.filter((n) => n % 2 !== 0));

console.log(myArray.find((n) => n > 5));

console.log(myArray.findIndex((n) => n > 5));

console.log(myArray.some((n) => n % 2 !== 0));

console.log(myArray.reduce((acumulado, atual) => acumulado + atual));

console.log(myArray.sort((a, b) => (a > b ? 1 : -1)));

myArray.forEach((n) => {
    console.log(n);
});

console.log(myArray.map((n) => n * 2));

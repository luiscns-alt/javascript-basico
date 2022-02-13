var myObj = {
    a: 2,
    b: 3,
    c: 4,
};

console.log(Object.keys(myObj));
console.log(Object.values(myObj));
console.log(Object.hasOwnProperty("a"));
console.log(Object.entries(myObj));
console.log(Object.seal(myObj));
console.log(Object.freeze(myObj));
console.log(Object.isSealed(myObj));
console.log(Object.isFrozen(myObj));

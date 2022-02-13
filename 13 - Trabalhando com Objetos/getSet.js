var _b = 0;

var myObj = {
    a: 2,
    get b() {
        console.log("acesso");
        return _b;
    },
    set b(value) {
        if (value % 2 === 0) {
            console.log("Numero Par");
            _b = value;
        } else {
            console.log("Numero Impar");
        }
    },
};

console.log(myObj);
console.log(myObj.b);
console.log((myObj.b = 23));

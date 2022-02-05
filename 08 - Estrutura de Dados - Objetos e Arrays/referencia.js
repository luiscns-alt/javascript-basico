var n = 5;
var m = 5;

console.log(n === m);

var myObj = {
    length: 15,
    color: "white",
    write: function () {
        console.log("first");
    },
};

var myObj2 = myObj;

myObj.color = "red";

console.log(myObj);
console.log(myObj2);

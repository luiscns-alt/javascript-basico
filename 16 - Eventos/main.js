document.querySelector("#myInput").addEventListener("click", function () {
    console.log("clicado");
});

var myFunc = function () {
    console.log("click");
};

document.querySelector("#myInput").addEventListener("click", myFunc);
document.querySelector("#myInput").removeEventListener("click", myFunc);

document.querySelector("input").addEventListener("click", function (e) {
    console.log(e);
});
document.querySelector("input").addEventListener("keyup", function (e) {
    console.log(e);
});
document.querySelector("input").addEventListener("keyup", function (e) {
    if (e.keyCode == 13) {
        console.log(this.e);
    }
});

setTimeout(function () {
    console.log("sfsjdkfl");
}, 2000);
setInterval(function () {
    console.log("sfsjdkfl");
}, 2000);

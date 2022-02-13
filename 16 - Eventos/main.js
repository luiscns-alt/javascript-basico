document.querySelector("#myInput").addEventListener("click", function () {
    console.log("clicado");
});

var myFunc = function () {
    console.log("click");
};

document.querySelector("#myInput").addEventListener("click", myFunc);
document.querySelector("#myInput").removeEventListener("click", myFunc);

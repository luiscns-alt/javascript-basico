var myDiv = document.querySelector("div"),
    myInput = document.querySelector("input");

var myTimeout;

myInput.addEventListener("keyup", function () {
    clearTimeout(myTimeout);
    myTimeout = setTimeout(() => {
        myDiv.textContent = this.value;
    }, 1000);
});

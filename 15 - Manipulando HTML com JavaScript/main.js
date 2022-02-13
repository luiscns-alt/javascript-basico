// document.getElementsByTagName("button");
// document.getElementById("button");
// document.getElementsByClassName("list-item");

// document.querySelector("button");
// document.querySelectorAll("button");

document.querySelectorAll(".list-item");

document.querySelector(".list-item").textContent = "Alterar";
document.querySelector(".list-item").innerHTML = "<b>isdfs</b>";
document.querySelector(".list-item").outerHTML;

document.querySelect("input").remove();
document.createElement("li");

myLi = <li>Oi</li>;
document.querySelector("div");
document.querySelector("div").appendChild(myLi);

document.querySelector(".list-item:first-child");
document
    .querySelector(".list-item:first-child")
    .insertAdjacentHTML("beforebegin", myLi.outerHTML);

document.querySelector(".list-item:first-child");
document
    .querySelector(".list-item:first-child")
    .insertAdjacentHTML("afterend", myLi.outerHTML);

document
    .querySelector("ul")
    .insertBefore(myLi, document.querySelector("ul").firstChild);

document.querySelector("#myInput").cloneNode(true);

document.querySelector("ul");
document.querySelector("ul").children;
var el = document.querySelector("ul").querySelectorAll("li");
el.parentElement;
el.nextElementSibling;
el.previousElementSibling;

// Alterando Valores e Atributos
document.querySelector("#myInput");
document.querySelector("#myInput").getAttribute("type");
document.querySelector("#myInput").setAttribute("type", "number");

document.querySelector("#myInput");
document.querySelector("#myInput").classList;
document.querySelector("#myInput").classList.add("#add");
document.querySelector("#myInput").classList.contains("#add");
document.querySelector("#myInput").classList.toggle("my-input");
document.querySelector("#myInput").style;
document.querySelector("#myInput").style.backgroundColor = "red";

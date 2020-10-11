import firstForm from "./module/first.js";
import secondForm from "./module/second.js";
import thirdForm from "./module/third.js";

loadHeader();
var content = document.getElementById("content");

function loadHeader() {
    var firstCalculation = document.createElement("a");
    var secondCalculation = document.createElement("a");
    var thirdCalculation = document.createElement("a");
    var header = document.getElementById("header");

    firstCalculation.innerHTML = "Calculo IMC";
    firstCalculation.setAttribute("class", "header__a");
    firstCalculation.setAttribute("id", "firstCalculation");
    firstCalculation.setAttribute("href", "#");

    secondCalculation.innerHTML = "Calculo Euro | Dolar";
    secondCalculation.setAttribute("class", "header__a");
    secondCalculation.setAttribute("id", "secondCalculation");
    secondCalculation.setAttribute("href", "#");

    thirdCalculation.innerHTML = "Calculo Remuneración";
    thirdCalculation.setAttribute("class", "header__a");
    thirdCalculation.setAttribute("id", "thirdCalculation");
    thirdCalculation.setAttribute("href", "#");

    header.appendChild(firstCalculation);
    header.appendChild(secondCalculation);
    header.appendChild(thirdCalculation);
};

document.getElementById("firstCalculation").addEventListener("click", function() {
    content.innerHTML = firstForm.form;
    window.calculate = firstForm.calculate;
});

document.getElementById("secondCalculation").addEventListener("click", function() {
    content.innerHTML = secondForm.form;
    window.calculate = secondForm.calculate;
});

document.getElementById("thirdCalculation").addEventListener("click", function() {
    content.innerHTML = thirdForm.form;
    window.calculate = thirdForm.calculate;
    thirdForm.loadAFPs();
});
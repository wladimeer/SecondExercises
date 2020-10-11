export default {
    form: (`
        <div class="content__title">
            <h1 class="content__h1">IMC</h1>
        </div>

        <div class="content__input">
            <label class="content__label">Tu Peso</label>
            <input class="content__input" type="number" id="weight" placeholder="80">
        </div>
        
        <div class="content__input">
            <label class="content__label">Tu Estatura</label>
            <input class="content__input" type="number" id="height" placeholder="1.50">
        </div>

        <div class="content__buttons">
            <button class="content__button" onClick="calculate()">
                Calcular
            </button>
        </div>

        <div class="content__result">
            <p class="content__p" id="result"></p>
        </div>
    `),
    calculate: function() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        var result = document.getElementById("result");
        var include = height.includes(".");
        var error = "";
        
        if(weight == "" && height == "" && !include) {
            error = "Verifica los Campos";
        } else {
            if(weight == "") {
                error = "Verifica el Peso";
            }

            if(height == "" || height < 1.50 || height > 2.20 || !include) {
                error = "Verifica la Estatura";
            }
        }

        if(error == "") {
            var imc = (parseInt(weight) / Math.pow(parseFloat(height), 2)).toFixed(1);
            result.style.color = "green";

            if(imc < 18.5) {
                result.innerHTML = "Bajo Peso | IMC: " + imc;
            } else if(imc >= 18.5 && imc <= 24.9) {
                result.innerHTML = "Normal | IMC: " + imc;
            } else if(imc >= 25.0 && imc <= 29.9) {
                result.innerHTML = "Sobrepeso | IMC: " + imc;
            } else if(imc >= 30.0) {
                result.innerHTML = "Obesidad | IMC: " + imc;
            }
        } else {
            result.style.color = "red";
            result.innerHTML = error;
        }
    }
};
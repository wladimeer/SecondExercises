export default {
    form: (`
        <div class="content__title">
            <h1 class="content__h1">Calculo Remuneración</h1>
        </div>

        <div class="content__inputs">
            <label class="content__label">Sueldo Base</label>
            <input class="content__input" type="number" id="salary" placeholder="300000">
        </div>

        <div class="content__radios">
            <input class="content__radio" value="7" type="radio" id="fonasa" name="type">Fonasa
            <input class="content__radio" value="13" type="radio" id="isapre" name="type">Isapre
        </div>

        <select class="content__select" id="select"></select>

        <div class="content__buttons">
            <button class="content__button" onClick="calculate()">
                Resultado
            </button>
        </div>

        <div class="content__result">
            <p class="content__p" id="result"></p>
        </div>
    `),
    calculate: function() {
        var salary = document.getElementById("salary").value;
        var health = document.getElementsByName("type");
        var result = document.getElementById("result");
        var afp = document.getElementById("select");
        var unselected = 0;
        var selected = "";
        var error = "";
        var count = 0;

        health.forEach(item => {
            if(item.checked) {
                selected = item.value;
            } else {
                unselected++;
            }

            count++;

            if(count == health.length) {
                if((salary == "" || salary < 1) && afp.value == "" && unselected == health.length) {
                    error = "Verifica los Campos";
                } else {
                    if(salary == "" || salary < 1) {
                        error = "Verifica el Sueldo" + "<br>";
                    }
                    
                    if(afp.value == "") {
                        error += "Selecciona una AFP" + "<br>";
                    }
        
                    if(unselected == health.length) {
                        error += "Selecciona un Tipo de Salud";
                    }
                }
            }
        }); 

        if(error == "") {
            var discountHealth = ((salary * selected) / 100);
            var discountAFP = ((salary * afp.value) / 100);
            var total = (salary - (discountHealth + discountAFP));
 
            result.innerHTML = (
                "Sueldo Final: $" + total + "<br>" +
                "Total Descuento: $" + (discountAFP + discountHealth)
            );
            result.style.color = "green";
        } else {
            result.innerHTML = error;
            result.style.color = "red";
        }
    },
    loadAFPs: function() {
        var select = document.getElementById("select");
        var array = [
            {name: "Seleccione", value: ""}, 
            {name: "Habitat", value: 13}, 
            {name: "Provida", value: 12}, 
            {name: "Modelo", value: 11}
        ];

        array.forEach(item => {
            var option = document.createElement("option");
            option.setAttribute("label", item.name);
            option.setAttribute("value", item.value);

            select.appendChild(option);
        });
    }
};
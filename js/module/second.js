export default {
    form: (`
        <div class="content__title">
            <h1 class="content__h1">Calculo Euro|Dolar</h1>
        </div>

        <div class="content__inputs">
            <label class="content__label">Cantidad en Pesos Chilenos</label>
            <input class="content__input" type="number" id="coin" placeholder="1000">
        </div>

        <div class="content__radios">
            <input class="content__radio" type="radio" id="euro" name="type">Convertir a Euros
            <input class="content__radio" type="radio" id="dolar" name="type">Convertir a Dolares
        </div>

        <div class="content__buttons">
            <button class="content__button" onClick="calculate()">
                Convertir
            </button>
        </div>

        <div class="content__result">
            <p class="content__p" id="result"></p>
        </div>
    `),
    calculate: function() {
        var coin = document.getElementById("coin").value;
        var result = document.getElementById("result");
        var type = document.getElementsByName("type");
        var message = "";
        var error = "";
        var count = 0;

        type.forEach(item => {
            if(!item.checked) {
                count++;
            }

            if((coin == "" || coin < 1) && count == 2) {
                error = "Verifica los Campos";
            } else {
                if(coin == "") {
                    error = "Verifica los Pesos Ingresados";
                }

                if(count == 2) {
                    error = "Selecciona una Conversión";
                } else if(item.checked) {
                    if(item.id == "dolar") {
                        var total = (coin / 850);
                        message = "Pesos Chilenos a Dolares: $" + total.toFixed(2);
                    } else {
                        var total = (coin / 930);
                        message = "Pesos Chilenos a Euros: €" + total.toFixed(2);
                    }
                }
            }
        });

        if(error == "") {
            result.innerHTML = message;
            result.style.color = "green";
        } else {
            result.innerHTML = error;
            result.style.color = "red";
        }
    }
};
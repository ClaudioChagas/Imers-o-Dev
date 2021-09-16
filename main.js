
function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
    
    var valorEmReal = valorEmDolarNumerico * 5;
    console.log(valorEmReal);

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em real é r$ " + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;

}

function Converter1() {
    var valorElement = document.getElementById("valor");
    var valor = valorElement.value;
    var valorEmDolar = parseFloat(valor);

    var valorEmEuro = valorEmDolar * 0.85;
    console.log(valorEmEuro);

    var valorConvertidoInicial = document.getElementById("ValorConvertidoEuro");
    var ValorConvertidoEuro = "O resultado em Euro é R$ " + valorEmEuro;
    valorConvertidoInicial.innerHTML = ValorConvertidoEuro;
}
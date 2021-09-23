
// escolhendo as cartas e seus atributos 

var carta1 = {
    
    nome: "personagem1" , 
    atributos: {
        ataque: 7,
        defesa: 6,
        poder: 4
    }
};

var carta2 = {
    
    nome: "personagem2" , 
    atributos: {
        ataque: 10,
        defesa: 5,
        poder: 7
    }
};

var carta3 = {
    
    nome: "personagem3" , 
    atributos: {
        ataque: 4,
        defesa: 9,
        poder: 8
    }
};

var cartas = [carta1, carta2, carta3];
var cartaMaquina = 0;
var cartaJogador = 0;

function sortearCarta() {
   
    var numeroCartaMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[numeroCartaMaquina];

    var numeroCartaJogador = parseInt(Math.random() * 3);
    while (numeroCartaMaquina == numeroCartaJogador) {
        numeroCartaJogador = parseInt(Math.random() * 3);
    }  
    
    cartaJogador = cartas[numeroCartaJogador];

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;

    exibirOpcoes()
}

function exibirOpcoes() {
    var opcoes = document.getElementById("opcoes");
    var opcoesTexto = "";
    
    for (var atributo in cartaJogador.atributos) {
        opcoesTexto 
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo;
    }

    opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");
  
    for (var i = 0; i < radioAtributos.length; i++) {
      if (radioAtributos[i].checked == true) {
        return radioAtributos[i].value;
      }
    }
  }
  
  function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var elementoResultado = document.getElementById("resultado");
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  
    if (valorCartaJogador > valorCartaMaquina) {
      elementoResultado.innerHTML = "Você venceu";
    } else if (valorCartaMaquina > valorCartaJogador) {
      elementoResultado.innerHTML = "Você perdeu, a carta da máquina é maior";
    } else {
      elementoResultado.innerHTML = "Empatou";
    }
    console.log(cartaMaquina);
  }
  
var calculadora ={

  visor: document.getElementById("display"),
  valorVisor: "0",
  operacion:"",
  primerValor: 0,
  segundoValor: 0,
  ultimoValor: 0,
  resultado: 0,
  auxTeclaIgual: false, //Para permitir ingreso consecutivo

  init: (function(){
    this.asignarEventosFormatoBotones(".tecla");
    this.asignarEventosaFuncion();
  }),
  //Eventos de formato de asignarEventosFormatoBotones
  asignarEventosFormatoBotones: function(selector){
    var x = document.querySelectorAll(selector);
    for (var i = 0; i < x.length; i++) {
      x[i].onmouseover = this.eventoAchicaBoton;
      x[i].onmouseleave = this.eventoVuelveBoton;
    };
  },

  eventoAchicaBoton: function(event){
    calculadora.AchicaBoton(event.target);
  },

  //Formato de Botones
  AchicaBoton: function(elemento){
    var x = elemento.id;
    if (x=="1" || x=="2" || x=="3" || x=="0" || x=="igual" || x=="punto"){
      elemento.style.width ="28%";
      elemento.style.height = "62px";
    }else if(x=="mas"){
      elemento.style.width = "88%";
      elemento.style.height = "98%";
    }else{
      elemento.style.width = "21%";
      elemento.style.height = "62px";
    }
  },
  AumentaBoton: function(elemento){
    var x = elemento.id;
    if (x=="1" || x=="2" || x=="3" || x=="0" || x=="igual" || x=="punto"){
      elemento.style.width ="29%";
      elemento.style.height = "62.91px";
    }else if(x=="mas"){
      elemento.style.width = "90%";
      elemento.style.height = "100%";
    }else{
      elemento.style.width = "22%";
      elemento.style.height = "62.91px";
    }
  },

  //Eventos de funcion calculadora
  asignarEventosaFuncion: function(){
    document.getElementById("0").addEventListener("click", function() {calculadora.ingresoNumero("0");});
    document.getElementById("1").addEventListener("click", function() {calculadora.ingresoNumero("1");});
    document.getElementById("2").addEventListener("click", function() {calculadora.ingresoNumero("2");});
    document.getElementById("3").addEventListener("click", function() {calculadora.ingresoNumero("3");});
    document.getElementById("4").addEventListener("click", function() {calculadora.ingresoNumero("4");});
    document.getElementById("5").addEventListener("click", function() {calculadora.ingresoNumero("5");});
    document.getElementById("6").addEventListener("click", function() {calculadora.ingresoNumero("6");});
    document.getElementById("7").addEventListener("click", function() {calculadora.ingresoNumero("7");});
    document.getElementById("8").addEventListener("click", function() {calculadora.ingresoNumero("8");});
    document.getElementById("9").addEventListener("click", function() {calculadora.ingresoNumero("9");});
    document.getElementById("on").addEventListener("click", function() {calculadora.borrarVisor();});
    document.getElementById("sign").addEventListener("click", function() {calculadora.cambiarSigno();});
    document.getElementById("punto").addEventListener("click", function() {calculadora.ingresoDecimal();});
    document.getElementById("igual").addEventListener("click", function() {calculadora.verResultado();});
    document.getElementById("raiz").addEventListener("click", function() {calculadora.ingresoOperacion("raiz");});
    document.getElementById("dividido").addEventListener("click", function() {calculadora.ingresoOperacion("/");});
    document.getElementById("por").addEventListener("click", function() {calculadora.ingresoOperacion("*");});
    document.getElementById("menos").addEventListener("click", function() {calculadora.ingresoOperacion("-");});
    document.getElementById("mas").addEventListener("click", function() {calculadora.ingresoOperacion("+");});
  },
}

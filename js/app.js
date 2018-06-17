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

  //Funcion de teclas de calculadora
  borrarVisor: function(){
    this.valorVisor = "0";
    this.operacion = "";
    this.primerValor = 0;
    this.segundoValor = 0;
    this.resultado = 0;
    this.Operación = "";
    this.auxTeclaIgual = false;
    this.ultimoValor = 0;
    this.updateVisor();
  },

  cambiarSigno: function(){
    if (this.valorVisor !="0") {
      var aux;
      if (this.valorVisor.charAt(0)=="-") {
        aux = this.valorVisor.slice(1);
      }else {
        aux = "-" + this.valorVisor;
      }
    this.valorVisor = "";
    this.valorVisor = aux;
    this.updateVisor();
  },

  ingresoDecimal: function(){
    if (this.valorVisor.indexOf(".")== -1){
      if (this.valorVisor ==""){
        this.valorVisor = this.valorVisor + "0.";
      }else{
        this.valorVisor = this.valorVisor + ".";
      }
      this.updateVisor();
    }
  },

  ingresoOperacion: function(oper){
    this.primerValor = parseFloat(this.valorVisor);
    this.valorVisor = "";
    this.operacion = oper;
    this.auxTeclaIgual = false;
    this.updateVisor();
  },

  verResultado: function(){ //tecla igual
    if (!this.auxTeclaIgual){ //primera vez que presion tecla igual
      this.segundoValor = parseFloat(this.valorVisor);
      this.ultimoValor = this.segundoValor;
      //calcular verResultado
      this.realizarOperacion(this.primerValor, this.segundoValor, this.operacion);
    }else{ //otras veces que presione la tecla igual
      //calculo del Resultado
      this.realizarOperacion(this.primerValor, this.ultimoValor, this.operacion);
    }
    //almecena resultado como primer valor para seguir con las operaciones
    this.primerValor = this.resultado;
    //borrar visor y remplazar por el Resultado
    this.valorVisor = "";
    //verifica el largo del resultado para acortar si es necesario
    if (this.resultado.toString().length < 9){
      this.valorVisor = this.resultado.toString();
    }else{
      this.valorVisor = this.resultado.toString().slice(0.8) + "...";
    }
    //auxiliar para indicar si ya se presiono la tecla igual, para calcular sobre el ultimo valorVisor
    this.auxTeclaIgual = true;
    this.updateVisor();
  },
  realizarOperacion: function(primerValor, segundoValor, operacion){
    switch (operacion){
      case "+":
        this.resultado = eval(primerValor + segundoValor);
      break;
      case "-":
        this.resultado = eval(primerValor - segundoValor);
      break;
      case "*":
        this.resultado = eval(primerValor * segundoValor);
      break;
      case "/":
        this.resultado = eval(primerValor / segundoValor);
      break;
      case "raiz":
        this.resultado = eval(math.sqrt(primerValor));
    }
  },
  updateVisor: function(){
    this.visor.innerHTML = this.valorVisor;
  }
};
calculadora.init();

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
}

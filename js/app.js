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

  
}

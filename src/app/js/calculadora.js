let tema = document.querySelector("body");
let dimencion = document.querySelectorAll("input[name=dimencion-circulo]");
let mostrar_resultados = document.getElementById("mostrar_resultados");
let panel_principal = document.querySelector(".panel-principal");
let button = document.querySelectorAll("button");
let reset = document.querySelector(".button-reset");
let del = document.querySelector(".button-del");
let equal = document.querySelector(".button-equal");
let texto1 = document.querySelector(".titulo-calculadora");
let texto2 = document.querySelector(".titulo-tema");
let texto3 = document.querySelectorAll(".numero");
let banner = document.querySelector(".movimiento-boton");
let circulo1 = document.querySelector(".circulo-1");
let circulo2 = document.querySelector(".circulo-2");
let circulo3 = document.querySelector(".circulo-3");


// theme section

dimencion.forEach((radioBtn) => {
  radioBtn.addEventListener("click", () => {

    if (radioBtn.value === "first") {
      tema.style.backgroundColor = "hsl(222, 26%, 31%)";
      mostrar_resultados.style.backgroundColor = "#252d44";
      mostrar_resultados.style.color = "#fff";
      panel_principal.style.backgroundColor = "#252d44";
      banner.style.backgroundColor = "#182034";
      button.forEach((btn) => {
        btn.style.backgroundColor = "#eae3db";
        btn.style.boxShadow = "0 8px 0 #B2A499";
        btn.style.color = "#181f32";
      });
      reset.style.backgroundColor = "#647299";
      reset.style.color = "#fff";
      reset.style.boxShadow = "0 8px 0 #414e71";
      del.style.backgroundColor = "#647299";
      del.style.color = "#fff";
      del.style.boxShadow = "0 8px 0  #414e71";
      equal.style.backgroundColor = "#d43e29";
      equal.style.color = "#fff";
      equal.style.boxShadow = "0 8px 0 #932316";
      texto1.style.color = "#fff";
      texto2.style.color = "#fff";
      texto3.forEach((txt) => {
        txt.style.color = "#fff";
      });
      circulo1.style.backgroundColor = "hsl(6, 63%, 50%)";
    } else 
    
    if (radioBtn.value === "second") {
      tema.style.backgroundColor = "#E6E6E6";
      mostrar_resultados.style.backgroundColor = "#EEEEEE";
      mostrar_resultados.style.color = "#000";
      panel_principal.style.backgroundColor = "#D3CDCD";
      banner.style.backgroundColor = "#D3CDCD";
      button.forEach((btn) => {
        btn.style.backgroundColor = "hsl(48, 9%, 89%)";
        btn.style.color = "#35352b";
        btn.style.boxShadow = "0 8px 0 #B2A499";
      });
      reset.style.boxShadow = "0 8px 0 #327479";
      reset.style.backgroundColor = "#388187";
      reset.style.color = "#fff";
      del.style.backgroundColor = "#388187";
      del.style.color = "#fff";
      del.style.boxShadow = "0 8px 0 #327479";
      equal.style.backgroundColor = "#c85401";
      equal.style.color = "#fff";
      equal.style.boxShadow = "0 8px 0 #B44B00";
      texto1.style.color = "#000";
      texto2.style.color = "#000";
      texto3.forEach((txt) => {
        txt.style.color = "#000";
      });
      circulo2.style.backgroundColor = "hsl(6, 63%, 50%)";
    } else 
    
    if (radioBtn.value === "third") {
      tema.style.backgroundColor = "#17062a";
      mostrar_resultados.style.backgroundColor = "#1e0836";
      mostrar_resultados.style.color = "#f6da44";
      banner.style.backgroundColor = "#1e0934";
      panel_principal.style.backgroundColor = "#1e0934";
      button.forEach((btn) => {
          btn.style.backgroundColor = "#331d4d";
          btn.style.boxShadow = "0 8px 0 #53087d";
          btn.style.color = "#f6da44";
      });
      reset.style.backgroundColor = "#53087d";
      reset.style.color = "#fff";
      reset.style.boxShadow = "0 8px 0 #4A0770";
      del.style.backgroundColor = "#53087d";
      del.style.color = "#fff";
      del.style.boxShadow = "0 8px 0 #4A0770";
      equal.style.backgroundColor = "#00dfcf";
      equal.style.color = "#000";
      equal.style.boxShadow = "0 8px 0 #00C8BA";
      texto1.style.color = "#f6da44";
      texto2.style.color = "#f6da44";
      texto3.forEach((txt) => {
        txt.style.color = "#f6da44";
      });
      circulo3.style.backgroundColor = "#00dfcf";
    }
  });
});

dimencion.forEach((rb) => {
  rb.addEventListener("");
});


//obtener los numeros
function numero(num , x ){
  var result = document.getElementById("mostrar_resultados");
  result.value += num; 
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
}

//obtener resultado
function resultado(){
  var result = document.getElementById("mostrar_resultados");
  result.value = eval(result.value);
}

//Limpiar resultado
function limpia_resultado(){
   var result = document.getElementById("mostrar_resultados");   
   result.value= "";
}

//Borrar numero
function borra_numero(){
  var number = document.getElementById("mostrar_resultados");   
  var remove = number.value;
  remove=remove.slice(0,-1); //elimina el ultimo caracter 
  number.value = remove;
}

//separador de miles

function numeroConCommas(x) { 
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }


    //DECIMAL
    const decimal = document.getElementById("decimal");

    decimal.addEventListener("click", () => {
      const currentValueStr = getValueAsStr();
      if (!currentValueStr.includes(".")) {
        setStrAsValue(currentValueStr + ".");
      }
    });
/*Cotizador */

const form = document.getElementById("form");


const cotizarSeguro=()=>{
    let marca=document.querySelector("#marca").value;
    let modelo=document.querySelector("#modelo").value;
    let year=document.querySelector("#year").value;
    let basico=document.querySelector("#basico");
    let completo=document.querySelector("#completo");

    let divResumen=document.querySelector("#resumen");
    let divResultado=document.querySelector("#resultado");

    let plan="";

    if(basico.checked){
        plan="basico";
    }else if(completo.checked){
        plan="completo";
    }

    if(marca ==='' || modelo==='' || year==='' || plan===''){
        mostrarError("#msj-error-cotizador","Falta Seleccionar Opciones");
        return;
    }

    let cotizacion =(marca, modelo,year,plan);
    document.querySelector("#msj").style.display="none";

    divResumen.style.backgroundColor="#FFF"
    divResumen.style.display="block";

    divResumen.innerHTML='<div style="text-aling:center"> <img src="cargando.gif" width=300 height=300></div>';
    
    setTimeout(()=>{
        divResumen.style.backgroundColor="#00838F";
        divResumen.innerHTML='<h2>Resumen de Cotizacion</h2><ul><li>Marca: ${marca}</li><li>Modelo: ${modelo}</li> <li>Plan: ${plan}</li> <li>Año: ${year}</li></ul>';
    },3000);
   
}

const mostrarError=(elemento,mensaje)=>{
    divError=document.querySelector(elemento);
    divError.innerHTML='<p class="alerta alert-danger-error">${mensaje}</p>';
    setTimeout(() => {
      divError.innerHTML='';  
    }, 2000);
}



form.addEventListener("submit", e=>{
    e.preventDefault()

    cotizarSeguro();
});
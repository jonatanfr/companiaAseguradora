/*login de usuario import{}from "./registro"; */


const emailLog= document.getElementById("emailLogin");
const passLog= document.getElementById("passwordLog");
const parrafo = document.getElementById("warningsLogin");
const form = document.getElementById("form");
const listaInputs = document.querySelectorAll("campo");




form.addEventListener("submit",e =>{
    e.preventDefault()
    validacionForm();
    enviarFormulario();
})


function validacionForm(){
    
    let warningsLogin = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    listaInputs.forEach((element) => {
        element.lastElementChild.innerHTML = "";
    });

   
    
    if(!regexEmail.test(emailLog.value)){
        
        warningsLogin += '* Debe ingresar un email </br>'
        entrar = true;
        console.log('no es mail');
    }
  
    if(passLog.value.length<8){

        warningsLogin += '* La contraseña debe ser mayor de 8 digito </br>'
        entrar = true;
        console.log('no es pass');
    }

    if(entrar){
        parrafo.innerHTML = warningsLogin;
        warningsLogin += 'SE HA REGISTRADO CORRECTAMENTE! </br>'
    }else{
      
        warningsLogin += 'BIENVENIDO! </br>'
            parrafo.innerHTML = warningsLogin;
   
        
    }

    return entrar;
}

function enviarFormulario(){
    form.reset();
    
}





  /*
    let condicion = validacionForm();

    if(!condicion){
        enviarFormulario();
    }
    */


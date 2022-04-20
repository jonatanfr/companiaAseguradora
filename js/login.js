/*login de usuario*/
import{}from "./registro";

const emailLog= document.getElementById("emailLogin");
const passLog= document.getElementById("passwordLog");
const parrafo = document.getElementById("warningsLogin");


form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar =false;
    
    if(!usuario1.buscarUsuario(emailLog)){
        warnings += '* Usted no es usuario, debe Registrarse </br>'
        entrar = true;
    }

    if(entrar){
        parrafo.innerHTML = warnings;
    }else{
        warnings += '* Bienvenido </br>'
        parrafo.innerHTML = warnings;
    }
})


  


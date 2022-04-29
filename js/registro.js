
/*Registro de usuario*/



const nombre = document.getElementById("name");
const email= document.getElementById("email");
const pass= document.getElementById("password");
const tel= document.getElementById("telefono");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");
const botonSubmit = document.getElementById("botonPrincipal");
const listaInputs = document.querySelectorAll("campo");
const listaDeUsuarios = [];




class Usuario {

    constructor(nombre,email,telefono,password){
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        this.password = password;
    }

   

   

}

    

    const usuario1 = new Usuario(nombre,email,tel,pass);

    const existeUsuario = () =>{
        let i=0;
        let existe = false;
        let usu = new Usuario(nombre.value,email.value,tel.value,pass.value);
        

        while(i<listaDeUsuarios.length || existe==false ){
           
            if(listaDeUsuarios.includes(usu)){
                existe=true; 
                console.log('existe usuario');
            }else{
                existe=false;
                i++;
            }
        }
        return existe;
    }
     const agregarUsuario = () =>{
        let usu = new Usuario(nombre.value,email.value,tel.value,pass.value);
        listaDeUsuarios.push(usu);
     }




     form.addEventListener("submit", e=>{
        e.preventDefault()
        
        let condicion = validacionForm();
    
        if(!condicion){
            enviarFormulario();
        }
       
    
    })


function validacionForm(){
    
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    listaInputs.forEach((element) => {
        element.lastElementChild.innerHTML = "";
    });

    if(nombre.value.length < 4){
        
        warnings += '* Debe ingresar un nombre </br>'
        entrar = true;
        
    }
    
    if(!regexEmail.test(email.value)){
        
        warnings += '* Debe ingresar un email </br>'
        entrar = true;
        console.log('no es mail');
    }
    if(tel.value.length < 10){
        
        warnings += '* Debe ingresar un telefono </br>'
        entrar = true;
        
    }
    if(pass.value.length<8){

        warnings += '* La contraseña debe ser mayor de 8 digito </br>'
        entrar = true;
        console.log('no es pass');
    }

    if(entrar){
        parrafo.innerHTML = warnings;
    }else{
       
            agregarUsuario();
            warnings += 'SE HA REGISTRADO CORRECTAMENTE! </br>'
            parrafo.innerHTML = warnings;
            console.log('Se agrego usuario');
            console.log(listaDeUsuarios);
        
        
    }

    return entrar;
}

function enviarFormulario(){
    form.reset();
    
}




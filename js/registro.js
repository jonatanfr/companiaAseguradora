
/*Registro de usuario*/



const nombre = document.getElementById("name");
const email= document.getElementById("email");
const pass= document.getElementById("password");
const tel= document.getElementById("telefono");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");
const listaDeUsuarios = [];



class Usuario {

    constructor(nombre,email,telefono,password){
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        this.password = password;
    }

    esEmail(){

        form.addEventListener("submit", e=>{
            e.preventDefault()
            let warning = ""
            let entrar =false;
            let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

            if(!regexEmail.test(email.value)){
        
                warning += '* Debe ingresar un email </br>'
                entrar = true;
                
            }
            
            if(entrar){
                parrafo.innerHTML = warning;
            }
        })
    }

    esPassword(){

        form.addEventListener("submit", e=>{
            e.preventDefault()
            let warning = ""
            let entrar =false;
            

            if(pass.value.length<8){

                warning += '* La contraseña debe ser mayor de 8 digito </br>'
                entrar = true;
               
            }
        
            if(entrar){
                parrafo.innerHTML = warning;
            }
        })
    }

    buscarUsuario(){
        let existe=false;
        let i = 0;
        
    
        while(i<listaDeUsuarios.length || existe==false ){
    
            
    
            if(listaDeUsuarios.includes(email)){
                existe=true; 
                console.log('existe usuario');
            }else{
                existe=false;
                i++;
            }
    
        }
    
        return existe;
    }

}


const usuario1 = new Usuario(nombre,email,tel,pass);




    form.addEventListener("submit", e=>{
        e.preventDefault()
        let warnings = ""
        let entrar =false;
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
        

        if(nombre.value.length < 6){
            
            warnings += '* Debe ingresar un nombre </br>'
            entrar = true;
            
        }
        
        if(!regexEmail.test(email.value)){
            
            warnings += '* Debe ingresar un email </br>'
            entrar = true;
            
        }
        if(tel.value.length < 10){
            
            warnings += '* Debe ingresar un telefono </br>'
            entrar = true;
            
        }
        if(pass.value.length<8){

            warnings += '* La contraseña debe ser mayor de 8 digito </br>'
            entrar = true;
        
        }

        if(entrar){
            parrafo.innerHTML = warnings;
        }else{
            
            if(!usuario1.buscarUsuario()){
                listaDeUsuarios.push(usuario1);
            }else{
                warnings += '* Ese Email ya esta registrado. </br>'
                console.log('existe usuario con este mail');
            }
             

        }
    })

   
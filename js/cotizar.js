
/*
ENTIDADES
*/


class Cotizador {

    constructor(marca, modelo, year, plan) {
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
        this.plan = plan;
    }


}

/*
VARIABLES
*/

let listaDeCotizaciones = [];
const btnCotizar = document.getElementById("btnCotizar");
const btnPrincipal = document.querySelector(".botonPrincipal");
const form = document.getElementById("form");
let divResumen = document.querySelector("#resumen");
let divResultado = document.querySelector("#resultado");
let imagenLoading = document.querySelector(".imgLoading");
const infoPlanes = document.querySelector(".infoPlanes");
const btnMisCotizaciones = document.getElementById("btnMisCotizaciones");
const listacotizacion = document.getElementById("tabla");
const btnConfirmar = document.getElementById("btnConfirmar");



/*
FUNCIONES
*/


const crearCotizacion = () => {

    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const year = document.getElementById('year').value;
    const plan = document.getElementById('plan').value;

    if(marca != "" && modelo !="" && year !="" && plan !=""){
    const nuevaCotizacion = new Cotizador(marca, modelo, year, plan);
    
    let listaNueva = [];

    if (localStorage.getItem("Cotizaciones") != null) {
        listaNueva = JSON.parse(localStorage.getItem("Cotizaciones"));
        listaNueva.push(nuevaCotizacion);
        localStorage.setItem("Cotizaciones", JSON.stringify(listaNueva));
    } else {
        listaDeCotizaciones.push(nuevaCotizacion);
        localStorage.setItem("Cotizaciones", JSON.stringify(listaDeCotizaciones));
        console.log(listaDeCotizaciones);
    }

    return nuevaCotizacion;
}
}


const obtenerPlan = (plan) => {
    return (plan === 'basico') ? 1.20 : 1.50;
}


const calcularMarca = (marca) => {

    let incremento;


    if (marca = "Chevrolet") {
        incremento = 1.20;
    } else if (marca = "Citroen") {
        incremento = 1.50;
    } else if (marca = "Ford") {
        incremento = 1.30;
    } else if (marca = "Peugeot") {
        incremento = 1.60;
    } else if (marca = "Volkswagen") {
        incremento = 1.20;
    };



    return incremento;

}

const calcularModelo = (modelo) => {

    let incremento;



    if (modelo = "Cruze") {
        incremento = 1.50;
    } else if (modelo = "Ds3") {
        incremento = 1.30;
    } else if (modelo = "Focus") {
        incremento = 1.50;
    } else if (modelo = "208") {
        incremento = 1.20;
    } else if (modelo = "Vento") {
        incremento = 1.60;
    };



    return incremento;

}


const diferencia = (year) => {

    const actual = new Date().getFullYear() - year;

    return actual;
}



function enviarFormulario() {
    form.reset();
    ;
}

const cotizar = (marca, modelo, year, plan) => {

    let resultado = 7000;

    resultado = calcularMarca(marca) * resultado;
    resultado = calcularModelo(modelo) * resultado;
    resultado = obtenerPlan(plan) * resultado;
    resultado = resultado - (((diferencia(year) * 3) * resultado) / 100);

    return resultado;

}




const verficarStorage = () => {
    let lista = [];
    if (localStorage.getItem("Cotizaciones") != null) {

        lista = JSON.parse(localStorage.getItem("Cotizaciones"));
        return lista;
    }
}



const guardar = () => {

    crearCotizacion();
    if (verficarStorage() != undefined) {
        localStorage.setItem("Cotizaciones", JSON.stringify(verficarStorage()));
    } else {

        localStorage.setItem("Cotizaciones", JSON.stringify(listaDeCotizaciones));
    }

    

}

const botonCotizar = (marca,modelo,year,plan) => {

    setTimeout(() => {

        if(marca != "" && modelo !="" && year !="" && plan !=""){

            setTimeout(() => {
                swal({
                    title: "Excelente!",
                    text: "La cotización ha sido generada con exito!",
                    icon: "success",
                  });
            },3000);

        }else{
            setTimeout(() => {
            swal({
                title: "Error",
                text: "Debe completar todos los items para poder cotizar!",
                icon: "warning",
                
              })

        },3000);
        }
        
        
    },500)

}

const eliminarCotizacion = (number) => {
    let listaVieja = JSON.parse(localStorage.getItem("Cotizaciones"));
    let listaFiltrada = listaVieja.filter((obj, index) => index !== number);
    localStorage.setItem("Cotizaciones", JSON.stringify(listaFiltrada));
    location.reload();
}

const cotizacionTotal = () => {
    let total=0;
    let precio =0;
   let itemCotiTotal = document.querySelector('.itemCotizacionTotal');

    verficarStorage().forEach((obj) =>{
       
        precio =cotizar(obj.marca, obj.modelo, obj.year, obj.plan);
      
        total = total + precio;
        
    })
    
    itemCotiTotal.innerHTML = 'Total: $'+total;
    
}


const imprimirDatos = () => {

    if (verficarStorage() != undefined) {
        let totalCotizacion;
        verficarStorage().forEach((obj, index) => {
            totalCotizacion = 0;
            totalCotizacion = cotizar(obj.marca, obj.modelo, obj.year, obj.plan);
            document.getElementById("tabla").innerHTML += `
            <tr>
                <td>${obj.marca}</td>
                <td>${obj.modelo}</td>
                <td>${obj.year}</td>
                <td>${obj.plan}</td>
                <td>${totalCotizacion}</td>
                <td><button class="borrarCotizacion" onclick=eliminarCotizacion(${index})>X</button></td>
            </tr>
        `
            totalCotizacion = 0;
            
        })
        cotizacionTotal();
    }
    
}
const botonConfirmar = () => {
    setTimeout(() => {

        swal({
            title: "Está seguro de confirmar?",
           
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Bienvenido a Confidence! En la brevedad un operador se contactará con usted!", {
                icon: "success",
              });
              setTimeout(()=> {
               
                location.reload();
              },3000)
            } else {
              swal("Sus cotizaciones seran eliminadas!");
              setTimeout(()=> {
                localStorage.clear();
                location.reload();
              },2000)
              
            }
          });
        
    },500)
}



/*
EVENTOS
*/


form.addEventListener('submit', function () {
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const year = document.getElementById('year').value;
    const plan = document.getElementById('plan').value;

   
    guardar();
    cotizar(marca, modelo, year, plan);
    enviarFormulario(); 
    imprimirDatos();
})
imprimirDatos();


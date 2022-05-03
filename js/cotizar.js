/*Cotizador*/

class Cotizador {

    constructor(marca,modelo,year,plan){
        this.marca =marca;
        this.modelo = modelo;
        this.year = year;
        this.plan = plan;
    }
}



let listaDeCotizaciones = [];
let btnCotizar = document.getElementById("btnCotizar");
const form = document.getElementById("form");
let divResumen=document.querySelector("#resumen");
let divResultado=document.querySelector("#resultado");
let imagenLoading = document.querySelector(".imgLoading");





/*
'<h2>Resumen de Cotizacion</h2><ul><li>Marca: ${marca}</li><li>Modelo: ${modelo}</li> <li>Plan: ${plan}</li> <li>Año: ${year}</li></ul>';
},3000);
*/
form.addEventListener('submit',function (e){
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const year = document.getElementById('year').value;
    const plan = document.getElementById('plan').value;
    
    const nuevaCotizacion= new Cotizador(marca,modelo,year,plan);
    
    e.preventDefault();
    /* de aca*/
    
    
const crearCotizacion = () => {
    
   
    

    let listaNueva =[];

    if(localStorage.getItem("Cotizaciones") != null) {
        listaNueva = JSON.parse(localStorage.getItem("Cotizaciones"));
        listaNueva.push(nuevaCotizacion);
        localStorage.setItem("Cotizaciones",JSON.stringify(listaNueva));
    }else{
        listaDeCotizaciones.push(nuevaCotizacion);
        localStorage.setItem("Cotizaciones",JSON.stringify(listaDeCotizaciones));
        console.log(listaDeCotizaciones);
    }
    listaDeCotizaciones.push(nuevaCotizacion);
    return nuevaCotizacion;
}

const verficarStorage = () => {
    let lista =[];
    if(localStorage.getItem("Cotizaciones") != null){

        lista = JSON.parse(localStorage.getItem("Cotizaciones"));
        return lista;
        }
    }

const guardar = () => {
    crearCotizacion();
    if (verficarStorage() != undefined){
        localStorage.setItem("Cotizaciones",JSON.stringify(verficarStorage()));
    }else{
        localStorage.setItem("Cotizaciones", JSON.stringify(listaDeCotizaciones));
    }
}

function enviarFormulario(){
    form.reset();
    
}

const mostrarResumen = () => {
    
    document.querySelector("#msj").style.display="none";

divResumen.style.backgroundColor="#1f272b";
divResumen.style.display="block";
imagenLoading.style.display="block";
divResumen.style.margin="60px";
divResumen.style.marginLeft="0px";

setTimeout(()=>{
   
    imagenLoading.style.display="none";
    divResumen.style.backgroundColor="rgba(235,228,228,0.034)";
    
    divResumen.style.borderRadius="8px";
    divResumen.style.position="absolute";
    divResumen.style.width="min(60rem,77%)";
    divResumen.style.height="230px";
    divResumen.style.display="block";
    divResumen.style.marginRight="440px";

    let cotizacionFinal = cotizar(nuevaCotizacion);

    divResumen.innerHTML = '<h3> Resumen de cotización </H3> <ul> <li>Marca: '+ marca +'</li><li>Modelo: '+modelo+'</li> <li>Año: '+year+'</li> <li>Plan: '+plan+'</li><li>Total: $'+cotizacionFinal+'</li></ul>';

    

},3000);



}

const cotizar=(nuevaCotizacion) =>{
    let marca = nuevaCotizacion.marca;
    let modelo = nuevaCotizacion.modelo;
    let year = nuevaCotizacion.year;
    let plan =nuevaCotizacion.plan;
    let resultado = 7000;

    const diferenciaYear = diferencia(year);
    
    resultado = calcularMarca()*resultado;
    resultado = calcularModelo()*resultado;
    resultado-=((diferenciaYear*3)*resultado)/100;

    return resultado;
    
}

const obtenerPlan=(plan)=>{
    return (plan==='basico')?1.20:1.50;
}

const calcularModelo=(modelo)=>{
    let incremento;

    switch(modelo){
        case 'Cruze': incremento=1.50;
        break;
        case 'Ds3': incremento=1.30;
        break;
        case'Focus': incremento=1.50;
        break;
        case'208': incremento=1.20;
        break;
        case'Vento':incremento=1.60;
    }
     return incremento;

}
const calcularMarca=(marca)=>{
let incremento;

    switch(marca){
        case 'Chevrolet': incremento=1.20;
        break;
        case'Citroen': incremento=1.50;
        break;
        case'Ford': incremento=1.30;
        break;
        case'Peugeot': incremento=1.60;
        break;
        case'Volkswagen':incremento=1.20;
    }
     return incremento;

    
}

const diferencia=(year)=>{
    return new Date().getFullYear()-year;
}


    /*hasta aca*/
    guardar();
    enviarFormulario();
    mostrarResumen();

    
})







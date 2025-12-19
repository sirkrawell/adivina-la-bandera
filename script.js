class Pais {
    constructor(nombre,id,adivinado,url) {
        this.nombre = nombre
        this.id = id
        this.adivinado = adivinado
        this.url = url
    }
}

let contadorAdivinados = 0


//AQUICARGARE LOS SONIDOS

const sonidoExito = new Audio('sonidos/correcto.mp3');
const sonidoError = new Audio('sonidos/incorrecto.mp3');
sonidoExito.volume = 0.3
sonidoError.volume = 0.3

//AQUI VOY A CARGAR LOS PAISES
let paises = []


//AQUI HARE OTRO ARRAY CON EL NOMBRE DE LOS PAISES
let nombrePaises = []

//ESTA FUNCION ES PARA METER LOS ELEMENTOS BANDERAS AL ARRAY

function creacionPaises(pais,adivinandoBooleano,url) {
    identificador = paises.length
    let nuevoPais = new Pais(pais,identificador,adivinandoBooleano,url)
    paises.push(nuevoPais)
    nombrePaises.push(pais)

}

creacionPaises("afganistan",null,"banderas/afganistan.png")
creacionPaises("albania",null,"banderas/albania.png")
creacionPaises("alemania",null,"banderas/alemania.png")
creacionPaises("angola",null,"banderas/angola.png")
creacionPaises("argentina",null,"banderas/argentina.png")
creacionPaises("australia",null,"banderas/australia.png")
creacionPaises("austria",null,"banderas/austria.png")
creacionPaises("arabia saudita",null,"banderas/arabia saudita.png")

creacionPaises("bahamas",null,"banderas/bahamas.png")
creacionPaises("Bangladés",null,"banderas/banglades.png")
creacionPaises("Barbados",null,"banderas/barbados.png")
creacionPaises("Belgica",null,"banderas/belgica.png")
creacionPaises("Bolivia",null,"banderas/bolivia.png")
creacionPaises("Brasil",null,"banderas/brasil.png")
creacionPaises("Bulgaria",null,"banderas/bulgaria.png")

creacionPaises("Canadá",null,"banderas/canada.png")
creacionPaises("China",null,"banderas/china.png")
creacionPaises("Colombia",null,"banderas/colombia.png")
creacionPaises("Corea del Sur",null,"banderas/corea del sur.png")
creacionPaises("Costa rica",null,"banderas/costa rica.svg")

creacionPaises("Dinamarca",null,"banderas/dinamarca.png")
creacionPaises("Dominica",null,"banderas/dominica.png")

creacionPaises("ecuador",null,"banderas/ecuador.png")
creacionPaises("Egipto",null,"banderas/egipto.png")
creacionPaises("España",null,"banderas/españa.png")
creacionPaises("Estados Unidos",null,"banderas/estados unidos.png")
creacionPaises("Estonia",null,"banderas/estonia.png")
creacionPaises("Etiopia",null,"banderas/etiopia.png")

creacionPaises("Filipinas",null,"banderas/filipinas.png")
creacionPaises("Finlandia",null,"banderas/finlandia.png")
creacionPaises("Francia",null,"banderas/francia.png")
creacionPaises("Fiyi",null,"banderas/fiyi.png")

creacionPaises("Gabón ",null,"banderas/gabon.png")
creacionPaises("Gambia ",null,"banderas/gambia.png")
creacionPaises("Grecia ",null,"banderas/grecia.png")
creacionPaises("Guinea ",null,"banderas/guinea.png")





creacionPaises("escocia",null,"banderas/escocia.png")




let ClickDisponible = 1

//AQUI VIENE LA PARTE EN QUE ASIGNAMOS LOS PAISES CUANDO HACEMOS CLICK EN EMPEZAR Y SIGUIENTE

let $botonEmpezar = document.querySelector("#botonEmpezar")
let $botonSiguiente = document.querySelector("#botonSiguiente")


//botones de las 3 opciones a clickear y la bandera

let $imagen = document.querySelector("#img__bandera")


let $Opcion1 = document.querySelector("#boton1")
let $Opcion2 = document.querySelector("#boton2")
let $Opcion3 = document.querySelector("#boton3") 

//CUADRO DE TEXTO QUE ADVIERTE EL ERROR
let $cuadroDeTexto = document.querySelector("#cuadroInformacion")

let objetoCorrecto = {}

function cargaDeDatos() {

    ClickDisponible = 1

    $botonEmpezar.style.display = "none"
    $cuadroDeTexto.style.display ="Block"

    $cuadroDeTexto.classList.remove("seccion-2__texto__texto--verde","seccion-2__texto__texto--rojo")

     $botonSiguiente.style.visibility = "hidden"
    //cargamos el metodo que asigna la clase para ese efecto de deslizar
    cargaDeClases($Opcion1,"seccion-2__botones__boton1--deslizar--final")
    cargaDeClases($Opcion2,"seccion-2__botones__boton2--deslizar--final")
    cargaDeClases($Opcion3,"seccion-2__botones__boton3--deslizar--final")

    colocarDentroDeLosDivs()

    //AQUI QUITARE LOS COLORES DE LOS BOTONES PREVIAMENTE ESCOGIDOS
    $Opcion1.classList.remove("rojo","verde")
    $Opcion2.classList.remove("rojo","verde")
    $Opcion3.classList.remove("rojo","verde")

}

function cargaDeClases(elemento,claseNueva) {
    //agarro las clases, lo se, ahora se que hay un metodo .remplace
    let arregloDeClases = Array.from(elemento.classList)
    arregloDeClases[2] = claseNueva
    return elemento.className = arregloDeClases.join(" ")
}

function obtenerNumeroAleatorioArregloPaises(miArreglo) {
  //Obtenemos la longitud del arreglo (cantidad de elementos)
  const x = miArreglo.length;
  
  // Generamos un número entre 0 y x 
  // Math.random() da un número aleatorio of course
  // Lo multiplicamos por x y usamos Math.floor para redondear hacia abajo
  
  const numeroAleatorio = Math.floor(Math.random() * x) ;
  
  return numeroAleatorio;
}

function colocarDentroDeLosDivs() {
    let valorAleatorioArregloPaises = obtenerNumeroAleatorioArregloPaises(paises)
    let paisElegido = paises[valorAleatorioArregloPaises]
    let paisNombre = paisElegido.nombre
    console.log(paisElegido)

    objetoCorrecto = paisElegido

    //AQUI METERE LA IMAGEN URL DENTRO DEL DIV DE LA IMAGEN VALGA LA REDUNDANCIA
    console.log(paisElegido.url)
    $imagen.src= paisElegido.url
    
    valorAleatorioOpciones = Math.floor(Math.random() * 3);

    //FUNCION QUE ELIGE LA OPCION, ADEMAS DE QUE MODIFICA EL DIV DIRECTAMENTE
    elegirOpcion(valorAleatorioOpciones,paisNombre)
    
}

//ESTA FUNCION ASIGNA EL VALOR DEL OBJETO A LA OPCION, CAPTURA 2 PARAMETROS 
function elegirOpcion(valorAleatorioOpciones, paisNombre) {
    if(valorAleatorioOpciones==0) {
        $Opcion1.innerHTML = paisNombre

        $Opcion2.innerHTML =entregarOpcionQueNoSeaLaElegida(paisNombre)
        $Opcion3.innerHTML =entregarOpcionQueNoSeaLaElegida(paisNombre)
    }
    else if(valorAleatorioOpciones==1) {
        $Opcion2.innerHTML = paisNombre

        $Opcion1.innerHTML =entregarOpcionQueNoSeaLaElegida(paisNombre)
        $Opcion3.innerHTML =entregarOpcionQueNoSeaLaElegida(paisNombre)
    }
    else if(valorAleatorioOpciones==2) {
        $Opcion3.innerHTML = paisNombre

        $Opcion1.innerHTML =entregarOpcionQueNoSeaLaElegida(paisNombre)
        $Opcion2.innerHTML =entregarOpcionQueNoSeaLaElegida(paisNombre)
    }
    else {
        console.log("mango")
    }
    
}

function entregarOpcionQueNoSeaLaElegida (OpcionPaisVerificar) {
    let opcionSugerida = OpcionPaisVerificar
    while (OpcionPaisVerificar == opcionSugerida) {
        let numero = obtenerNumeroAleatorioArregloPaises(nombrePaises)
        opcionSugerida = nombrePaises[numero]
    }
    return opcionSugerida 
}

//EVENTOS PARA LOSBOTONES EMPEZAR Y SIGUIENTE
$botonEmpezar.addEventListener("click",cargaDeDatos )
$botonSiguiente.addEventListener("click",cargaDeDatos )

//EVENTOS PARA LOS BOTONES DE LAS OPCIONES 



//ESTA FUNCION VALIDA LA OPCIONES SELECCIONADA Y CAMBIA LOS COLORES DE LOS BOTONES MARICOS
function bienMal(elemento) {
    

    let respuestaSeleccionada = elemento.target.innerHTML
    let respuestaCorrecta = objetoCorrecto.nombre

    if(ClickDisponible==1) {
        ClickDisponible--
        if(respuestaSeleccionada==respuestaCorrecta) {
        elemento.target.classList.add("verde")

        sonidoExito.currentTime = 0;
        sonidoExito.play()
        $cuadroDeTexto.innerHTML = `CORRECTO ✅: La respuesta era ${respuestaCorrecta}`
        $cuadroDeTexto.classList.remove("seccion-2__texto__texto--rojo")
        $cuadroDeTexto.classList.add("seccion-2__texto__texto--verde")
        
        $botonSiguiente.style.visibility = "visible"
        
        

    }
    else {
        elemento.target.classList.add("rojo")

        sonidoError.currentTime = 0;
        sonidoError.play()
        $cuadroDeTexto.innerHTML = `INCORRECTO PEDAZO DE... ❌: La respuesta era ${respuestaCorrecta}`
        $cuadroDeTexto.classList.remove("seccion-2__texto__texto--verde")
        $cuadroDeTexto.classList.add("seccion-2__texto__texto--rojo")

        $botonSiguiente.style.visibility = "visible"
       
    }
    }
    else {
        console.log("nopeee")
    }
    
}

$Opcion1.addEventListener("click",bienMal)
$Opcion2.addEventListener("click",bienMal)
$Opcion3.addEventListener("click",bienMal)



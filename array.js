const imagenesProductos = [
    "https://http2.mlstatic.com/D_NQ_NP_2X_619126-MLA50232132766_062022-F.webp",
    "https://http2.mlstatic.com/D_NQ_NP_2X_847906-MLA49763193559_042022-F.webp",
    "https://http2.mlstatic.com/D_NQ_NP_991401-MLA31351342525_072019-O.webp"
];
const nombreProductos = ["tv", "celular", "pc"];

var arrayGlobalNombresImagenes=[];

let nombreProductosAgregados=["guitarra","parilla"];
let imagenesProductosAgregados=[
    "https://http2.mlstatic.com/D_NQ_NP_936630-MLA44189744930_112020-O.webp",
    "https://d3ugyf2ht6aenh.cloudfront.net/stores/460/452/products/11-3f907f532756a692c116414909533005-640-0.png"
];

var nombreProductosAgregadosUsuario =[]
var imagenesProductosAgregadosUsuario=[]

let actualizar = "actualiza";
let inicio = "nada";

function intercalarArrays(nombre,imagen){
    let arrayIntercalar = []
    for (i=0 ; i <nombre.length; i++){
        arrayIntercalar.push(nombre[i])
        arrayIntercalar.push(imagen[i])   
    }

    agregarAlArrayGlobal(arrayIntercalar)
}

function agregarAlArrayGlobal(arrayAagregar){
    for(i=0; i<arrayAagregar.length; i++){
        arrayGlobalNombresImagenes.push(arrayAagregar[i])
    }

}


function mostrarArrayEnPagina(x){
    
    for(i=0;i<arrayGlobalNombresImagenes.length;i++){
        if(i % 2 == 0){
            document.querySelector("#arrays").innerHTML+=`<h3>${arrayGlobalNombresImagenes[i]}</h3>`
        }
        else {document.querySelector("#arrays").innerHTML+=`<img src=${arrayGlobalNombresImagenes[i]}>`}
        }

}

function agregarElementosIngresadosPorUsuario(){
    arrayGlobalNombresImagenes.push(document.querySelector("#nombre_ingresado_usuario").value)
    arrayGlobalNombresImagenes.push(document.querySelector("#imagen_ingresada_usuario").value)
    document.querySelector("#arrays").innerHTML = "";
    mostrarArrayEnPagina()
}


intercalarArrays(nombreProductos,imagenesProductos)
intercalarArrays(nombreProductosAgregados,imagenesProductosAgregados)
mostrarArrayEnPagina()
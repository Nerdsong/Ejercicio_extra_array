const imagenesProductos = [
    "https://http2.mlstatic.com/D_NQ_NP_2X_619126-MLA50232132766_062022-F.webp",
    "https://http2.mlstatic.com/D_NQ_NP_2X_847906-MLA49763193559_042022-F.webp",
    "https://http2.mlstatic.com/D_NQ_NP_991401-MLA31351342525_072019-O.webp"
];
const nombreProductos = ["tv", "celular", "pc"];

// Este array contendrá todos los elementos a mostrar en la pag
var arrayGlobalNombresImagenes=[];

//Estos son los array que agregué por mi cuenta
let nombreProductosAgregados=["guitarra","parrilla"];
let imagenesProductosAgregados=[
    "https://http2.mlstatic.com/D_NQ_NP_936630-MLA44189744930_112020-O.webp",
    "https://d3ugyf2ht6aenh.cloudfront.net/stores/460/452/products/11-3f907f532756a692c116414909533005-640-0.png"
];

//Acá estarán los elementos agregados por el usuario
var nombreProductosAgregadosUsuario =[]
var imagenesProductosAgregadosUsuario=[]

let actualizar = "actualiza";
let inicio = "nada";


//Esta función intercala los arrays para que queden en formato orden: nombre1, imagen1, nombre2, imagen2
function intercalarArrays(nombre,imagen){
    let arrayIntercalar = [] //Esta variable guarda el resultado de intercalar los array. 
    for (i=0 ; i <nombre.length; i++){
        arrayIntercalar.push(nombre[i])
        arrayIntercalar.push(imagen[i])   
    }

    agregarAlArrayGlobal(arrayIntercalar)
}

//Esta función agrega cualquier array al array global, elemento por elemento.
function agregarAlArrayGlobal(arrayAagregar){
    for(i=0; i<arrayAagregar.length; i++){
        arrayGlobalNombresImagenes.push(arrayAagregar[i])
    }

}

//Esta función imprime los valores del array global en página
function mostrarArrayEnPagina(x){
    
    for(i=0;i<arrayGlobalNombresImagenes.length;i++){
        if(i % 2 == 0){
            document.querySelector("#arrays").innerHTML+=`<h3>${arrayGlobalNombresImagenes[i]}</h3>`
        }
        else {document.querySelector("#arrays").innerHTML+=`<img src=${arrayGlobalNombresImagenes[i]}>`}
        }

}

//Esta función agregá los elementos ingresados por el usuario al array global, siempre en orden: nombre1, imagen1, nombre2, imagen2. 
function agregarElementosIngresadosPorUsuario(){
    arrayGlobalNombresImagenes.push(document.querySelector("#nombre_ingresado_usuario").value)
    arrayGlobalNombresImagenes.push(document.querySelector("#imagen_ingresada_usuario").value)
    document.querySelector("#arrays").innerHTML = "";
    mostrarArrayEnPagina()
}


intercalarArrays(nombreProductos,imagenesProductos)
intercalarArrays(nombreProductosAgregados,imagenesProductosAgregados)
mostrarArrayEnPagina()
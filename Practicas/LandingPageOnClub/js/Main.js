
/**Funciones Abrir Libro */
function LibroRotador(identificador) {
    identificador.classList.toggle("EfectoHoja");
}
function OcultarPanorama(identificador, zindex) {
    identificador.style = `z-index:${zindex}`;
}
/**Funciones Cerrar Libro */



let PuertasArray = document.querySelectorAll("#AbrirLibro");
let PortadasArray = document.querySelectorAll("#Catalogo__Cocteles__Contenido");

console.log(PortadasArray.length);
console.log(PuertasArray.length);


for (let index0 = 0; index0 < PuertasArray.length; index0++) {
    
    console.log(index0);
    PuertasArray[index0].addEventListener("click", ()=>{
        console.log(index0);
        LibroRotador(PortadasArray[index0]);
        console.log(PortadasArray[index0]);
        OcultarPanorama(PortadasArray[index0+1], -(index0+1));
    }); 

}

let PuertasCerradasArray = document.querySelectorAll("#RegresarPagina");

for (let index = 0; index < PuertasCerradasArray.length; index++) {
    
    PuertasCerradasArray[index].addEventListener("click", ()=>{
        LibroRotador(PortadasArray[index]);
        console.log("A tope!");
        OcultarPanorama(PortadasArray[index+1], (index+1));
    });
    
}
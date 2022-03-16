
function LibroRotador(identificador) {
    identificador.classList.toggle("EfectoHoja");
}
function OcultarPanorama(identificador, zindex) {
    identificador.style = `z-index:${zindex}`;
}

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
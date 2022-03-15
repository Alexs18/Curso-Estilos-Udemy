
function LibroRotador(identificador) {
    identificador.classList.toggle("EfectoHoja");
}
function OcultarPanorama(identificador) {
    identificador.style = "z-index:-1";
}

let PuertasArray = document.querySelectorAll("#AbrirLibro");
let PortadasArray = document.querySelectorAll("#Catalogo__Cocteles__Contenido");


for (let index = 0; index < PuertasArray.length; index++) {
    
    PuertasArray[index].addEventListener("click", ()=>{
        LibroRotador(PortadasArray[index]);
        OcultarPanorama(PortadasArray[index+1]);
        console.log(index);
    }); 

}
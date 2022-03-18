
/**Variables*/
let PuertasCocteles = document.querySelectorAll("#AbrirLibro");
let PortadasCocteles = document.querySelectorAll("#Catalogo__Cocteles__Contenido");
let PuertasCervezas = document.querySelectorAll("#AbrirLibroC");
let PortadasCervezas = document.querySelectorAll("#Catalogo__Cerveza__Contenido");
let PuertasCerradasArray = document.querySelectorAll("#RegresarPagina");
let PuertasCerradasC = document.querySelectorAll("#RegresarPaginaC");


/**Funciones Abrir y cerrar Libro o cartelera */
function LibroRotador(identificador) {
    identificador.classList.toggle("EfectoHoja");
}
function OcultarPanorama(identificador, zindex) {
    identificador.style = `z-index:${zindex}`;
}

function OpenBook(Boton, Portada) {
    
    for (let index0 = 0; index0 < Boton.length; index0++) {
    
        Boton[index0].addEventListener("click", ()=>{
            
            LibroRotador(Portada[index0]);
            OcultarPanorama(Portada[index0+1], -(index0+1));
        }); 
    
    }

}

function CloseBook(Boton, Portada) {
    
    for (let index = 0; index < Boton.length; index++) {
    
        Boton[index].addEventListener("click", ()=>{
            
            LibroRotador(Portada[index]);
            OcultarPanorama(Portada[index+1], (index+1));

        });
        
    }

}

OpenBook(PuertasCocteles, PortadasCocteles);
OpenBook(PuertasCervezas, PortadasCervezas);

CloseBook(PuertasCerradasArray, PortadasCocteles);
CloseBook(PuertasCerradasC, PortadasCervezas);





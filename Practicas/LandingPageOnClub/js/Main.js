document.getElementById("BtnLibro").addEventListener("click",()=>{
    document.getElementById("Portada").classList.toggle("EfectoHoja");
    document.getElementById("ContenidoPaginaUno").style = "color:black";
});
document.getElementById("BtnLibro2").addEventListener("click",()=>{
    document.getElementById("PortadaDos").classList.toggle("EfectoHoja");
    document.getElementById("ContenidoPaginaDos").style = "color:black";
});
document.getElementById("BtnLibro3").addEventListener("click",()=>{
    document.getElementById("PortadaTres").classList.toggle("EfectoHoja");
    document.getElementById("ContenidoPaginaTres").style = "color:black";
});
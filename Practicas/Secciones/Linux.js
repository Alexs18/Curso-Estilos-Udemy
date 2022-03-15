let botones = document.querySelectorAll("#Registros");

function AgregarSaludos(saludo, numero) {
    alert(`Saludos, ${saludo} ${numero}`);
}

for (let index = 0; index < botones.length ; index++) {
    
    botones[index].addEventListener("click", ()=>{

        AgregarSaludos("Estudiante", index);

    })

}
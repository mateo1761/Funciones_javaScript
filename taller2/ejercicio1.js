function estudiantes(nombre,planeta,edad,estatura, callback) {
    setTimeout(function () {

        let aprendiz = {
            nombre,
            edad,
            planeta,
            estatura
        }

        callback(aprendiz);
    }, 10000)
}

estudiantes("bill","marte",22,1.67,function(aprendiz) {
    if(aprendiz.edad > 15){
        console.log("El aprendiz "+aprendiz.nombre+" manejo del sable de luz");
    }
    else{
        console.log("El aprendiz "+aprendiz.nombre+" manejo de la fuerza");
    }
})
let nombres = ["vaca","pez","zanahoria","fresa","aguacate","grillo","mariposa","mora","lagartija","sandia"];
let tipos = ["animal","vegetal","insectos"];
let energias = [200,560,120,350,420,160,265,780,45,95];

let alimentos = [];

for(let i = 0; i < 50; i++){
    let alimento = {};

    alimento.nombre = nombres [Math.floor(Math.random() * nombres.length)];
    alimento.tipo = tipos [Math.floor(Math.random() * tipos.length)];
    alimento.energia = energias [Math.floor(Math.random() * energias.length)];

    alimentos.push(alimento);
}


function entrenamiento(dietas,callback){
    setTimeout(function(){ 

        let tipos = dietas.filter(function(dieta){

            return (dieta.tipo == "vegetal" && dieta.energia > 200);

        })

        callback(tipos);

    }, 5000)
}

entrenamiento(alimentos,function (tipos){

    let resultado = 0;

    tipos.forEach(function(tipo) {
        resultado += tipo.energia; 
    });

    console.log(tipos);
    console.log("La suma de energias de la dieta de grogu es de: " +resultado);
});
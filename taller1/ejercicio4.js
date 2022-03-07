let energias = [3,9,7,5,-2,-7,7,3];

let negativos = 0;
let i = 0;

let sables = (energias) => {

    while(i < energias.length){

        if(energias[i] < 0){
            console.log(energias[i]);
            negativos ++;
        }

        i++;
    }

    console.log(`Hay ${negativos} sables negativos en energias`);
}
sables(energias);
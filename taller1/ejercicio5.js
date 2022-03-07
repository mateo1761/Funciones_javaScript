let calcularSalario = (salBase,comision,cant) => {

    let saltNeto = (salBase + (comision * cant ));
    let salBruto = saltNeto - ((saltNeto * 5) / 100);

    return salBruto
}

console.log(calcularSalario(3500000,1500000,2));
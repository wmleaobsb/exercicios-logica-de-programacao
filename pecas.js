// se a peça possuir peso superior a 100g pode cadastrar

let peso = 101;

if (peso < 100){
    console.log("A peça precisa pesar no mínimo 100g")
}else{
    console.log("A peça possui peso adequado")
}

// dada a capacidade de cada caixa, caso a lista de peças seja superior a 10, imprime uma mensagem informando não ter capacidade suficiente

let listadepecas = ["AMORTECEDOR","DISCO DE FREIO","MOTOR"]

if(listadepecas.lenght < 10){
    console.log("É possível cadastrar mais peças")
}else{
    console.log("Não tem mais espaço na lista")
}

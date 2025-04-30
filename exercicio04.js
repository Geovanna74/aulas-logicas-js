const  faturamento = {
    primeiroTrimestre: 10650,
    segundoTrimestre: 20000,
    terceiroTrimestre: 35000
}

const{primeiroTrimestre,segundoTrimestre,terceiroTrimestre} = faturamento

const mediaDeFaturamento = ((primeiroTrimestre + segundoTrimestre + terceiroTrimestre) / 3).toFixed(2)

console.log(`Media de Faturameto ${mediaDeFaturamento}`)

if(mediaDeFaturamento >= 25000){
    console.log("Media esperada")
}
else{
    console.log("Abaixo do esperado")
}



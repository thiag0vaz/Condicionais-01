/*4. Leia 1 (um) número de 2 (dois) dígitos, verifique e escreva se o algarismo da dezena é igual ou diferente
do algarismo da unidade.*/

import { question } from "readline-sync";

function main(){

    //Entrada 
    const numero = Number(question('Digite um número de 2 algarismos: '))

    //Processamento 
    const dezenas = Math.floor(numero / 10)
    const unidades = numero % 10 
    const igual = comparacao(dezenas, unidades)

    //Saída 
    console.log(igual)
}
main()

function comparacao(primeiro, segundo){
    if (primeiro === segundo) {
        return `A quantidade de dezenas é igual a quantidade de unidades`
    }else {
        return `A quantidade de dezenas é diferente da quantidade de unidades`
    }


}
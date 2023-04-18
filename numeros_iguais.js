//1. Leia 3 (três) números, verifique e escreva quantos números iguais existem entre os números.

import { question } from "readline-sync"

function main(){
    //Entrada
    const num1 = Number(question('Digite o primeiro número: '))
    const num2 = Number(question('Digite o segundo número: '))
    const num3 = Number(question('Digite o terceiro número: '))

    //Processamento 
    const iguais = verificar_iguais(num1, num2, num3)

    //Saída
    console.log(`Existem ${iguais} números iguais.`);
}
main()

function verificar_iguais(num1, num2, num3){
    if (num1 === num2 && num1 === num3) {
        return `3`
    } else if (num1 === num2 || num1 === num3 || num2 === num3) {
        return `2`
    } else {
        return `0`
    }
}
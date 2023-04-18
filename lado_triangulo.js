/* 7. Leia 3 (três) números (cada número corresponde a um lado do triângulo), verifique e escreva se os 3
(três) números formam um triângulo (a soma de dois lados não pode ser menor que o terceiro lado). Se
formam, verifique se formam um triângulo equilátero (3 lados iguais), isósceles (2 lados iguais) ou
escaleno (3 lados diferentes). Não existe lado com tamanho 0 (zero)l. */

import { question } from 'readline-sync'

function main(){
    // Entrada
    const lado1 = Number(question('Lado 1: '))
    const lado2 = Number(question('Lado 2: '))
    const lado3 = Number(question('Lado 3: '))

    //Processamento 
    const tipo = tipo_lado(lado1, lado2, lado3)
   
    //Saída 
    console.log(tipo)
}
main()

function tipo_lado(lado1, lado2, lado3){
    if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
  
        if (lado1 === lado2 && lado1 === lado3) {
            return `Os lados formam um triângulo equilátero`
        } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
            return `Os lados formam um Triângulo isósceles`
        } else {
            return `Os lados formam um Triângulo escaleno`
        }
    } else {
    return `Os lados não formam um triângulo`
    }
}
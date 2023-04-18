//12. Leia 1 (um) número inteiro e escreva se este número é par ou impar.

import {question} from 'readline-sync'

function main(){

    //Entrada 
    const numero = Number(question('Digite um número: '))

    //Processamento 
    const par = par_impar(numero)

    //Saída 
    console.log(`O número é ${par}`)
}
main()

function par_impar(numero){
    if (numero % 2 === 0) {
        return `Par`
    } else {
        return `Ímpar`
    }
}

//9. Leia 1 (um) número entre 0 e 100, verifique e escreva se o número é ou não primo.

import { question } from "readline-sync"

function main(){

    //Entrada 
    const numero = Number(question('Digite um número: '))

    //Processamento 
    const primo = verificar_primo(numero)

    //Saída 
    console.log(`O número ${numero} ${primo}`)
}
main()

function verificar_primo(numero) {
    if (numero < 2) {
        return `não é primo`
    }else if (numero === 2) {
        return `é primo`
    }else if (numero === 3) {
        return `é primo`
    }else if (numero === 5) {
        return `é primo`
    }else if (numero === 7) {
        return `é primo`
    }else if (numero % 2 === 0 || numero  % 3 === 0 || numero % 5 === 0 || numero % 7 === 0) {
        return `não é primo`
    }else {
        return `é primo`
    }
}
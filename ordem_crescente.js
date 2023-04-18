//5. Leia 3 (três) números e escreva-os em ordem crescente.

import { question } from "readline-sync"

function main(){

    //Entrada 
    const num1 = Number(question('Digite o primeiro número: '))
    const num2 = Number(question('Digite o segundo número: '))
    const num3 = Number(question('Digite o terceiro número: '))

    //Processamento 
    const ordem = crescente(num1, num2, num3)

    //Saída 
    console.log(`Ordem crescente: ${ordem}`)
}
main()

function crescente(num1, num2, num3){
    if (num1 === num2 && num2 === num3) {
        return `Os números são iguais`
    }else if (num1 < num2 && num2 < num3) {
        return `${num1}, ${num2}, ${num3}`
    }else if(num2 < num1 && num1 < num3) {
        return `${num2}, ${num1}, ${num3}`
    }else if(num3 < num2 && num2 < num1) {
        return `${num3}, ${num2}, ${num1}`
    }
    
}
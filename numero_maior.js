//3. Leia 3 (três) números, verifique e escreva o maior entre os números lidos.

import { question } from "readline-sync";

function main(){

    //Entrada 
    const num1 = Number(question('Digite o primeiro número: '))
    const num2 = Number(question('Digite o segundo número: '))
    const num3 = Number(question('Digite o terceiro número: '))

    //Processamento 
    const maior_numero = verificar_numero_maior(num1, num2, num3)
    
    //Saída 
    console.log(`${maior_numero}`)
}
main()

function verificar_numero_maior(num1, num2, num3){ 
    if (num1 > num2 && num1 > num3) {
        return `O primeiro número é o maior`
    } else if (num2 > num1 && num2 > num3) {
        return `O segundo número é o maior`
    } else if (num3 > num2 && num3 > num1) {
        return `O terceiro número é o maior`
    } else {
        return `São iguais`
    }
}
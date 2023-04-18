/* 13. Leia 5 (cinco) números inteiros e escreva o maior e o menor deles. Considere que todos os valores são
diferentes. */

import { question } from "readline-sync";

function main(){
    
    //Entrada 
    const numero1 = Number(question("Digite o primeiro número: ")) 
    const numero2 = Number(question("Digite o segundo número: ")) 
    const numero3 = Number(question("Digite o terceiro número: ")) 
    const numero4 = Number(question("Digite o quarto número: ")) 
    const numero5 = Number(question("Digite o quinto número: ")) 
    
    //Processamento 
    const numero_maior = apresentar_numero_maior(numero1, numero2, numero3, numero4, numero5)
    const numero_menor = apresentar_numero_menor(numero1, numero2, numero3, numero4, numero5)
    //Saída 
    console.log(`${numero_maior}  e ${numero_menor}`)
    
}
main()

function apresentar_numero_maior(num1, num2, num3, num4, num5){
    if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
        return `${num1} é o maior`
    }else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
        return `${num2} é o maior`
    }else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
        return `${num3} é o maior`
    }else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) {
         return `${num4} é o maior`
    }else if (num5 > num1 && num5 > num2 && num5 > num3 && num5 > num4) {
         return `${num5} é o maior`
    }else {
          return `Não coloque números iguais`
    }
}

function apresentar_numero_menor(num1, num2, num3, num4, num5){
    if (num1 < num2 && num1 < num3 && num1 < num4 && num1 < num5) {
        return `${num1} é o menor`
    }else if (num2 < num1 && num2 < num3 && num2 < num4 && num2 < num5) {
        return `${num2} é o menor`
    }else if (num3 < num1 && num3 < num2 && num3 < num4 && num3 < num5) {
        return `${num3} é o menor`
    }else if (num4 < num1 && num4 < num2 && num4 < num3 && num4 < num5) {
         return `${num4} é o menor`
    }else if (num5 < num1 && num5 < num2 && num5 < num3 && num5 < num4) {
         return `${num5} é o menor`
    }else {
          return `Não coloque números iguais`
    }
}

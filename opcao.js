/* 11. Leia quatro números (opção, num 1, num2, num3) e que escreva o valor de num1 se opção igual a 1; o
valor de num2 se opção for igual a 2; e o valor de num3 se opção for igual a 3. Os únicos valores
possíveis para a variável opção são 1, 2 e 3.*/

import { question } from "readline-sync";

function main(){

    //Entrada 
    const opcao = Number(question("Digite o valor da opcão (somente 1, 2 ou 3): "))
    const num1 = Number(question("Digite o valor do número 1: "))
    const num2 = Number(question("Digite o valor do número 2: "))
    const num3 = Number(question("Digite o valor do número 3: "))
   
    //Processamento 
    const resultado = entregar_opcao(opcao, num1 ,num2, num3)

    //Saída 
    console.log(resultado)
}
main()

function entregar_opcao(opcao, num1, num2, num3){
    if (opcao === 1 ) {
        return num1
    } else if (opcao === 2 ) {
        return num2
    } else if (opcao === 3 ) {
        return num3 
    } else {
        return `Você digitou um número inválido`
    }

}

//2. Leia 2 (dois) números, verifique e escreva o menor e o maior entre os números lidos.

import { question } from "readline-sync";

function main(){
    //Entrada
    const num1 = Number(question('Digite o primeiro número: '))
    const num2 = Number(question('Digite o segundo número: '))

    //Processamento 
    const maior = verificar_maior(num1, num2)

    //Saída 
    console.log(maior)
}
main()
        
function verificar_maior(num1, num2){
    if (num1 > num2) {
        return `${num1} é maior`
    }else {
        return `${num2} é maior`
    }
}

    
   
           
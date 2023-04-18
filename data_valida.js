//10. Leia uma data (dia, mês e ano), verifique e escreva se a data é ou não válida.

import { question } from "readline-sync";

function main(){

    //Entrada 
    const dia = Number(question("Digite um dia: "))
    const mes = Number(question("Digite um mês: "))
    const ano = Number(question("Digite um ano: "))

    //Processamento 
    const valida = validacao_da_data(dia, mes, ano)

    //Saída 
    console.log(`${valida}`)
}
main()

function validacao_da_data(dia, mes, ano) {
    let dia_mes = 31
    
    if (ano <= 0) {
        return `A data é inválida`
    }

    if (mes < 1 || mes > 12) {
        return `A data é inválida`
    }
    

   
    if (mes === 4 || mes === 6 || mes === 9 || mes === 11){
        return dia_mes = 30
    
    }else if (mes === 2){
        if (ano % 4 === 0 && (ano % 100 != 0 || ano % 400 == 0)) {
            return dia_mes === 29
        }else {
            return dia_mes === 28
        }
    }
    
    if (dia < 1 || dia > dia_mes){
        return `A data é inválida`
    } else { 
    return `A data é válida`
    }
}
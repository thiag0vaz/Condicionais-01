/*15. Leia a quantidade de horas aula dadas por dois professores e o valor por hora recebido por cada um.
Escreva na tela qual dos professores tem salário total maior.*/

import { question } from "readline-sync";

function main(){
    //Entrada 
    const horas_de_aulas_prof1 = Number(question("Horas de aula do Professor 1(Rogério): "))
    const valor_por_hora_de_aulas_prof1 = Number(question("Valor de cada hora (R$):  "))
    const horas_de_aulas_prof2 = Number(question("Horas de aula do Professor 2(Ricardo): "))
    const valor_por_hora_de_aulas_prof2 = Number(question("Valor de cada hora (R$):  "))

    //Processamento 
    const salario1 = salario_rogerio(horas_de_aulas_prof1, valor_por_hora_de_aulas_prof1)
    const salario2 = salario_ricardo(horas_de_aulas_prof2, valor_por_hora_de_aulas_prof2)
    const comparar = comparar_salarios(salario1, salario2)
    
    //Saída 
    console.log(`O professor Rogério ganha: ${salario1}`)
    console.log(`O professor Ricardo ganha: ${salario2}`)
    console.log(`${comparar} `)
}
main()

function comparar_salarios(salario1, salario2){
    if (salario1 > salario2) {
        return`Rogério ganha mais que Ricardo`
    } else {
        return`Ricardo ganha mais que Rogério`
    }
}

function salario_rogerio(horas, valor_h){
    const salario = horas * valor_h
    return salario 
}

function salario_ricardo(horas, valor_h){
    const salario = horas * valor_h
    return salario 
}
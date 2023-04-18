// 14. Leia 5 (cinco) números inteiros, calcule a sua média e escreva os que são maiores que a média.

import { question } from "readline-sync";

function main(){

    //Entrada
    const numero1 = Number(question("Digite o primeiro número: ")) 
    const numero2 = Number(question("Digite o segundo número: ")) 
    const numero3 = Number(question("Digite o terceiro número: ")) 
    const numero4 = Number(question("Digite o quarto número: ")) 
    const numero5 = Number(question("Digite o quinto número: ")) 

    //Processamento 
    const media = calcular_media(numero1, numero2, numero3, numero4, numero5)
    const maior_que_media = numero_maior_que_media(media ,numero1, numero2, numero3, numero4, numero5)

    //Saída 
    console.log(`A média dos número é: ${media}`)
    console.log(`Numeros maiores: ${maior_que_media}`)
}
main()

function calcular_media(num1, num2, num3, num4, num5){
    const resultado = (num1 + num2 + num3 + num4 + num5) / 5
    return resultado
}

function numero_maior_que_media(media, num1, num2, num3, num4, num5 ){
    if (num1 > media && num2 > media) {
        return`${num1} e ${num2}`
    } else if (num2 > media && num3 > media) {
        return`${num2} e ${num3}`
    } else if (num3 > media && num4 > media) {
        return`${num3} e ${num4}`
    } else if (num4 > media && num5 > media) {
        return`${num4} e ${num5} `
    } else if (num1 > media) {
        return`o ${num1} é maior `
    } else if (num2 > media) {
        return`o ${num2} é maior `
    } else if (num3 > media) {
        return`o ${num3} é maior `
    } else if (num4 > media) {
        return`o ${num4} é maior `
    } else if (num5 > media) {
        return`o ${num5} é maior `
    } else {
    return`nenhum dos números é maior que a média`
    }
}
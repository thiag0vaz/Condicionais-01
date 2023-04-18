/* 8. Leia data atual (dia, mês e ano) e data de nascimento (dia, mês e ano) de uma pessoa, calcule e escreva
sua idade exata (em anos).
 */

function main(){
    // Obtenha a data atual
    let dataAtual = new Date();

    // Obtenha a data de nascimento da pessoa
    let dataDeNascimento = new Date("2005-07-27"); // Substitua com a data de nascimento da pessoa

    // Calcule a idade da pessoa
    let idade = dataAtual.getFullYear() - dataDeNascimento.getFullYear();
    let mesDeNascimento = dataDeNascimento.getMonth();
    let mesAtual = dataAtual.getMonth();

    if (mesAtual < mesDeNascimento || (mesAtual == mesDeNascimento && dataAtual.getDate() < dataDeNascimento.getDate())) {
    idade--;
    }

    // Exiba a idade da pessoa
    console.log("A idade da pessoa é " + idade + " anos.");
}
main()
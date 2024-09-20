// Definição de Variáveis
let num1 = 10;
let num2 = 5;

// Operações Matemáticas
let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao;

// Validação Simples para Divisão
if (num2 !== 0) {
    divisao = num1 / num2;
    console.log(`A divisão de ${num1} por ${num2} é: ${divisao}`);
} else {
    console.log("Erro: Não é possível dividir por zero.");
}

// Exibição dos Resultados
console.log(`A soma de ${num1} e ${num2} é: ${soma}`);
console.log(`A subtração de ${num1} menos ${num2} é: ${subtracao}`);
console.log(`A multiplicação de ${num1} por ${num2} é: ${multiplicacao}`);

// Expansão do Algoritmo (Escolha da Operação)
let operacao = prompt("Escolha uma operação: adição (+), subtração (-), multiplicação (*) ou divisão (/).");

switch (operacao) {
    case "adição":
    case "+":
        console.log(`A soma de ${num1} e ${num2} é: ${soma}`);
        break;
    case "subtração":
    case "-":
        console.log(`A subtração de ${num1} menos ${num2} é: ${subtracao}`);
        break;
    case "multiplicação":
    case "*":
        console.log(`A multiplicação de ${num1} por ${num2} é: ${multiplicacao}`);
        break;
    case "divisão":
    case "/":
        if (num2 !== 0) {
            console.log(`A divisão de ${num1} por ${num2} é: ${divisao}`);
        } else {
            console.log("Erro: Não é possível dividir por zero.");
        }
        break;
    default:
        console.log("Operação inválida. Escolha entre adição, subtração, multiplicação ou divisão.");
}
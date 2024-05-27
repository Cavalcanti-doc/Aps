/*
Disciplina: Programação Web
Código da Turma: 123N-89719
Nome: Gláucio Rodrigues da Silva Cavalcanti	
Matrícula: 2019200728
*/

// Função para verificar se um número é primo
function ehPrimo(numero) {
    // Números menores ou iguais a 1 não são primos
    if (numero <= 1) {
        return false;
    }
    // Verifica divisibilidade até a raiz quadrada do número
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false; // Se divisível por qualquer número até a raiz quadrada, não é primo
        }
    }
    return true; // Se não encontrar divisores, o número é primo
}

// Função para encontrar os 10 maiores números primos a partir de um número fornecido pelo usuário
function encontrarMaioresPrimos() {
    // Solicita um número ao usuário
    const entradaUsuario = prompt("Por favor, insira um número:");
    const numeroInicial = parseInt(entradaUsuario);

    if (isNaN(numeroInicial)) {
        console.log("Entrada inválida. Por favor, insira um número válido.");
        return;
    }

    let contador = 0; // Contador de números primos encontrados
    let numero = numeroInicial; // Número inicial para verificação

    // Array para armazenar os 10 maiores números primos encontrados
    let numerosPrimos = [];

    // Loop até encontrar 10 números primos
    while (contador < 10) {
        if (ehPrimo(numero)) {
            numerosPrimos.push(numero); // Adiciona o número primo ao array
            contador++; // Incrementa o contador de números primos encontrados
        }
        numero++; // Incrementa o número a ser verificado
    }

    // Exibe os 10 maiores números primos encontrados
    console.log("Os 10 maiores números primos a partir de " + numeroInicial + " são: ");
    console.log(numerosPrimos);
}

// Chama a função para iniciar o processo
encontrarMaioresPrimos();
// resposta ALURA:
alert("Boas vindas ao jogo do número secreto");
let numTentativas = 150;
let numeroSecreto = parseInt(Math.random() * numTentativas + 1);
let chute;
let tentativas = 1;

// enquanto chute não for igual ao número secreto:
while (chute != numeroSecreto) {
  chute = prompt(`Escolha um número entre 1 e ${numTentativas}`);
  //se chute for igual número secreto
  if (chute == numeroSecreto) {
    break;
  } else {
    if (chute > numeroSecreto) {
      alert(`O número secreto é menor que ${chute}`);
    } else {
      alert(`O número secreto é maior que ${chute}`);
    }
    // tentativas = tentativas + 1
    tentativas++;
  }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(
  `Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`
);

// Minha solução sem break, antes do número randomico, e do uso do if ternário

// alert('Boas vindas ao jogo do número secreto');
// let numeroSecreto = 4;

// let tentativas = 1;
// let chute = prompt('Escolha um número entre 1 e 10');

// while (chute != numeroSecreto) {
//     if (chute > numeroSecreto) {
//         alert(`O número secreto é menor que ${chute}`);
//     }
//     else if (chute < numeroSecreto) {
//         alert(`O número secreto é maior que ${chute}`);
//     }
//     chute = prompt('Escolha um número entre 1 e 10');
//     tentativas++;
// }

// alert(`Parabéns! Você acertou o número secreto: ${numeroSecreto}`);

// if (tentativas === 1) {
//     alert(`Você precisou de ${tentativas} tentativa para acertar o número secreto.`);
// } else {
//     alert(`Você precisou de ${tentativas} tentativas para acertar o número secreto.`);
// }

// Exercício módulo 1

// alert('Boas vindas ao nosso site!');
// let nome = 'Lua';
// let idade = 25;
// let numeroDeVendas = 50;
// let saldoDisponivel = 1000;
// let mensagemDeErro = 'Erro, preencha todos os campos!';
// alert(mensagemDeErro)
// nome = prompt('Qual o seu nome?');
// idade = prompt('Qual a sua idade?');
// if (idade >= 18) {
//     alert('Você pode tirar habilitação!');
// }
// else {
//     alert('Você não pode tirar habilitação!');
// }

//Exercício módulo 2

// Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

// let finalSemana = ['Sabado', 'Domingo'];

// let dia = prompt('Qual o dia da semana?');
// if (finalSemana.includes(dia)) {
//     alert('Bom Final de semana!');
// } else {
//     alert('Boa semana!');
// }

// let dia = prompt('Qual o dia da semana?');

// if (dia == 'Sabado' || dia == 'Domingo') {
//     alert('Bom Final de semana!');
// } else {
//     alert('Boa semana!');
// }

// Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

// let numeroUsuario = prompt('Digite um número:');
// if (numeroUsuario > 0) {
//     alert('O número ' + numeroUsuario + ' é positivo.');
// }
// else if (numeroUsuario < 0) {
//     alert('O número ' + numeroUsuario + ' é negativo.');
// }
// else {
//     alert('O número ' + numeroUsuario + ' é zero.');
// }

//Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

// let saldo = 2500
// let mensagem = `Seu saldo é de R$ ${saldo},00.`;
// alert(mensagem);

//Exercício módulo 3

// Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número

// let contadorExc = 1
// while (contadorExc <= 10) {
//     console.log(contadorExc);
//     contadorExc++;
// }

// Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
// let contadorExc = 10
// while (contadorExc >= 0) {
//     console.log(contadorExc);
//     contadorExc--;
// }

// Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador
// let userNumber = prompt('Digite um número:');
// userNumber = Number(userNumber);
// let contador = userNumber;
// while (contador >= 0) {
//     console.log(contador);
//     contador--;
// }

// Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

// let userNumber = prompt('Digite um número:');
// userNumber = Number(userNumber);
// let contador = 0;
// while (contador <= userNumber) {
//     console.log(contador);
//     contador++
// }

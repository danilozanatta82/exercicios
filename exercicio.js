
//Mostre um alerta com a mensagem "Bem-vindo ao nosso site!".
alert('Boas vindas ao nosso site!');

//Declare uma variável chamada nome e atribua a ela o valor "Lua".
let nome = "Lua";

//Crie uma variável chamada idade e atribua a ela o valor 25.
let idadeTeste = 25;

//Defina uma variável numeroDeVendas e atribua a ela o valor 50.
let numeroDeVendas = 50;

//Defina uma variável saldoDisponivel e atribua a ela o valor 1000.
let saldoDisponivel = 1000; 

//Exiba um alerta com o texto "Erro! Preencha todos os campos."
alert('Erro! Preencha todos os campos');

//Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos." Agora exiba um alerta com o valor da variável mensagemDeErro.
let mensagemDeErro = "Erro! Preencha todos os campos!";
alert = mensagemDeErro; 

//Use um prompt para perguntar o nome do usuário e armazená-lo na variável nome.
let nomeUsuario = prompt('Informe seu Nome');

//Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.
let idadeUsuario = prompt('Informe sua Idade');

//Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade. Agora, a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".
let idade = prompt('Digite a sua idade');
if (idade >= 18) {
    alert('Pode tirar a habilitação!'); 
}

//Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
diaDaSemana = prompt('Qual é o dia da semana?');
if (diaDaSemana == 'Sábado') {
    alert('Bom fim de semana!');
} else if (diaDaSemana == 'Domingo') {
    alert('Bom fim de semana!');
} else {
    alert('Boa semana!');
}

//Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
numero = prompt('Digite um positivo ou negativo');
if (numero > 0) {
    alert('Número positivo!');
} else {
    alert('Número negativo!');
}

//Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!" no console do navegador. Caso contrário, mostre "Tente novamente para ganhar.".
pontuacao = 105;
if (pontuacao > 100) {
    console.log('Parabéns, você venceu!');
} else {
    console.log('Tente novamente para ganhar.');
}

//Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let saldoConta = 500; // Exemplo de saldo
alert(`Seu saldo é de R$${saldoConta}.`);

//Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nomeUsuarioNovo = prompt('Qual o seu nome?');
alert(`Boas vindas ${nomeUsuarioNovo}`);
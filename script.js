// filepath: c:\Users\guilherme.soares\Desktop\jogo\script.js

// Arrays for truths and challenges - edit these to add or modify questions
const truths = [
    "Qual é o seu maior medo?", // Editable truth question
    "Você já teve uma paixão secreta?", // Editable truth question
    "Qual foi a maior mentira que você já contou?", // Editable truth question
    "Se você pudesse mudar uma coisa em sua vida, o que seria?", // Editable truth question
    "Qual é o seu maior arrependimento?", // Editable truth question
];

const challenges = [
    "Cante uma música em voz alta.", // Editable challenge question
    "Faça 10 flexões.", // Editable challenge question
    "Envie uma mensagem engraçada para um amigo.", // Editable challenge question
    "Imite um animal até alguém adivinhar qual é.", // Editable challenge question
    "Dance por 1 minuto sem música.", // Editable challenge question
];

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to display a random truth or challenge
function displayQuestion(type) {
    let question;
    if (type === 'truth') {
        const shuffledTruths = shuffleArray([...truths]);
        question = shuffledTruths[0]; // Get a random truth
    } else if (type === 'challenge') {
        const shuffledChallenges = shuffleArray([...challenges]);
        question = shuffledChallenges[0]; // Get a random challenge
    }

    // Display the question on the screen
    const questionsDiv = document.querySelector('.questions');
    questionsDiv.innerHTML = `<h3>${question}</h3>`;
}

// Event listeners for buttons
document.querySelector('.truth').addEventListener('click', () => displayQuestion('truth'));
document.querySelector('.challenge').addEventListener('click', () => displayQuestion('challenge'));

let ultimoJogador = null; // Variável para armazenar o último jogador que jogou

// Função para escolher o próximo jogador
function escolherProximoJogador() {
    if (nomes.length === 0) {
        alert("Adicione jogadores antes de começar o jogo!");
        return;
    }

    let proximoJogador;
    do {
        const indiceAleatorio = Math.floor(Math.random() * nomes.length);
        proximoJogador = nomes[indiceAleatorio];
    } while (proximoJogador === ultimoJogador);

    ultimoJogador = proximoJogador;

    // Exibe o nome do jogador na tela
    const questionsDiv = document.querySelector('.questions');
    questionsDiv.innerHTML = `<h3>É a vez de: ${proximoJogador}</h3>`;
}

// Adicione um botão para iniciar a vez do próximo jogador
document.querySelector('.truth').addEventListener('click', () => {
    escolherProximoJogador();
    displayQuestion('truth');
});

document.querySelector('.challenge').addEventListener('click', () => {
    escolherProximoJogador();
    displayQuestion('challenge');
});

// Variável para controlar o estado do jogo
let jogoIniciado = false;

// Função para iniciar o jogo
function iniciarJogo() {
    if (nomes.length === 0) {
        alert("Adicione jogadores antes de começar o jogo!");
        return;
    }
    jogoIniciado = true;
    escolherProximoJogador();
    alert("O jogo começou! É a vez do primeiro jogador.");
}

// Função para resetar o jogo
function resetarJogo() {
    nomes.length = 0; // Limpa o array de nomes
    ultimoJogador = null; // Reseta o último jogador
    jogoIniciado = false; // Reseta o estado do jogo
    document.getElementById("listaDeNomes").innerHTML = ""; // Limpa a lista de nomes na tela
    document.querySelector('.questions').innerHTML = ""; // Limpa a área de perguntas
    alert("O jogo foi resetado!");
}

// Função para escolher o próximo jogador
function proximoJogador() {
    if (!jogoIniciado) {
        alert("O jogo ainda não começou! Clique em 'Começar' para iniciar.");
        return;
    }
    escolherProximoJogador();
}

// Event listeners para os botões
document.querySelector('.start').addEventListener('click', iniciarJogo);
document.querySelector('.reset').addEventListener('click', resetarJogo);
document.querySelector('.next').addEventListener('click', proximoJogador);
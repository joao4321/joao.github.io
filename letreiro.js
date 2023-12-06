document.addEventListener('DOMContentLoaded', function () {
    const letreiro = document.getElementById('letreiro');
    const mensagens = ['Eu', 'Amo', 'Fatec'];

    // Função para criar elementos de mensagem
    function criarMensagens() {
        for (const mensagem of mensagens) {
            const elementoMensagem = document.createElement('div');
            elementoMensagem.classList.add('mensagem');
            elementoMensagem.textContent = mensagem;
            letreiro.appendChild(elementoMensagem);
        }
    }

    // Função para mover o letreiro
    function moverLetreiro() {
        letreiro.style.animation = 'moverLetreiro 10s linear infinite';
    }

    // Chamar as funções para criar as mensagens e mover o letreiro
    criarMensagens();
    moverLetreiro();
});

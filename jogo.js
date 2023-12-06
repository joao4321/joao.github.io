document.addEventListener('DOMContentLoaded', function () {
    const tabuleiro = document.getElementById('tabuleiro');
    const cartoes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    let cartoesEmJogo = [];
    let cartoesVirados = [];

    // Embaralhar os cartões
    cartoes.sort(() => Math.random() - 0.5);

    // Criar os cartões no tabuleiro
    for (let i = 0; i < cartoes.length; i++) {
        const cartao = document.createElement('div');
        cartao.className = 'cartao';
        cartao.dataset.valor = cartoes[i];
        cartao.addEventListener('click', virarCartao);
        tabuleiro.appendChild(cartao);
    }

    function virarCartao() {
        const cartao = this;

        // Evitar que o mesmo cartão seja clicado duas vezes
        if (cartao.classList.contains('virado') || cartoesVirados.length === 2) {
            return;
        }

        // Virar o cartão
        cartao.classList.add('virado');
        cartoesVirados.push(cartao);

        // Verificar se dois cartões estão virados
        if (cartoesVirados.length === 2) {
            setTimeout(verificarMatch, 1000);
        }
    }

    function verificarMatch() {
        const [cartao1, cartao2] = cartoesVirados;

        if (cartao1.dataset.valor === cartao2.dataset.valor) {
            // Os cartões são iguais, mantenha-os virados
            cartoesEmJogo.push(cartao1, cartao2);
        } else {
            // Os cartões são diferentes, vire-os de volta
            cartao1.classList.remove('virado');
            cartao2.classList.remove('virado');
        }

        // Limpar os cartões virados
        cartoesVirados = [];

        // Verificar se o jogo foi concluído
        if (cartoesEmJogo.length === cartoes.length) {
            alert('Parabéns! Você ganhou o jogo da memória!');
        }
    }
});

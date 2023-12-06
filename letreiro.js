document.addEventListener('DOMContentLoaded', function () {
    const letreiro = document.getElementById('letreiro');
    
    // Adiciona o evento 'animationiteration' para reiniciar a animação quando ela termina
    letreiro.addEventListener('animationiteration', reiniciarAnimacao);

    // Função para reiniciar a animação
    function reiniciarAnimacao() {
        letreiro.style.animation = 'none';
        void letreiro.offsetWidth;  // Força uma re-renderização
        letreiro.style.animation = 'moverLetreiro 10s linear infinite';
    }
});

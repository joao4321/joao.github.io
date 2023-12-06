// Função para incrementar o contador
function incrementarContador() {
    // Obtém o elemento do contador
    var contadorElemento = document.getElementById('contador');

    // Obtém o valor atual do contador
    var contadorAtual = parseInt(contadorElemento.innerText);

    // Incrementa o contador
    contadorAtual++;

    // Atualiza o texto do contador
    contadorElemento.innerText = contadorAtual;
}

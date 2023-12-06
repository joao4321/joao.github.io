function atualizarRelogio() {
    var relogio = document.getElementById('relogio');
    
    var dataHoraAtual = new Date();
    var horas = adicionarZero(dataHoraAtual.getHours());
    var minutos = adicionarZero(dataHoraAtual.getMinutes());
    var segundos = adicionarZero(dataHoraAtual.getSeconds());
    
    relogio.innerText = `${horas}:${minutos}:${segundos}`;
}

function adicionarZero(numero) {
    return numero < 10 ? '0' + numero : numero;
}

// Atualizar o relógio imediatamente ao carregar a página
window.onload = function() {
    atualizarRelogio();
    // Atualizar o relógio a cada segundo
    setInterval(atualizarRelogio, 1000);
};

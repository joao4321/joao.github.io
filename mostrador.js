function atualizarMostrador() {
    var mostrador = document.getElementById('mostrador');
    
    var dataHoraAtual = new Date();
    var dataHoraFormatada = formatarDataHora(dataHoraAtual);
    
    mostrador.innerText = dataHoraFormatada;
}

function formatarDataHora(dataHora) {
    var dia = adicionarZero(dataHora.getDate());
    var mes = adicionarZero(dataHora.getMonth() + 1);
    var ano = dataHora.getFullYear();
    var horas = adicionarZero(dataHora.getHours());
    var minutos = adicionarZero(dataHora.getMinutes());
    var segundos = adicionarZero(dataHora.getSeconds());
    
    return `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;
}

function adicionarZero(numero) {
    return numero < 10 ? '0' + numero : numero;
}

// Atualizar o mostrador a cada segundo
setInterval(atualizarMostrador, 1000);

// Atualizar o mostrador imediatamente ao carregar a página
window.onload = atualizarMostrador;

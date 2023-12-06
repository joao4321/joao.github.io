var display = document.getElementById('display');
var expressao = '';

function adicionarCaractere(caractere) {
    expressao += caractere;
    atualizarDisplay();
}

function limparDisplay() {
    expressao = '';
    atualizarDisplay();
}

function apagarUltimo() {
    expressao = expressao.slice(0, -1);
    atualizarDisplay();
}

function calcularResultado() {
    try {
        expressao = eval(expressao).toString();
    } catch (error) {
        expressao = 'Erro';
    }
    atualizarDisplay();
}

function atualizarDisplay() {
    display.innerText = expressao;
}

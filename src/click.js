let incrementarButton = document.getElementById('incrementarButton');
let incremento; // Inicializada, será definida no onload

// --- Função de Carga Inicial ---
function carregarIncremento() {

    // 1. Carregar valor do incremento do localStorage ou iniciar com 1.
    let incrementoSalvo = localStorage.getItem('incremento');
    incremento = incrementoSalvo ? JSON.parse(incrementoSalvo) : { valor: 1 };

    // 2. Recarregar na tela os itens já armazenados.
    let itensUl = document.getElementById('itensUl');
    let j = 1;
    while (j < incremento.valor) {
        itensUl.insertAdjacentHTML('beforeend', `<li>${j}</li>`);
        j++;
    }
}

// 3. Executa carregarIncremento quando a página terminar de carregar.
window.onload = carregarIncremento;

// --- Eventos do Botão ---

incrementarButton.onclick = () => {
    let itensUl = document.getElementById('itensUl');

    // Adiciona item atual
    itensUl.insertAdjacentHTML('beforeend', `<li>${incremento.valor}</li>`);

    // Atualiza e salva no localStorage
    incremento.valor++;
    localStorage.setItem('incremento', JSON.stringify(incremento));
};

incrementarButton.onmouseover = () => {
    incrementarButton.style.backgroundColor = 'blue';
};

incrementarButton.onmouseout = () => {
    incrementarButton.style.backgroundColor = 'gray';
};

incrementarButton.addEventListener('dblclick', () => {
    console.log('Clicou no dblclick');
});

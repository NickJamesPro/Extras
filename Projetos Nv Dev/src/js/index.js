const botaoFiltrar = document.querySelector('.btn-filtrar');

botaoFiltrar.addEventListener('click', () => {
    const categoriaSelecionada = document.querySelector('#categoria').value.toLowerCase();
    const precoMaximo = parseFloat(document.querySelector('#preco').value);
    const cartas = document.querySelectorAll('.carta');

    cartas.forEach((carta) => {
        const categoriaCarta = carta.dataset.categoria.toLowerCase();
        const precoCarta = parseFloat(carta.dataset.preco);
        
        const categoriaValida = !categoriaSelecionada || categoriaCarta === categoriaSelecionada;
        const precoValido = isNaN(precoMaximo) || precoCarta <= precoMaximo;

        if (categoriaValida && precoValido) {
            carta.classList.add('mostrar');
            carta.classList.remove('esconder');
        } else {
            carta.classList.remove('mostrar');
            carta.classList.add('esconder');
        }
    });
});

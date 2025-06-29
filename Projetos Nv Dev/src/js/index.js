const botaoFiltrar = document.querySelector('.btn-filtrar');

 botaoFiltrar.addEventListener('click', function(){

    const categoriaSelecionada = document.querySelector ('#categoria') .value;
    
    const precoMaximoSelecionado = document.querySelector ('#preco') .value;

    const cartas = document.querySelectorAll('.carta')


        cartas.forEach(function (carta) {
        const categoriaCarta = carta.dataset.categoria;

        const precoCarta = carta.dataset.preco;

        let mostrarCarta = true;

        console.log('a categoria selecionada é: ', categoriaSelecionada);

        const temFiltroDecategoria = categoriaSelecionada !== '';

        const cartaNaoBateComFiltroDeCategoria = categoriaCarta.toLowerCase() !== categoriaSelecionada.toLowerCase();

        if (temFiltroDecategoria &&   cartaNaoBateComFiltroDeCategoria) {
            mostrarCarta = false;
        }

        const temFiltroDePreco = precoMaximoSelecionado !== "";
        
        const cartaNaoBateComFiltroDePreco = parseFloat(precoCarta) > parseFloat(precoMaximoSelecionado);


        if(precoMaximoSelecionado !== '' && parseFloat(precoCarta) > parseFloat(precoMaximoSelecionado)){
            mostrarCarta = false;
        }

        if (mostrarCarta){
            carta.classList.add('mostrar');
            carta.classList.remove('esconder');
        }else {
            carta.classList.remove('mostrar');
            carta.classList.add('esconder');
        }
    }); 
});
        

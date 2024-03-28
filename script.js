document.addEventListener('DOMContentLoaded', function() {
    const scrollToProdutos = document.getElementById('scrollToProdutos');
    const produtosscroll = document.getElementById('produtosscroll');


    scrollToProdutos.addEventListener('click', function() {
        produtosscroll.scrollIntoView({ behavior: 'smooth' });
    });
});


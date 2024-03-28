document.addEventListener('DOMContentLoaded', function() {
    const scrollToProdutos = document.getElementById('scrollToProdutos');
    const produtosscroll = document.getElementById('produtosscroll');


    scrollToProdutos.addEventListener('click', function() {
        produtosscroll.scrollIntoView({ behavior: 'smooth' });
    });
});





document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.getElementById('navitems');
    homeLink.addEventListener('click', function(event) {
        event.preventDefault(); // Evita o comportamento padrão do link
        location.reload(); // Recarrega a página
    });
});



//ROLAR SLIDES AUTOMATICAMENTE//
let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 7000)
function nextImage(){
    count++;
    if(count>3){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}

// Obtenha o botão e os slides
const scrollToProdutos = document.getElementById('scrollToProdutos');
const slides = document.querySelectorAll('.slide');

// Adicione um evento de escuta para a transição dos slides
slides.forEach(slide => {
        slide.addEventListener('transitionstart', () => {
            scrollToProdutos.classList.add('hidden');
        });
        
        slide.addEventListener('transitionend', () => {
            scrollToProdutos.classList.remove('hidden');
        });
    });














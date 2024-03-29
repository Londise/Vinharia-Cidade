document.addEventListener('DOMContentLoaded', function() {
    const scrollToProdutos = document.getElementById('scrollToProdutos');
    const produtosscroll = document.getElementById('produtosscroll');


    scrollToProdutos.addEventListener('click', function() {
        produtosscroll.scrollIntoView({ behavior: 'smooth' });
    });
});




//RELOAD EM HOME//
document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.getElementById('navitems');
    homeLink.addEventListener('click', function(event) {
        event.preventDefault(); // 
        location.reload(); // 
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

// BOTÕES E SLIDES
const scrollToProdutos = document.getElementById('scrollToProdutos');
const slides = document.querySelectorAll('.slide');

// VERIFICA AS TRANSIÇÕES DOS SLIDES
slides.forEach(slide => {
        slide.addEventListener('transitionstart', () => {
            scrollToProdutos.classList.add('hidden');
        });
        
        slide.addEventListener('transitionend', () => {
            scrollToProdutos.classList.remove('hidden');
        });
    });

//LUPA//
let boxBuscar = document.querySelector('.buscar-box')
let lupa = document.querySelector('.lupa-buscar')
let btnFechar = document.querySelector('.btn-fechar')



lupa.addEventListener('click', ()=> {
    boxBuscar.classList.add('ativar')
})

btnFechar.addEventListener('click', ()=> {
    boxBuscar.classList.remove('ativar')
})











//VERIFICAÇÃO DE IDADE//
function filtrodeidade(simounao) {
        if (simounao === 'sim') {
            document.getElementById('popup').style.display = 'none';
        }
        else if(simounao === 'nao') {
            window.location.href = 'https://www.google.com'
        }
    }





//FAZ COM QUE O BOTÃO NOSSOS PRODUTOS FAÇA UM SCROLL ATÉ A SUA SEÇÃO NA PÁGINA//
document.addEventListener('DOMContentLoaded', function() {
    const scrollToProdutos = document.getElementById('scrollToProdutos');
    const produtosscroll = document.getElementById('produtosscroll');


    scrollToProdutos.addEventListener('click', function() {
        produtosscroll.scrollIntoView({ behavior: 'smooth' });
    });
});



//FAZ COM QUE O BOTÃO QUEM SOMOS FAÇA UM SCROLL ATÉ A SUA SEÇÃO NA PÁGINA//
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('a[href="#QuemSomos"]').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('QuemSomos').scrollIntoView({ behavior: 'smooth' });
    });
});


//FAZ COM QUE O BOTÃO NOSSOS VINHOS FAÇA UM SCROLL ATÉ A SUA SEÇÃO NA PÁGINA//
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('a[href="#nossos-vinhos"]').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('produtosscroll').scrollIntoView({ behavior: 'smooth' });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('a[href="#Contato"]').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('contatoscroll').scrollIntoView({ behavior: 'smooth' });
    });
});


//FAZ COM QUE O HOVER NO TEXTO QUEM SOMOS FAÇA UM SCROLL ATÉ A SUA SEÇÃO NA PÁGINA//


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
}, 5000)
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











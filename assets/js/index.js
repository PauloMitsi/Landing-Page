
//listener para expandir e contrair o FAQ
$('[FAQ-botao]').on('click', (event) => {
    const conteudo = event.target.nextElementSibling;
    const botao = event.target;

    botao.classList.toggle('ativo');

    if (botao.classList.contains('ativo')) {
        conteudo.style.maxHeight = '100%';
        conteudo.style.transform = 'translateY(-1.5rem)';
        conteudo.style.padding = '1rem';
    } else {
        conteudo.style.padding = '0rem';
        conteudo.style.transform = 'translateY(0rem)';
        conteudo.style.maxHeight = '0';
    }
});

//Swiper da parte dos funcionários
const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

//Inicia a Biblioteca AOS para preparar as animações
AOS.init({ once: 'true' });

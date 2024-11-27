

// Seleciona o elemento que contém todas as imagens do carrossel

const track = document.getElementById('carouselTrack');

// Obtém o número de iamgens no carrossel
const items = document.querySelectorAll('.carousel-item');
let index = 0; //Índice que rastreia a iamgem atual

// Função que move o carrossel para a próxima imagem 
function moveCarousel() {

    // Incrementa o índice para avançar uma imagem
    index++;

// Verifica se o índice chegou à última imagem clonada
if (index >= items.length - 1) {
    // Pequeno atraso para permitir que  a transição termine

    setTimeout(() => {
        track.style.transition = 'none' //Remove a animação
        index = 0; //Volta ao início (primeira imagem)
        track.style.transform = `translateX(0)`; //Move para a primeira iamgem
    }, 500); //Tempo suficiente para completar a transição visível

} else {
    // Move o carrossel para a próxima imagem
    track.style.transition = 'transform 0.5s ease'; //Adiciona a animação

    track.style.transform = `translateX(-${index * 100}%)`; //Desloca o carrossel
  }
}

// Define um intervalo para mover o carrossel automaticamento a cada 3 segundos
setInterval(moveCarousel, 2000); 





const typed = new Typed('#typed-text', {
    strings: ["Olá seja Bem-vindo(a) no meu site", "Faça o seu orçamento aqui sem medo"], 
    typeSpeed: 80, //VELOCIDADE QUE SERÁ DIGITADO NOSSO TEXTO.
    backSpeed: 25, //VELOCODADE DE RETORNO DO TEXTO.
    loop: true, //FAZ COM QUE O TEXTO FIQUE EM EXECUÇÃO.
    showCursor: false, //AQUI ESTAMOS REMOVENDO O CURSOR PADRÃO DO HTML.
    fadeOut: true, //ADICIONA UMA TRANSICÃO (OPCIONAL).
});



ScrollReveal().reveal(".div3", {
    distance: "100px",
    origin: "right",
    duration: 1500,
});


ScrollReveal().reveal("..div6", {
    distance: "100px",
    origin: "right",
    duration: 1500,
});
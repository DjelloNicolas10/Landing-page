


// $(document).ready: Função que garante que o código dentro dela excute 
// somente após o HTML completo da página estar carregado.

$(document).ready(function() {


    // Seleciona o contêiner .carousel e aplica a função slick().
    // que ativa o carrossel com as configurações abaixo.
    $('.carousel').slick({
       
        // SlidesToShow: número de cards exibidos ao mesmo tempo no carrossel
        slidesToShow: 3, //Exibe 3 cards ao mesmo tempo.


        //slidesToScroll: define quantos cards serão deslizados ap mover o carrossel
        slidesToScroll: 1, //Move 1 card por vez ao deslizar.


        // infinite: quando true, o carrossel retorna ao início automaticamente
        infinie: true, //Mantém o carrossel em rotação contínua.
        
        
        // dots: quando true, ativa os pontos de navegação abaixo do carrossel.
        dots: true,  //Adiciona pontos de navegação para os usuários


        // arrows: exibe setas de navegação na laterais do carrossel
        arrows: true,  // Ativa as setas para navegar entre os cards
    });
});
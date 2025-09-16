document.addEventListener('DOMContentLoaded', () => {
    const transitionLink = document.getElementById('transition-link');
    const splitTransition = document.querySelector('.split-transition');

    // Intercepta o clique no link
    transitionLink.addEventListener('click', (event) => {
        event.preventDefault(); // Impede o comportamento padrão do link

        const destination = transitionLink.href;

        // Adiciona a classe que dispara a animação de "abertura"
        splitTransition.classList.add('split-transition-open');

        // Navega para a próxima página após a animação
        setTimeout(() => {
            window.location.href = destination;
        }, 800); // O tempo (800ms) deve ser o mesmo do `transition` no CSS
    });

    // Animação de "fechamento" ao carregar a nova página
    // Isso é importante para que a transição funcione ao retornar
    window.addEventListener('pageshow', (event) => {
        // Usa `persisted` para verificar se a página foi restaurada do cache do navegador
        // Se `persisted` for `true`, remove a classe para a animação
        if (event.persisted) {
            splitTransition.classList.remove('split-transition-open');
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os botões de filtro
    const filterButtons = document.querySelectorAll('.filter-btn');
    // Seleciona todos os cards de publicação (usando a classe base 'publicacao')
    const publicationCards = document.querySelectorAll('.publicacao'); 

    filterButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault(); // Impede o comportamento padrão de link
            
            // 1. Gerencia o estado "ativo" dos botões
            const activeFilter = document.querySelector('.filter-btn.active');
            if (activeFilter) {
                activeFilter.classList.remove('active');
            }
            this.classList.add('active');

            // 2. Obtém a categoria que deve ser filtrada (ex: 'artigos', 'ac', 'todos')
            const filterValue = this.getAttribute('data-filter');

            // 3. Itera sobre todos os cards de publicação
            publicationCards.forEach(card => {
                // Esconde o card por padrão
                card.classList.add('hidden'); 

                // Lógica de exibição:
                if (filterValue === 'todos') {
                    // Se o filtro for 'todos', remove a classe 'hidden' para exibir
                    card.classList.remove('hidden');

                } else if (card.classList.contains(filterValue)) {
                    // Se o card contém a classe da categoria clicada, ele é exibido
                    card.classList.remove('hidden');
                }
            document.addEventListener('DOMContentLoaded', () => {
    // Código antigo de filtragem foi removido, pois esta é uma nova funcionalidade.
    
    const toggleButtons = document.querySelectorAll('.filter-toggle');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const dropdown = this.closest('.filter-dropdown');
            const isCurrentlyOpen = dropdown.classList.contains('open');

            // 1. Fechar todos os outros dropdowns
            document.querySelectorAll('.filter-dropdown.open').forEach(openDropdown => {
                openDropdown.classList.remove('open');
                openDropdown.querySelector('.filter-toggle').setAttribute('aria-expanded', 'false');
            });

            // 2. Abrir ou fechar o dropdown clicado
            if (!isCurrentlyOpen) {
                dropdown.classList.add('open');
                this.setAttribute('aria-expanded', 'true');
            } else {
                dropdown.classList.remove('open');
                this.setAttribute('aria-expanded', 'false');
            }
        });
    });

  
});
            
            });

            
            
            document.querySelector('.publications-main-content').scrollIntoView({ behavior: 'smooth' });
        });
    });
});
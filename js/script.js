function filterAnimes() {
    // Obtém o valor digitado no campo de busca
    const searchQuery = document.getElementById('search').value.toLowerCase();
    
    // Obtém todos os cards de anime
    const animeCards = document.querySelectorAll('.anime-card');
    
    // Percorre cada card e verifica se o nome do anime contém o texto digitado
    animeCards.forEach(function(card) {
        const animeName = card.getAttribute('data-name').toLowerCase();
        
        // Se o nome do anime contém o texto da busca, exibe o card; caso contrário, oculta
        if (animeName.includes(searchQuery)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

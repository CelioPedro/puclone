// JavaScript para a página de produto

document.addEventListener('DOMContentLoaded', function() {
    const ingredientButtons = document.querySelectorAll('.ingredient-btn');

    ingredientButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove a classe 'selected' de todos os botões
            ingredientButtons.forEach(btn => btn.classList.remove('selected'));

            // Adiciona a classe 'selected' ao botão clicado
            this.classList.add('selected');
        });
    });

    const sauceButtons = document.querySelectorAll('.sauce-btn');

    sauceButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove a classe 'selected' de todos os botões de molho
            sauceButtons.forEach(btn => btn.classList.remove('selected'));

            // Adiciona a classe 'selected' ao botão clicado
            this.classList.add('selected');
        });
    });

    const drinkButtons = document.querySelectorAll('.drink-btn');

    drinkButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove a classe 'selected' de todos os botões de bebida
            drinkButtons.forEach(btn => btn.classList.remove('selected'));

            // Adiciona a classe 'selected' ao botão clicado
            this.classList.add('selected');
        });
    });

    const accompanimentButtons = document.querySelectorAll('.accompaniment-btn');

    accompanimentButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove a classe 'selected' de todos os botões de acompanhamento
            accompanimentButtons.forEach(btn => btn.classList.remove('selected'));

            // Adiciona a classe 'selected' ao botão clicado
            this.classList.add('selected');
        });
    });
});

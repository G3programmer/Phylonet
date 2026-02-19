function toggleBar() {
    const menu = document.querySelector('.late');
    const imagem = document.querySelector('.show');

    menu.classList.toggle('closed');

    // Se o menu estiver aberto (não tem a classe closed)
    if (!menu.classList.contains('closed')) {
        imagem.style.right = "400px"; // Valor dele aberto
    } else {
        imagem.style.right = "370px"; // Valor dele fechado
    }
}
// Simulando carregamento da página
window.addEventListener("load", function() {
    // Atraso de 2 segundos para simular o carregamento
    setTimeout(function() {
        document.getElementById('preloader').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }, 2000);
});

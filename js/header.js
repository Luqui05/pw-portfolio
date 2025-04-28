export default function exibirCabecalho() {
    const themeToggleButton = document.getElementById("theme-toggle");

    if (themeToggleButton) {
      themeToggleButton.addEventListener("click", alternarTema);
    }
    iniciarMenuLateral();
}
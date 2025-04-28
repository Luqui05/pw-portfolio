export function alternarTema() {
  document.body.classList.toggle("dark-theme");
  const isDark = document.body.classList.contains("dark-theme");
  localStorage.setItem("tema", isDark ? "dark" : "light");
}

export function carregarTema() {
  const temaSalvo = localStorage.getItem("tema") || "light";
  if (temaSalvo === "dark") {
    document.body.classList.add("dark-theme");
  }
}

export async function exibirBotaoAlterarTema() {
  const response = await fetch("./componentes/theme-toggle.html");
  const themeToggleHTML = await response.text();
  document.getElementById("include-theme-toggle").innerHTML = themeToggleHTML;

  const themeToggleButton = document.getElementById("theme-toggle");
  if (themeToggleButton) {
    themeToggleButton.addEventListener("click", alternarTema);
  }
}
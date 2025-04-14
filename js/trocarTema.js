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

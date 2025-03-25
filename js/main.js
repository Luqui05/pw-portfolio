import { renderizarProjetos } from "./projetos.js";
import { exibirCitacao } from "./citacoes.js";
import { iniciarMenuLateral } from "./menu.js";

document.addEventListener("DOMContentLoaded", () => {
  renderizarProjetos();
  exibirCitacao();
  iniciarMenuLateral();
});

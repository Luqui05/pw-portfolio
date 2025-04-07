import { renderizarProjetos } from "./projetos.js";
import { exibirCitacao } from "./citacoes.js";
import { iniciarMenuLateral } from "./menu.js";
import { carregarElementosEssenciais } from "./contentloaded.js";

document.addEventListener("DOMContentLoaded", () => {
  renderizarProjetos?.();
  exibirCitacao?.();
  carregarElementosEssenciais({
    header: () => iniciarMenuLateral(),
    footer: () => exibirCitacao() // garante que o <footer> existe antes de inserir citação
  });
});

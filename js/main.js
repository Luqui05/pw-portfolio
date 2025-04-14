import { renderizarProjetos } from "./projetos.js";
import { exibirCitacao } from "./citacoes.js";
import { iniciarMenuLateral } from "./menu.js";
import { carregarElementosEssenciais } from "./contentloaded.js";
import { carregarTema, alternarTema } from "./trocarTema.js";

document.addEventListener("DOMContentLoaded", () => {
  carregarTema();

  carregarElementosEssenciais({
    header: () => {
      const themeToggleButton = document.getElementById("theme-toggle");

      if (themeToggleButton) {
        themeToggleButton.addEventListener("click", alternarTema);
      }
      iniciarMenuLateral();
    },
    footer: () => exibirCitacao()
  });
  renderizarProjetos?.();
  exibirCitacao?.();
});

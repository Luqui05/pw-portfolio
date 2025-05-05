import { renderizarProjetos } from "./projetos.js";
import { exibirCitacao } from "./citacoes.js";
import { iniciarMenuLateral } from "./menu.js";
import { carregarElementosEssenciais } from "./contentloaded.js";
import {
    carregarTema,
    alternarTema,
    exibirBotaoAlterarTema,
} from "./trocarTema.js";
import exibirCabecalho from "./header.js";
import { renderizarHabilidades } from "./habilidades.js";
import { renderizarExperiencia } from "./experiencia.js";
import { renderizarEducacao } from "./educacao.js";

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
        footer: () => exibirCitacao(),
        themeToggleButton: () => exibirBotaoAlterarTema(),
    });
    if (document.querySelector(".habilidades-grid")) {
        renderizarHabilidades();
    }
    if (document.querySelector(".experiencia-grid")) {
      renderizarExperiencia();
    }
  
    if (document.querySelector(".educacao-grid")) {
      renderizarEducacao();
    }
    renderizarProjetos?.();
    exibirCitacao?.();
});

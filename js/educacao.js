export async function renderizarEducacao() {
    const container = document.querySelector(".educacao-grid");
    if (!container) return;

    try {
        const response = await fetch("../json/educacao.json");
        const educacao = await response.json();

        container.innerHTML = educacao
            .map(
                (edu) => `
          <div class="conteudo-card educacao-card">
            <h2>${edu.instituicao}</h2>
            <p><strong>Período:</strong> ${edu.periodo || "N/A"}</p>
            ${
                edu.plataforma
                    ? `<p><strong>Plataforma:</strong> ${edu.plataforma}</p>`
                    : ""
            }
            ${
                edu.emitido
                    ? `<p><strong>Emitido:</strong> ${edu.emitido}</p>`
                    : ""
            }
            ${
                edu.horas
                    ? `<p><strong>Total de horas:</strong> ${edu.horas}</p>`
                    : ""
            }
            <p>${edu.descricao}</p>
          </div>`
            )
            .join("");
    } catch (error) {
        console.error("Erro ao carregar a educação:", error);
        container.innerHTML =
            "<p>Erro ao carregar a educação. Tente novamente mais tarde.</p>";
    }
}

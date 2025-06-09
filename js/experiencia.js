export async function renderizarExperiencia() {
    const container = document.querySelector(".experiencia-grid");
    if (!container) return;

    try {
        const response = await fetch("./js/json/experiencias.json");
        const experiencias = await response.json();

        container.innerHTML = experiencias
            .map(
                (exp) => `
          <div class="conteudo-card experiencia-card">
            <div class="cabecalho-exp">
              <h2>${exp.cargo}</h2>
              <img src="${exp.logo}" alt="Logo da empresa ${exp.empresa}" class="logo-exp" />
            </div>
            <p><strong>Empresa:</strong> ${exp.empresa}</p>
            <p><strong>Período:</strong> ${exp.periodo}</p>
            <p>${exp.descricao}</p>
          </div>`
            )
            .join("");
    } catch (error) {
        console.error("Erro ao carregar as experiências:", error);
        container.innerHTML =
            "<p>Erro ao carregar as experiências. Tente novamente mais tarde.</p>";
    }
}

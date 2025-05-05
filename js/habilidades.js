export async function renderizarHabilidades() {
  const container = document.querySelector(".habilidades-grid");
  if (!container) return;

  try {
    const response = await fetch("../json/habilidades.json");
    const categorias = await response.json();

    container.innerHTML = categorias
      .map(
        (categoria) => `
        <div class="conteudo-card habilidade-card">
          <h2>${categoria.categoria}</h2>
          <ul class="lista-habilidades">
            ${categoria.habilidades
              .map(
                (habilidade) => `
                <li>
                  <span>${habilidade.nome}</span>
                  <div class="barra">
                    <div class="preenchimento" style="width: ${habilidade.nivel}%"></div>
                  </div>
                </li>`
              )
              .join("")}
          </ul>
        </div>`
      )
      .join("");
  } catch (error) {
    console.error("Erro ao carregar as habilidades:", error);
    container.innerHTML = "<p>Erro ao carregar as habilidades. Tente novamente mais tarde.</p>";
  }
}

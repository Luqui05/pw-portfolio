export async function renderizarProjetos() {
  const container = document.getElementById("repositorios");
  if (!container) return;

  try {
    const response = await fetch('../json/projetos.json')
    const projetos = await response.json();

    container.innerHTML = projetos
    .map(
      (projeto) => `
      <div class="projeto-card conteudo-card">
        <img class="projeto-imagem" src="${projeto.imagem}" alt="${
        projeto.nome
      }">
        <div class="projeto-info">
          <h3>${projeto.nome}</h3>
          <p>${projeto.descricao}</p>
          <p><strong>Tecnologias:</strong> ${projeto.tecnologias.join(", ")}</p>
          <button class="git-button">
            <a href="${projeto.url}" target="_blank">Ver no GitHub</a>
          </button>
        </div>
      </div>`
    )
    .join("");
  } catch (error) {
    console.error('Erro ao carregar os projetos:', error);
    container.innerHTML = '<p>Erro ao carregar os projetos.</p>'
  }
}

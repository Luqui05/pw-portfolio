export async function buscarCitacao() {
  try {
    const response = await fetch(
      "https://api.allorigins.win/get?url=" +
        encodeURIComponent("https://zenquotes.io/api/random")
    );
    const data = await response.json();
    const quote = JSON.parse(data.contents);
    return quote[0]; // { q: "texto", a: "autor" }
  } catch (error) {
    console.error("Erro ao buscar citação:", error);
  }
}

export async function exibirCitacao() {
  const containers = document.querySelectorAll(".quotes");
  const citacao = await buscarCitacao();

  if (!citacao) return;

  containers.forEach((container) => {
    container.innerHTML = `
      <div class="quote-card">
        <p>"${citacao.q}"</p>
        <p><strong>- ${citacao.a}</strong></p>
      </div>
    `;
  });
}

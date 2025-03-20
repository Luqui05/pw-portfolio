const projetos = [
  {
    nome: "Projeto de Microsserviços para tomada de decisões",
    organizacao: "Time-7-Desafio03",
    descricao:
      "Plataforma baseada em microsserviços para auxiliar na tomada de decisões em grupo." +
      " Utiliza Spring Boot para a lógica de negócios e Kafka para comunicação assíncrona entre os serviços, garantindo escalabilidade e performance.\n" +
      " O projeto inclui módulos para gestão de funcionários, propostas e resultados, além de um gateway API e um servidor Eureka para descoberta de serviços.",
    repositorios: [
      "funcionarios",
      "propostas",
      "resultados",
      "eureka-server",
      "cloud-gateway",
    ],
    tecnologias: ["Java", "Spring Boot", "Kafka", "Eureka"],
    url: "https://github.com/Time-7-Desafio03",
    imagem: "../img/votacao-imagem.jpg",
  },
  {
    nome: "Projeto-Notes",
    organizacao: "Luqui05",
    descricao:
      "Aplicação full-stack para gerenciamento de notas, desenvolvida com Node.js, Express e MongoDB.\n " +
      "Permite criação, edição, visualização e exclusão de notas.\n " +
      "Utiliza Handlebars como template engine e Bootstrap para estilização, oferecendo uma interface simples e intuitiva.",
    repositorios: ["Projeto-Notes"],
    tecnologias: [
      "Handlebars",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    url: "https://github.com/Luqui05/Projeto-Notes",
    imagem: "../img/notes.jpg",
  },
];

document.addEventListener("DOMContentLoaded", async function () {
  const reposContainer = document.getElementById("repositorios");
  const quotesContainers = document.querySelectorAll(".quotes");

  async function buscarCitacao() {
    try {
      const response = await fetch(
        "https://api.allorigins.win/get?url=" +
          encodeURIComponent("https://zenquotes.io/api/random")
      );
      const data = await response.json();
      const quote = JSON.parse(data.contents);

      return quote[0];
    } catch (error) {
      console.error("Erro ao buscar citação:", error);
    }
  }

  buscarCitacao();

  async function exibirCitação() {
    try {
      const citação = await buscarCitacao();

      if (!citação) {
        console.error("Citação não encontrada.");
        return;
      }

      quotesContainers.forEach((container) => {
        container.innerHTML = `
                <div class="quote-card">
                    <p>"${citação.q}"</p>  <!-- 'q' é o texto da citação na API ZenQuotes -->
                    <p><strong>- ${citação.a}</strong></p>  <!-- 'a' é o autor -->
                </div>
            `;
      });
    } catch (error) {
      console.error("Erro ao buscar citação: ", error);
    }
  }

  exibirCitação();

  if (reposContainer) {
    for (const projeto of projetos) {
      const cardHTML = `
        <div class="projeto-card">
            <img class="projeto-imagem" src="${projeto.imagem}" alt="${
        projeto.nome
      }">
            <div class="projeto-info">
                <h3>${projeto.nome}</h3>
                <p>${projeto.descricao}</p>
                <p><strong>Tecnologias:</strong> ${projeto.tecnologias.join(
                  ", "
                )}</p>
                <p><a href="${
                  projeto.url
                }" target="_blank">Ver no GitHub</a></p>
            </div>
        </div>
      `;

      reposContainer.innerHTML += cardHTML;
    }
  }
});

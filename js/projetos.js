export const projetos = [
  {
    nome: "Projeto de Microsserviços para tomada de decisões",
    organizacao: "Time-7-Desafio03",
    descricao: `Plataforma baseada em microsserviços para auxiliar na tomada de decisões em grupo. 
      Utiliza Spring Boot para a lógica de negócios e Kafka para comunicação assíncrona entre os serviços, garantindo escalabilidade e performance.
      O projeto inclui módulos para gestão de funcionários, propostas e resultados, além de um gateway API e um servidor Eureka para descoberta de serviços.`,
    repositorios: [
      "funcionarios",
      "propostas",
      "resultados",
      "eureka-server",
      "cloud-gateway",
    ],
    tecnologias: ["Java", "Spring Boot", "Kafka", "Eureka"],
    url: "https://github.com/Time-7-Desafio03",
    imagem: "img/votacao-imagem.jpg",
  },
  {
    nome: "Projeto-Notes",
    organizacao: "Luqui05",
    descricao: `Aplicação full-stack para gerenciamento de notas, desenvolvida com Node.js, Express e MongoDB.
      Permite criação, edição, visualização e exclusão de notas.
      Utiliza Handlebars como template engine e Bootstrap para estilização, oferecendo uma interface simples e intuitiva.`,
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
    imagem: "img/notes.jpg",
  },
];

export function renderizarProjetos() {
  const container = document.getElementById("repositorios");
  if (!container) return;

  container.innerHTML = projetos
    .map(
      (projeto) => `
      <div class="projeto-card">
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
}

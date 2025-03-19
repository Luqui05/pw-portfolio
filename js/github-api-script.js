document.addEventListener("DOMContentLoaded", function () {
  const reposContainer = document.getElementById("repositorios");
  const username = "Luqui05";

  fetch(`https://api.github.com/users/${username}/repos`)
    .then((response) => response.json())
    .then((repos) => {
      reposContainer.innerHTML = "";
      repos.forEach((repo) => {
        const repoElement = document.createElement("div");
        repoElement.classList.add("repo-item");
        repoElement.innerHTML = `
          <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
          <p>${repo.description || "Sem descrição"}</p>
        `;
        reposContainer.appendChild(repoElement);
      });
    })
    .catch((error) => {
      console.error("Erro ao buscar repositórios: ", error);
      reposContainer.innerHTML = "<p>Erro ao buscar projetos</p>";
    });
});

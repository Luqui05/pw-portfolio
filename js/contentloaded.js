function carregarComponente(id, caminho, callback) {
  fetch(caminho)
    .then((res) => res.text())
    .then((html) => {
      document.getElementById(id).innerHTML = html;
      if (callback) callback();
    })
    .catch((err) => console.error("Erro ao carregar o componente:", err));
}

export function carregarElementosEssenciais(callbacks = {}) {
  carregarComponente("include-header", "componentes/header.html", callbacks.header);
  carregarComponente("include-footer", "componentes/footer.html", callbacks.footer);
}

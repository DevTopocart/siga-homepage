const textosPrompt = [
  "Os dados do SIGA estão disponíveis em quatro categorias temáticas, selecione uma camada e um formato para realizar o download",
  "Os metadados do município são disponibilizados em um catálogo no formato PDF, faça o download dos mesmos através do link",
  "O SIGA é o Sistema de Informações Geográficas na Web de Angra dos Reis, clique no link abaixo para visualizar e manipular dados geograficos do município",
];
const sigwebLink = document.getElementById("a-sigweb");
const metadadosLink = document.getElementById("a-metadados");

document.querySelectorAll(".servico").forEach((servico, index) => {
  servico.querySelectorAll("img, p").forEach((element) => {
    element.addEventListener("mouseover", (event) => {
      event.stopPropagation();
      const textoPrompt = document.getElementById("prompt-texto");

      textoPrompt.innerText = textosPrompt[index];
      textoPrompt.style.color = "rgba(255, 255, 255, 1)";

      if (index === 1) {
        textoPrompt.classList.add("prompt-sigweb-string");
        metadadosLink.style.display = "block";
        sigwebLink.style.display = "none";
      } else if (index === 2) {
        textoPrompt.classList.add("prompt-sigweb-string");
        sigwebLink.style.display = "block";
        metadadosLink.style.display = "none";
      } else {
        textoPrompt.classList.remove("prompt-sigweb-string");
        sigwebLink.style.display = "none";
        metadadosLink.style.display = "none";
      }
    });

    element.classList.add("clickable");
  });
});

const textoPrompt = document.getElementById("prompt-texto");
textoPrompt.innerText = "Selecione um dos serviços acima";
textoPrompt.style.color = "rgba(255, 255, 255, 0.7)";
sigwebLink.style.display = "none";
metadadosLink.style.display = "none";

const textosPrompt = [
  "Selecione uma camada para realizar o download:",
  "Selecione uma camada e um formato de dado para realizar o download:",
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

      if (index === 0) {
        textoPrompt.classList.add("prompt-string");
        document.getElementById("firstSet").style.display = "flex";
        document.getElementById("secondSet").style.display = "none";
        textoPrompt.after(document.getElementById("firstSet"));
        sigwebLink.style.display = "none";
        metadadosLink.style.display = "none";
      } else if (index === 1) {
        textoPrompt.classList.add("prompt-string");
        document.getElementById("firstSet").style.display = "none";
        document.getElementById("secondSet").style.display = "flex";
        textoPrompt.after(document.getElementById("secondSet"));
        sigwebLink.style.display = "none";
        metadadosLink.style.display = "none";
      } else if (index === 2) {
        document.getElementById("firstSet").style.display = "none";
        document.getElementById("secondSet").style.display = "none";
        textoPrompt.classList.add("prompt-string");
        metadadosLink.style.display = "block";
        sigwebLink.style.display = "none";
      } else {
        document.getElementById("firstSet").style.display = "none";
        document.getElementById("secondSet").style.display = "none";
        textoPrompt.classList.add("prompt-string");
        sigwebLink.style.display = "block";
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

document.getElementById("Botao1").addEventListener("click", function () {
  const selectedOption = document.getElementById("Seletor1").value;
  const apiKey =
    "AAAAB3NzaC1yc2EAAAADAQABAAABAQCUoDtVtIK52TpuQqPmYL+/SgndGTDG5OObi7o1lShhn3Pf1lAtRKOKrsYPJXmSv34/tuA7t+iGlNUL6h6hQr9HOtuKj1b8JpFrBIjlkcIabl/rT9ndmpDgC9a1oTsin6y6ifNvl2tPvHWPzgxDa4Z3hGGxZeFPocplN/Up0CARg1NZrbNb+1YCJeoMRka//d+bJjxO6ndgpJ7Hhukrp/dqgl/+Hfv6ID2wKE0+019cu8wmv+zVGAe7ctY8jPwaa8qGWdwF2lGPTurH2I//jjtxPQrmscR88xVNO68Jr5GY0Rfih3MR+NnVdc5GcvPkGjutHHrv4+wOz+MKUkj4xOIf";
  const url = `https://siga.angra.rj.gov.br/portal/mapas_tematicos?option=${selectedOption}&key=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
});

document.getElementById("Botao2").addEventListener("click", function () {
  const selectedOption1 = document.getElementById("Seletor2").value;
  const selectedOption2 = document.getElementById("Seletor3").value;
  const apiKey = "your-api-key";
  const url = `https://siga.angra.rj.gov.br/portal/camadas?option1=${selectedOption1}&option2=${selectedOption2}&key=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
});

const textosPrompt = ["Mapas", "Downloads", "Metadados", "Sig Web"];

document.querySelectorAll(".servico").forEach((servico, index) => {
  servico.querySelectorAll("img, p").forEach((element) => {
    element.addEventListener("mouseover", (event) => {
      event.stopPropagation();
      const prompt = document.getElementById("prompt");
      const textoPrompt = document.getElementById("prompt-texto");

      textoPrompt.innerText = textosPrompt[index];
      prompt.style.opacity = "1";
      textoPrompt.style.color = "#ffffff";
    });

    element.addEventListener("mouseout", (event) => {
      event.stopPropagation();
      const prompt = document.getElementById("prompt");
      const textoPrompt = document.getElementById("prompt-texto");

      textoPrompt.innerText = "Selecione um dos serviços acima";
      prompt.style.opacity = "0.7";
      textoPrompt.style.color = "#839298";
    });

    element.classList.add("clickable");
  });
});

const textoPrompt = document.getElementById("prompt-texto");
textoPrompt.innerText = "Selecione um dos serviços acima";

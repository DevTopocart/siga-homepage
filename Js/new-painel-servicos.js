function showDescricaoServico(servico) {
  $("#descricao-servico-mapa-tematico").addClass("inactive");
  $("#descricao-servico-downloads").addClass("inactive");
  $("#descricao-servico-metadados").addClass("inactive");
  $("#descricao-servico-sigweb").addClass("inactive");

  $("#descricao-servico-" + servico).removeClass("inactive");
}

$("#botao-servico-mapa-tematico").hover(
  () => {
    showDescricaoServico("mapa-tematico");
  },
  () => {}
);
$("#botao-servico-downloads").hover(
  () => {
    showDescricaoServico("downloads");
  },
  () => {}
);
$("#botao-servico-metadados").hover(
  () => {
    showDescricaoServico("metadados");
  },
  () => {}
);
$("#botao-servico-sigweb").hover(
  () => {
    showDescricaoServico("sigweb");
  },
  () => {}
);

async function sendRequestAndOpenTab() {
  const extensionSelector = document.querySelector("#file-extension-select");
  const filenameSelector = document.querySelector("#file-name-select");

  const extension = extensionSelector.value;
  const filename = filenameSelector.value;

  const response = await fetch("https://siga.angra.rj.gov.br/portal/camadas", {
    headers: {
      "API-key":
        "AAAAB3NzaC1yc2EAAAADAQABAAABAQCUoDtVtIK52TpuQqPmYL+/SgndGTDG5OObi7o1lShhn3Pf1lAtRKOKrsYPJXmSv34/tuA7t+iGlNUL6h6hQr9HOtuKj1b8JpFrBIjlkcIabl/rT9ndmpDgC9a1oTsin6y6ifNvl2tPvHWPzgxDa4Z3hGGxZeFPocplN/Up0CARg1NZrbNb+1YCJeoMRka//d+bJjxO6ndgpJ7Hhukrp/dqgl/+Hfv6ID2wKE0+019cu8wmv+zVGAe7ctY8jPwaa8qGWdwF2lGPTurH2I//jjtxPQrmscR88xVNO68Jr5GY0Rfih3MR+NnVdc5GcvPkGjutHHrv4+wOz+MKUkj4xOIf",
    },
  });

  const data = await response.json();

  data.forEach((item) => {
    if (item.extension === extension && item.filename === filename) {
      window.open(item.url, "_blank");
    }
  });
}

async function sendRequestAndOpenTabs() {
  const healthUnitSelector = document.querySelector("#mapa-filename-select");

  const selectedOption = healthUnitSelector.value;

  const response = await fetch(
    "https://siga.angra.rj.gov.br/portal/mapas_tematicos",
    {
      headers: {
        "API-key":
          "AAAAB3NzaC1yc2EAAAADAQABAAABAQCUoDtVtIK52TpuQqPmYL+/SgndGTDG5OObi7o1lShhn3Pf1lAtRKOKrsYPJXmSv34/tuA7t+iGlNUL6h6hQr9HOtuKj1b8JpFrBIjlkcIabl/rT9ndmpDgC9a1oTsin6y6ifNvl2tPvHWPzgxDa4Z3hGGxZeFPocplN/Up0CARg1NZrbNb+1YCJeoMRka//d+bJjxO6ndgpJ7Hhukrp/dqgl/+Hfv6ID2wKE0+019cu8wmv+zVGAe7ctY8jPwaa8qGWdwF2lGPTurH2I//jjtxPQrmscR88xVNO68Jr5GY0Rfih3MR+NnVdc5GcvPkGjutHHrv4+wOz+MKUkj4xOIf",
      },
    }
  );

  const data = await response.json();

  data.forEach((item) => {
    const wordsInOption = selectedOption.split(" ");
    const wordsInFilename = item.filename.split(" ");

    if (wordsInOption.every((word) => wordsInFilename.includes(word))) {
      window.open(item.url, "_blank");
    }
  });
}

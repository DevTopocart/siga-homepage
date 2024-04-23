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

const apiUrlIntranet = `https://api.intranet.topocart.dev.br`

async function getListOfCamadas() {
  try {
    
    const request = await fetch(apiUrlIntranet + "/gateway/siga?endpoint=/portal/camadas", {
      headers: {
        "User-Agent": "siga-homepage",
        "API-key":
          "AAAAB3NzaC1yc2EAAAADAQABAAABAQCUoDtVtIK52TpuQqPmYL+/SgndGTDG5OObi7o1lShhn3Pf1lAtRKOKrsYPJXmSv34/tuA7t+iGlNUL6h6hQr9HOtuKj1b8JpFrBIjlkcIabl/rT9ndmpDgC9a1oTsin6y6ifNvl2tPvHWPzgxDa4Z3hGGxZeFPocplN/Up0CARg1NZrbNb+1YCJeoMRka//d+bJjxO6ndgpJ7Hhukrp/dqgl/+Hfv6ID2wKE0+019cu8wmv+zVGAe7ctY8jPwaa8qGWdwF2lGPTurH2I//jjtxPQrmscR88xVNO68Jr5GY0Rfih3MR+NnVdc5GcvPkGjutHHrv4+wOz+MKUkj4xOIf",
      },
    });
  
    return request.json()
  } catch (error) {
    
    console.warn('Não foi possivel obter a lista de camadas', error)
  }
}

async function getListOfMapasTematicos() {
  try {
    
    const request = await fetch(apiUrlIntranet + "/gateway/siga?endpoint=/portal/mapas_tematicos", {
      headers: {
        "User-Agent": "siga-homepage",
        "API-key":
          "AAAAB3NzaC1yc2EAAAADAQABAAABAQCUoDtVtIK52TpuQqPmYL+/SgndGTDG5OObi7o1lShhn3Pf1lAtRKOKrsYPJXmSv34/tuA7t+iGlNUL6h6hQr9HOtuKj1b8JpFrBIjlkcIabl/rT9ndmpDgC9a1oTsin6y6ifNvl2tPvHWPzgxDa4Z3hGGxZeFPocplN/Up0CARg1NZrbNb+1YCJeoMRka//d+bJjxO6ndgpJ7Hhukrp/dqgl/+Hfv6ID2wKE0+019cu8wmv+zVGAe7ctY8jPwaa8qGWdwF2lGPTurH2I//jjtxPQrmscR88xVNO68Jr5GY0Rfih3MR+NnVdc5GcvPkGjutHHrv4+wOz+MKUkj4xOIf",
      },
    });
  
    return request.json()
  } catch (error) {
    
    console.warn('Não foi possivel obter a lista de mapas tematicos', error)
  }
}

function downloadMapaTematico() {
  const mapaTematico = $("#mapa-tematico-selector").val()
  window.open(mapaTematico, '_blank')
}

function downloadCamada() {
  const camada = $("#camada-selector").val()
  window.open(camada, '_blank')
}

$(document).ready(async () => {

  console.log(`lets go`)
  const listOfCamadas = await getListOfCamadas()
  console.log("🚀 ~ $ ~ listOfCamadas:", listOfCamadas)
  const listOfMapasTematicos = await getListOfMapasTematicos()
  console.log("🚀 ~ $ ~ listOfMapasTematicos:", listOfMapasTematicos)

  listOfMapasTematicos.forEach((mapaTematico) => {

    $(`#mapa-tematico-selector`).append($('<option>', {
        value: mapaTematico.path,
        text: mapaTematico.filename
    }));
  })

  listOfCamadas.forEach((camada) => {

    $(`#camada-selector`).append($('<option>', {
        value: camada.path,
        text: `${camada.filename} (${camada.extension})`
    }));
  })
});

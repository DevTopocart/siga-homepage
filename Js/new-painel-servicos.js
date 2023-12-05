function showDescricaoServico(servico) {

    $('#descricao-servico-mapa-tematico').addClass('inactive')
    $('#descricao-servico-downloads').addClass('inactive')
    $('#descricao-servico-metadados').addClass('inactive')
    $('#descricao-servico-sigweb').addClass('inactive')

    $('#descricao-servico-'+servico).removeClass('inactive')
}

$('#botao-servico-mapa-tematico').hover(() => {
    showDescricaoServico('mapa-tematico')
}, () => {
})
$('#botao-servico-downloads').hover(() => {
    showDescricaoServico('downloads')
}, () => {
})
$('#botao-servico-metadados').hover(() => {
    showDescricaoServico('metadados')
}, () => {
})
$('#botao-servico-sigweb').hover(() => {
    showDescricaoServico('sigweb')
}, () => {
})
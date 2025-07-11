let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOrdenarPorPreco.addEventListener('click', ordenarPorPreco)

function ordenarPorPreco(){
    let livrosOrdenadosPorPreco = livros.sort((a, b) => a.preco - b.preco)
    exibirOsLivrosNaTela(livrosOrdenadosPorPreco)
}

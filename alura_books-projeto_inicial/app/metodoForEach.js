const elementoParaInserirLivros = document.getElementById('livros')

function exibirOsLivrosNaTela(listaDeLivros){
    elementoParaInserirLivros.innerHTML = ' '
    listaDeLivros.forEach(livro => {
        let disponibilidade = verificarDisponibilidade(livro)

     elementoParaInserirLivros.innerHTML += `
     <div class="livro">
      <img class="${disponibilidade}" 
      src="${livro.imagem}" 
      alt="Capa do livro Cangaceiro JavaScript" />
      <h2 class="livro__titulo">
       ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">${livro.preco}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>`
 })
}

function verificarDisponibilidade(livro){
    if(livro.quantidade <= 0){
        return 'livro_imagens indisponivel'
    }
    return 'livro_imagem'
}
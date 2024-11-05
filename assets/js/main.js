function criaCartao(categoria,pergunta,resposta){
    let container = document.getElementById('container')
    let article = document.createElement('article')
    article.className = 'cartao'
    article.innerHTML = `
    <div class="cartao-conteudo">
      <h3> ${categoria} </h3>
       <div class="cartao-conteudo-pergunta">
      <p> ${pergunta} </p>
      </div>
     <div class="cartao-conteudo-resposta">
      <p> ${resposta} </p>
      </div>
      </div>
      `
    container.appendChild(article)
}

criaCartao('Biologia','Qual a função da mitocôndria?','Criar ATP')
criaCartao('Piada','porque a galinha atravessou a rua?','pra chegar ao outro lado!')
criaCartao('cantada','você é deficiente de perna?','pq seria mancada sua não me dar uma chance')
 
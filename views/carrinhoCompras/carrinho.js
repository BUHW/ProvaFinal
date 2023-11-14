
const btnMobile = document.getElementById('btnMobile');

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu);


// document.addEventListener('DOMContentLoaded', function () {
//     // Obtém o ID do item da URL
//     var urlParams = new URLSearchParams(window.location.search);
//     var itemId = urlParams.get('item');
  
//     // Exemplo de dados fixos (substitua isso com suas informações reais)
//     var catalogoDeItens = {
//       1: { nome: 'Item 1', imagem: '../img/FotoParafusos/parafuso-chipboard.png' },
//       2: { nome: 'Item 2', imagem: '../img/FotoParafusos/parafuso-chipboard.png' },
//       // Adicione mais itens conforme necessário
//     };
  
//     // Verifica se o ID do item é válido
//     if (itemId && catalogoDeItens[itemId]) {
//       // Obtém os detalhes do item
//       var item = catalogoDeItens[itemId];
  
//       // Exibe os detalhes do item na página
//       exibirDetalhesDoItem(item);
//     } else {
//       // Se o ID do item não for válido, redireciona de volta para a página do catálogo
//       window.location.href = 'catalogo.html';
//     }
  
//     // Função para exibir os detalhes do item na página
//     function exibirDetalhesDoItem(item) {
//       // Exibe a imagem do item
//       var imagemElement = document.getElementById('imagemItem');
//       imagemElement.src = item.imagem;
  
//       // Exibe o nome do item
//       var nomeElement = document.getElementById('nomeItem');
//       nomeElement.textContent = item.nome;
//     }
//   });
  
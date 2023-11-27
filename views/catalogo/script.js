// Janela modal

function abrirModal(numero) {
    const modal = document.getElementById(`janela-modal${numero}`);
    modal.classList.add('abrir');

    modal.addEventListener('click', (e) => {
        if (e.target.id == `fechar${numero}` || e.target.id == `janela-modal${numero}`) {
            modal.classList.remove('abrir');
        }
    });
}

// Btn buscar
// Função para pesquisar os itens do catálogo

function configurarPesquisa(inputId, btnId) {
    const inputPesquisa = document.getElementById(inputId);
    const btnBusca = document.getElementById(btnId);

    function pesquisarCatalogo() {
        const termoPesquisa = inputPesquisa.value.toLowerCase();
        const catalogItems = document.querySelectorAll('.card-item');

        catalogItems.forEach(item => {
            const titulo = item.querySelector('h3').textContent.toLowerCase();

            if (titulo.includes(termoPesquisa)) {
                item.classList.remove('oculto');
            } else {
                item.classList.add('oculto');
            }
        });
    }

    btnBusca.addEventListener('click', pesquisarCatalogo);

    // Adicione um ouvinte de evento para capturar a tecla Enter pressionada
    inputPesquisa.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            pesquisarCatalogo();
        }
    });
}

// Configurar pesquisas individuais
// pesquisa inox
configurarPesquisa('search0', 'btnBusca0');
// pesquisa zincado branco
configurarPesquisa('search1', 'btnBusca1');
// pesquisa zincado amarelo
configurarPesquisa('search2', 'btnBusca2');
// pesquisa aco
configurarPesquisa('search3', 'btnBusca3');
// pesquisa ferragens
configurarPesquisa('search4', 'btnBusca4');
// pesquisa buchas
configurarPesquisa('search5', 'btnBusca5');

// botao whats
document.getElementById('whatsappIcon').addEventListener('click', function () {
    // Mostrar o modal quando o ícone do WhatsApp for clicado
    document.getElementById('whatsappModal').style.display = 'block';
});

document.getElementById('closeModal').addEventListener('click', function () {
    // Fechar o modal quando o botão "Fechar" for clicado
    document.getElementById('whatsappModal').style.display = 'none';
});

document.getElementById('numeroWhatsapp').addEventListener('change', function () {
    var selectedNumber = this.value;
    var text = "Olá, tudo bem? Gostaria de fazer um Orçamento!";
    var whatsappLink = "https://wa.me/" + selectedNumber + "?text=" + encodeURIComponent(text);

    // Atualizar o link do WhatsApp no ícone com o atributo target para abrir em uma nova aba
    var whatsappIcon = document.getElementById('whatsappIcon');
    whatsappIcon.setAttribute('href', whatsappLink);
    window.open(whatsappLink, '_blank');

    // Fechar o modal após a seleção do número
    document.getElementById('whatsappModal').style.display = 'none';

    location.reload();
});


// Trocar de conteudo

var divAtualmenteVisivel = null;

function toggleDiv(divId) {
    var div = document.getElementById(divId);

    if (div === divAtualmenteVisivel) {
        div.style.display = "none";
        divAtualmenteVisivel = null;
    } else {
        if (divAtualmenteVisivel !== null) {
            divAtualmenteVisivel.style.display = "none";
        }
        div.style.display = "block";
        divAtualmenteVisivel = div;
    }
}

document.getElementById("btn-inox").addEventListener("click", function () {
    toggleDiv("content-inox");
});

document.getElementById("btn-zin-branco").addEventListener("click", function () {
    toggleDiv("content-zin-branco");
});

document.getElementById("btn-zin-amarelo").addEventListener("click", function () {
    toggleDiv("content-zin-amarelo");
});

document.getElementById("btn-aco").addEventListener("click", function () {
    toggleDiv("content-aco");
});

document.getElementById("btn-ferragem").addEventListener("click", function () {
    toggleDiv("content-ferragem");
});

document.getElementById("btn-bucha").addEventListener("click", function () {
    toggleDiv("content-bucha");
});

// menu humburguer

const btnMobile = document.getElementById('btnMobile');

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu);

// Toast

// function mostrarToast() {
//     const toast = document.getElementById("toast");
//     toast.classList.add("show");

//     // Esconde o toast após 3 segundos
//     setTimeout(() => {
//         toast.classList.remove("show");
//     }, 3000);
// }

// document.addEventListener('DOMContentLoaded', function () {
//     // Adiciona um ouvinte de evento a todos os botões com a classe 'adicionarCarrinhoBtn'
//     var adicionarCarrinhoBtns = document.querySelectorAll('.btn-add-carrinho');

//     adicionarCarrinhoBtns.forEach(function (btn) {
//         btn.addEventListener('click', function (event) {
//             // Obtém o ID do item associado ao botão clicado
//             var itemId = event.currentTarget.getAttribute('data-item-id');

//             // Chama uma função para adicionar o item ao carrinho
//             // mostrarToast()
//             adicionarAoCarrinho(itemId);

//         });
//     });

//     // Função para adicionar o item ao carrinho
//     function adicionarAoCarrinho(itemId) {
//         // Aqui você pode fazer o que precisar com o item, como adicionar ao carrinho
//         // e redirecionar para a página do carrinho
//         window.location.href = '../carrinhoCompras/carrinho.html?item=' + itemId;
//     }
// });


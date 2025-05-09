// Simulação de dados dos produtos
const produtos = [
    { id: 1, nome: "Camisa Flamengo Premium", preco: 299.90, imagem: "imagens/produto1.jpg" },
    { id: 2, nome: "Camisa Brasil Retro", preco: 349.90, imagem: "imagens/produto2.jpg" },
    { id: 3, nome: "Camisa Personalizada", preco: 199.90, imagem: "imagens/produto3.jpg" }
];

// Carrinho (armazenado no localStorage)
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

// Atualiza o contador do carrinho
function atualizarCarrinho() {
    document.getElementById('cart-count').textContent = carrinho.length;
}

// Carrega produtos em destaque na Home
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('featured-products');
    produtos.forEach(produto => {
        container.innerHTML += `
            <div class="produto">
                <img src="${produto.imagem}" alt="${produto.nome}">
                <h3>${produto.nome}</h3>
                <p>R$ ${produto.preco.toFixed(2)}</p>
                <button onclick="adicionarAoCarrinho(${produto.id})">Comprar</button>
            </div>
        `;
    });
});

// Adiciona produto ao carrinho
function adicionarAoCarrinho(id) {
    const produto = produtos.find(p => p.id === id);
    carrinho.push(produto);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarCarrinho();
    alert(`${produto.nome} foi adicionado ao carrinho!`);
}
// Sistema de Gerenciamento do Carrinho - Get Eats

class CarrinhoManager {
    constructor() {
        this.carrinho = [];
        this.cupomAplicado = null;
        this.taxaEntrega = 5.00; // Taxa fixa de entrega
        this.carregarCarrinho();
    }

    // Adicionar item ao carrinho
    adicionarItem(item) {
        // Verificar se o item já existe no carrinho
        const itemExistente = this.carrinho.find(cartItem => cartItem.id === item.id);

        if (itemExistente) {
            // Se existe, aumentar quantidade
            itemExistente.quantidade += item.quantidade || 1;
        } else {
            // Se não existe, adicionar novo item
            const novoItem = {
                id: item.id,
                nome: item.nome,
                preco: item.preco,
                quantidade: item.quantidade || 1,
                imagem: item.imagem,
                customizacoes: item.customizacoes || {}
            };
            this.carrinho.push(novoItem);
        }

        this.salvarCarrinho();
        this.atualizarInterface();
    }

    // Remover item do carrinho
    removerItem(id) {
        this.carrinho = this.carrinho.filter(item => item.id !== id);
        this.salvarCarrinho();
        this.atualizarInterface();
    }

    // Alterar quantidade de um item
    alterarQuantidade(id, novaQuantidade) {
        if (novaQuantidade <= 0) {
            this.removerItem(id);
            return;
        }

        const item = this.carrinho.find(item => item.id === id);
        if (item) {
            item.quantidade = novaQuantidade;
            this.salvarCarrinho();
            this.atualizarInterface();
        }
    }

    // Calcular subtotal (soma de todos os itens)
    calcularSubtotal() {
        return this.carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);
    }

    // Calcular desconto do cupom
    calcularDesconto() {
        if (!this.cupomAplicado) return 0;

        // Cupons disponíveis: cupom5 (R$5,00), cupom10 (R$10,00), cupom12 (R$12,00)
        const cupons = {
            'cupom5': 5.00,
            'cupom10': 10.00,
            'cupom12': 12.00
        };

        return cupons[this.cupomAplicado] || 0;
    }

    // Calcular total
    calcularTotal() {
        const subtotal = this.calcularSubtotal();
        const desconto = this.calcularDesconto();
        const total = subtotal + this.taxaEntrega - desconto;
        return Math.max(total, 0); // Não permitir total negativo
    }

    // Aplicar cupom
    aplicarCupom(codigo) {
        // Lista de cupons válidos (poderia vir de uma API)
        const cuponsValidos = ['cupom5', 'cupom10', 'cupom12'];

        if (cuponsValidos.includes(codigo.toLowerCase())) {
            this.cupomAplicado = codigo.toLowerCase();
            this.salvarCarrinho();
            this.atualizarInterface();
            return true;
        }

        return false;
    }

    // Remover cupom
    removerCupom() {
        this.cupomAplicado = null;
        this.salvarCarrinho();
        this.atualizarInterface();
    }

    // Salvar carrinho no localStorage
    salvarCarrinho() {
        const dadosCarrinho = {
            itens: this.carrinho,
            cupom: this.cupomAplicado
        };
        localStorage.setItem('carrinho_geteats', JSON.stringify(dadosCarrinho));
    }

    // Carregar carrinho do localStorage
    carregarCarrinho() {
        const dadosSalvos = localStorage.getItem('carrinho_geteats');
        if (dadosSalvos) {
            const dados = JSON.parse(dadosSalvos);
            this.carrinho = dados.itens || [];
            this.cupomAplicado = dados.cupom || null;
        }
    }

    // Limpar carrinho
    limparCarrinho() {
        this.carrinho = [];
        this.cupomAplicado = null;
        this.salvarCarrinho();
        this.atualizarInterface();
    }

    // Obter quantidade total de itens
    obterQuantidadeTotal() {
        return this.carrinho.reduce((total, item) => total + item.quantidade, 0);
    }

    // Alias para obterTotalItens (compatibilidade)
    obterTotalItens() {
        return this.obterQuantidadeTotal();
    }

    // Verificar se carrinho está vazio
    estaVazio() {
        return this.carrinho.length === 0;
    }

    // Atualizar interface (será implementado nas páginas específicas)
    atualizarInterface() {
        // Este método será sobrescrito nas páginas que usam o carrinho
        console.log('Carrinho atualizado:', this.carrinho);
    }

    // Obter resumo do carrinho
    obterResumo() {
        const desconto = this.calcularDesconto();
        return {
            subtotal: this.calcularSubtotal(),
            desconto: desconto > 0 ? desconto : 0, // Retornar desconto como valor positivo
            taxaEntrega: this.taxaEntrega,
            total: this.calcularTotal(),
            quantidadeItens: this.obterQuantidadeTotal(),
            cupomAplicado: this.cupomAplicado
        };
    }
}

// Instância global do gerenciador do carrinho
const carrinhoManager = new CarrinhoManager();

// Funções de utilidade para integração com páginas HTML
function adicionarAoCarrinho(item) {
    carrinhoManager.adicionarItem(item);
}

function removerDoCarrinho(id) {
    carrinhoManager.removerItem(id);
}

function alterarQuantidadeCarrinho(id, quantidade) {
    carrinhoManager.alterarQuantidade(id, quantidade);
}

function aplicarCupomCarrinho(codigo) {
    return carrinhoManager.aplicarCupom(codigo);
}

function obterResumoCarrinho() {
    return carrinhoManager.obterResumo();
}

function limparCarrinhoCompleto() {
    carrinhoManager.limparCarrinho();
}

// Exportar para uso em outros módulos (se necessário)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CarrinhoManager, carrinhoManager };
}

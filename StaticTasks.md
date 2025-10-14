# Componentes Base (Fundação Global)

Estes componentes são a fundação do sistema, criados uma única vez em uma pasta compartilhável (`/components/base`). Eles são reutilizados por todos os módulos (USER e ADM) para garantir a consistência do design.

| Componente | Origem | Descrição e Reutilização |
| :--- | :--- | :--- |
| **InputTexto** | Criado em **BASE** | Componente base para campos de entrada de texto. Utilizado em Login, Cadastro, Busca e Formulários (Pagamento, Edição ADM). |
| **BotaoPrincipal** | Criado em **BASE** | Botão de ação primária com alta visibilidade. Utilizado para ações importantes (Ex: Entrar, Finalizar Pedido, Salvar ADM). |
| **CardBase** | Criado em **BASE** | Estrutura esquelética base para exibição de itens na lista. É o ponto de partida para a criação de `CardProdutoUser` e `CardProdutoADM`. |
| **BarraDeBusca** | Criado em **BASE** | Container que agrupa o `InputTexto` e o ícone de lupa. Usado na Home (USER) e Gerenciar Cardápio (ADM). |
| **NavegacaoInferior** | Criado em **BASE** | Barra de navegação fixa com ícones na parte inferior da tela. Usada em todas as telas principais do USER e ADM. |

# Módulo USER - Mapa de Componentes e Páginas

Este documento detalha a criação e reutilização de componentes específicos do lado do cliente, referenciando a Base Global (BASE) onde aplicável.

## Páginas e Componentes

### 1. Página: Splash / Carregamento

| Componente | Origem / Reutilização | Variação / Detalhe |
| :--- | :--- | :--- |
| **LogoArt** | **Criado Aqui** | Usado para Tela de carregamento. |
| **FundoPrincipal** | **Criado Aqui** |

### 2. Página: Login / Cadastro

| Componente | Origem / Reutilização | Variação / Detalhe |
| :--- | :--- | :--- |
| **InputTexto** | (Reutilizado da **BASE**) | Usado para Email e Senha. |
| **BotaoPrincipal** | (Reutilizado da **BASE**) | Botão: Entrar. |
| **BotaoSocial** | **Criado Aqui** | Botões com ícones (Ex: Google, Apple). |
| **LinkAcao** | **Criado Aqui** | Links secundários (Ex: Esqueceu a Senha). |

### 3. Página: Home (Cardápio)

| Componente | Origem / Reutilização | Variação / Detalhe |
| :--- | :--- | :--- |
| **BarraDeBusca** | (Reutilizado da **BASE**) | |
| **NavegacaoInferior** | (Reutilizado da **BASE**) | |
| **CardProdutoUser** | **Criado Aqui** (Herda do CardBase) | Variação principal do card. Inclui **preço**, **avaliação** e **tempo de preparo**. |
| **BotaoCarrinhoFlutuante** | **Criado Aqui** | Componente Flutuante. Exibe o ícone do carrinho e o total de itens/valor. |

### 4. Página: Detalhe do Produto

| Componente | Origem / Reutilização | Variação / Detalhe |
| :--- | :--- | :--- |
| **CardProdutoUser** | (Reutilizado da Home) | Exibição em destaque (maior), focando em descrição e seletores. |
| **BotaoVoltar** | **Criado Aqui** | Ícone de seta "Voltar" no cabeçalho. |
| **SeletorTamanho** | **Criado Aqui** | Componente de seleção visual para tamanho (P, M, G, etc.). |
| **SeletorAdicionais** | **Criado Aqui** | Componente de escolha de adicionais (checkbox/switch). |
| **BotaoAdicionarCarrinho** | **Criado Aqui** | Botão no rodapé fixo com o preço total (Ex: Adicionar ao Carrinho R$ XX,XX). |

### 5. Página: Carrinho

| Componente | Origem / Reutilização | Variação / Detalhe |
| :--- | :--- | :--- |
| **BotaoVoltar** | (Reutilizado do Detalhe do Produto) | |
| **CardProdutoCarrinho** | **Criado Aqui** (Herda do CardProdutoUser) | Variação do card que inclui o **SeletorQuantidade** e o **Botão de Remover** o item. |
| **SeletorQuantidade** | **Criado Aqui** | Botão/Input com [+] e [-] para ajustar a quantidade de um item. |
| **ResumoPedido** | **Criado Aqui** | Exibe Subtotal, Taxas, Descontos e Total. |
| **CampoCupom** | **Criado Aqui** | Input de cupom (`InputTexto` + Botão de Aplicação). |
| **BotaoPrincipal** | (Reutilizado da **BASE**) | Botão: Finalizar Pedido. |

### 6. Página: Pagamento

| Componente | Origem / Reutilização | Variação / Detalhe |
| :--- | :--- | :--- |
| **ResumoPedido** | (Reutilizado do Carrinho) | Visualização do pedido (não editável). |
| **InputTexto** | (Reutilizado da **BASE**) | Usado para Número do Cartão, Validade, CVV. |
| **FormularioPagamento** | **Criado Aqui** | Container que agrupa os campos de pagamento. |
| **BotaoPrincipal** | (Reutilizado da **BASE**) | Botão: Pagar/Confirmar. |

### 7. Página: Pedido Confirmado

| Componente | Origem / Reutilização | Variação / Detalhe |
| :--- | :--- | :--- |
| **ResumoPedido** | (Reutilizado do Carrinho) | Visualização final. |
| **MensagemSucesso** | **Criado Aqui** | Ícone + Título de confirmação. |
| **BotaoSecundario** | **Criado Aqui** | Botão de baixa prioridade (Ex: Voltar ao Cardápio). |


# Módulo ADM - Mapa de Componentes e Páginas

Este documento detalha a criação e reutilização de componentes do lado da administração, referenciando a Base Global (BASE) onde aplicável.

## Páginas e Componentes

### 8. Página: Splash / Carregamento

| Componente | Origem / Reutilização | Variação / Detalhe |
| :--- | :--- | :--- |
| **LogoArt** | **Criado Aqui** | Usado para Tela de carregamento. |
| **FundoPrincipal** | **Criado Aqui** |

### 9. Página: Login ADM

| Componente | Origem / Reutilização | Variação / Detalhe |
| :--- | :--- | :--- |
| **InputTexto** | (Reutilizado da **BASE**) | Usado para Nome e Senha. |
| **BotaoPrincipal** | (Reutilizado da **BASE**) | Botão: Entrar. |
| **LinkAcao** | (Reutilizado do Login USER) | Esqueceu a senha? |
| **Checkbox** | **Criado Aqui** | Para a função "Lembrar de mim". |

### 10. Página: Gerenciar Cardápio

| Componente | Origem / Reutilização | Variação / Detalhe |
| :--- | :--- | :--- |
| **BarraDeBusca** | (Reutilizado da **BASE**) | |
| **NavegacaoInferior** | (Reutilizado da **BASE**) | |
| **CardProdutoADM** | **Criado Aqui** (Herda do CardBase) | Variação para ADM. Inclui o **BotaoAcaoADM** na lateral (sem preço, mas com status/categoria). |
| **BotaoAcaoADM** | **Criado Aqui** | Botões pequenos de ação (Editar, Excluir) dentro do card. |
| **BotaoAdicionarFlutuante** | **Criado Aqui** | Botão grande `+` flutuante no canto da tela para adicionar novo item. |

### 11. Página: Cadastro/Edição de Produto

| Componente | Origem / Reutilização | Variação / Detalhe |
| :--- | :--- | :--- |
| **BotaoVoltar** | (Reutilizado do Detalhe do Produto USER) | |
| **InputTexto** | (Reutilizado da **BASE**) | Campos: Nome do produto, Descrição, Preço. |
| **BotaoPrincipal** | (Reutilizado da **BASE**) | Botão Salvar/Adicionar. |
| **SeletorCategoria** | **Criado Aqui** | Campo de seleção (`dropdown`) para a categoria. |

### 12. Página: Dashboard / Estatísticas

| Componente | Origem / Reutilização | Variação / Detalhe |
| :--- | :--- | :--- |
| **NavegacaoInferior** | (Reutilizado da **BASE**) | |
| **CardEstatistica** | **Criado Aqui** | Cartão/Widget para exibir dados métricos (Ex: Pedidos Hoje, Faturamento). |
| **GraficoBarra** | **Criado Aqui** | Componente visual para dados de comparação (Ex: Produtos mais vendidos). |
| **GraficoTicketMedio** | **Criado Aqui** | Componente visual para exibir a evolução do ticket médio. |

# Módulo USER - Extensão Desktop (Web)

Este documento detalha os componentes e as variações de reutilização necessários para a versão Desktop (Web) do Módulo USER.

#### I. Novos Componentes Criados (Exclusivos Web)

| Componente | Origem | Descrição e Uso |
| :--- | :--- | :--- |
| **BarraTopoWeb** | **Criado Aqui** | Barra de navegação horizontal **fixa no topo** da tela. Contém logo, MenuNavegacaoWeb e ícones de usuário/carrinho. |
| **MenuNavegacaoWeb** | **Criado Aqui** | Menu de navegação por texto no topo (Ex: Novidades, Favoritos). |
| **CardFavoritoDestaque** | **Criado Aqui** | Cards promocionais grandes (Ex: "Burger Favorito", "Suco Favorito") com preço em destaque. |
| **ModalLoginCadastroWeb** | **Criado Aqui** | Estrutura modal centralizada que contém os campos de login e cadastro. Reutiliza o InputTexto e BotaoPrincipal. |
| **ModalLateralCarrinho** | **Criado Aqui** | Painel lateral **fixo à direita** que contém o carrinho de compras. Na web, ele substitui a página inteira de carrinho. |
| **CardMetodoPagamento** | **Criado Aqui** | Cards ou botões que representam as opções de pagamento (Ex: Pix, Apple Pay, Google Pay). |

#### II. Estruturas Reutilizadas e Adaptações (Web)

### 13. Estrutura: Home Web, Login e Cadastro (Desktop)

| Componente | Origem / Reutilização | Variação / Detalhe |
| :--- | :--- | :--- |
| **NavegacaoInferior** | (Reutilizado da **BASE**) | **Substituído** pela `BarraTopoWeb` no desktop. |
| **CardProdutoUser** | (Reutilizado da Home Mobile) | Mesmo componente base, mas adaptado para um layout de *grid* ou maior. |
| **BotaoCarrinhoFlutuante** | (Criado na Home Mobile) | **Substituído** pelo `ModalLateralCarrinho` (o ícone fica na `BarraTopoWeb`). |
| **InputTexto** | (Reutilizado da **BASE**) | Usado dentro do `ModalLoginCadastroWeb` para Email, Senha e Nome. |
| **BotaoPrincipal** | (Reutilizado da **BASE**) | Usado dentro do `ModalLoginCadastroWeb`. |

### 14. Estrutura: Carrinho e Pagamento Web (Modais)

| Componente | Origem / Reutilização | Variação / Detalhe |
| :--- | :--- | :--- |
| **CardProdutoCarrinho** | (Criado no Carrinho Mobile) | Reutilizado dentro do `ModalLateralCarrinho`. Inclui o SeletorQuantidade e o botão de remover. |
| **ResumoPedido** | (Criado no Carrinho Mobile) | Reutilizado dentro do `ModalLateralCarrinho`. |
| **FormularioPagamento** | (Criado no Pagamento Mobile) | Reutilizado no Modal de Confirmação de Pagamento, com os InputTexto e o botão Confirmar. |

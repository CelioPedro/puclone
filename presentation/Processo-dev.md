# Demonstração do Sistema
[Demonstração em Vídeo](demoge.mp4)

# Processo de Desenvolvimento

## Metodologia

O projeto "Get Eats" foi desenvolvido seguindo uma abordagem ágil inspirada no Scrum, adaptada para o contexto acadêmico.

## Ferramentas Utilizadas

### Desenvolvimento
- **HTML5**: Estruturação das páginas
- **CSS3**: Estilização e responsividade
- **JavaScript (ES6+)**: Lógica de negócio e interatividade
- **LocalStorage**: Persistência de dados no navegador

### Controle de Versão
- **Git**: Controle de versão distribuído
- **GitHub**: Hospedagem do repositório e colaboração

### Comunicação
- **Teams**: Comunicação diária da equipe

### Design e Prototipagem
- **Figma**: Criação de wireframes e protótipos

## Estrutura do Projeto

O projeto segue uma organização modular com separação clara de responsabilidades:

```
src/
├── index.html              # Página inicial
├── admin.html              # Portal administrativo
├── paginas/                # Páginas específicas
│   ├── cardapio.html       # Catálogo de produtos
│   ├── carrinho.html       # Carrinho de compras
│   ├── login.html          # Autenticação usuário
│   ├── loginADM.html       # Autenticação admin
│   ├── perfil.html         # Perfil do usuário
│   ├── perfilADM.html      # Perfil administrativo
│   ├── pedidos.html        # Histórico de pedidos
│   ├── pagamento.html      # Processamento de pagamento
│   ├── pedido-confirmado.html # Confirmação de pedido
│   ├── pedido-status.html  # Acompanhamento de pedido
│   ├── splash.html         # Tela de carregamento
│   ├── splashADM.html      # Tela de carregamento admin
│   ├── cadastro.html       # Cadastro de usuário
│   ├── addprodutoADM.html  # Adição de produto
│   ├── editprodutoADM.html # Edição de produto
│   ├── admin-cardapio.html # Gerenciamento de cardápio
│   ├── estatisticasADM.html # Estatísticas administrativas
│   └── [páginas de produto individuais]
├── recursos/
│   ├── css/                # Folhas de estilo
│   │   ├── base/           # Reset e tipografia
│   │   ├── componentes.css # Componentes reutilizáveis
│   │   ├── principal.css   # Estilos principais
│   │   ├── config/         # Variáveis CSS
│   │   ├── paginas/        # Estilos específicos de página
│   │   └── utilities/      # Utilitários CSS
│   ├── js/                 # Scripts JavaScript
│   │   ├── api.js          # API de dados
│   │   ├── auth.js         # Autenticação usuário
│   │   ├── authADM.js      # Autenticação admin
│   │   ├── admin.js        # Lógica administrativa
│   │   ├── carrinho.js     # Gerenciamento do carrinho
│   │   ├── cadastro.js     # Cadastro de usuário
│   │   ├── login.js        # Login usuário
│   │   ├── perfil.js       # Perfil usuário
│   │   ├── perfilADM.js    # Perfil admin
│   │   ├── pedidos.js      # Histórico de pedidos
│   │   ├── pagamento.js    # Processamento de pagamento
│   │   ├── produto.js      # Detalhes do produto
│   │   ├── splash.js       # Tela de carregamento
│   │   ├── desktop-auth.js # Autenticação desktop
│   │   ├── desktop-cart.js # Carrinho desktop
│   │   ├── desktop-order-confirmation.js # Confirmação desktop
│   │   ├── desktop-order-history.js # Histórico desktop
│   │   ├── desktop-order-tracking.js # Rastreamento desktop
│   │   ├── desktop-payment.js # Pagamento desktop
│   │   ├── desktop-pedidos.js # Pedidos desktop
│   │   └── desktop-profile.js # Perfil desktop
│   └── assets/             # Recursos estáticos
│       ├── icons/          # Ícones SVG
│       ├── imagen/         # Imagens de produtos
│       └── logos/          # Logos da marca
└── README.md               # Documentação do projeto
```

## Processo de Desenvolvimento

### Fase 1: Planejamento e Design (Semanas 1-2)
- Definição dos requisitos funcionais e não funcionais
- Criação de personas e histórias de usuários
- Desenvolvimento de wireframes e protótipos no Figma
- Definição da arquitetura da aplicação

### Fase 2: Desenvolvimento do Core (Semanas 3-6)
- Implementação da estrutura HTML básica
- Desenvolvimento do sistema de autenticação
- Criação da API de dados com localStorage
- Implementação do carrinho de compras
- Desenvolvimento das páginas principais (cardápio, perfil, pedidos)

### Fase 3: Funcionalidades Avançadas (Semanas 7-10)
- Implementação do painel administrativo
- Sistema de gerenciamento de produtos
- Funcionalidades de pagamento e acompanhamento de pedidos
- Integração de todas as funcionalidades

### Fase 4: Polimento e Testes (Semanas 11-12)
- Refinamento da interface responsiva
- Testes de usabilidade e funcionalidade
- Correção de bugs e otimização de performance
- Preparação para entrega final

## Desafios Encontrados

Durante o desenvolvimento, a equipe enfrentou diversos desafios:

1. **Responsividade**: Garantir uma experiência consistente em dispositivos móveis, tablets e desktops exigiu atenção especial aos breakpoints e layouts flexíveis.

2. **Gerenciamento de Estado**: Como a aplicação funciona apenas com frontend e localStorage, foi necessário implementar um sistema robusto de gerenciamento de estado para sincronizar dados entre diferentes páginas.

3. **Integração de Funcionalidades**: Coordenar a interação entre diferentes módulos (autenticação, carrinho, pedidos) sem um backend centralizado foi um desafio técnico significativo.

4. **Performance**: Otimizar o carregamento de imagens e scripts para garantir uma experiência fluida, especialmente em dispositivos móveis.

## Soluções Implementadas

Para enfrentar os desafios identificados, foram implementadas as seguintes soluções:

1. **Sistema de Breakpoints**: Utilização de media queries CSS para diferentes tamanhos de tela (mobile: <768px, tablet: 768-1024px, desktop: >1024px).

2. **API Centralizada**: Desenvolvimento de uma API JavaScript (api.js) que centraliza o acesso aos dados no localStorage, garantindo consistência e reutilização.

3. **Gerenciamento de Estado**: Implementação de um sistema de eventos customizados para sincronizar mudanças de estado entre diferentes componentes da aplicação.

4. **Otimização de Assets**: Compressão de imagens e implementação de lazy loading para melhorar a performance.

## Resultados Alcançados

O projeto "Get Eats" foi desenvolvido com sucesso, atendendo a todos os requisitos funcionais e não funcionais definidos. A aplicação oferece:

- **Painel Administrativo Completo**: Gerenciamento total do cardápio com adição, edição e remoção de produtos.
- **Experiência do Cliente Otimizada**: Navegação intuitiva, carrinho de compras funcional e sistema de pedidos completo.
- **Interface Responsiva**: Compatibilidade perfeita com dispositivos móveis, tablets e desktops.
- **Sistema de Autenticação Seguro**: Autenticação separada para usuários e administradores.
- **Funcionalidades Avançadas**: Acompanhamento de pedidos, histórico, pagamentos simulados e estatísticas administrativas.

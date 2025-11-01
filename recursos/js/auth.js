// Módulo de autenticação usando localStorage
class AuthManager {
  constructor() {
    this.USERS_KEY = 'geteats_users';
    this.CURRENT_USER_KEY = 'geteats_current_user';
  }

  // Salvar usuário no localStorage
  salvarUsuario(userData) {
    const users = this.obterUsuarios();
    users.push(userData);
    localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
  }

  // Obter todos os usuários
  obterUsuarios() {
    const users = localStorage.getItem(this.USERS_KEY);
    return users ? JSON.parse(users) : [];
  }

  // Verificar login
  verificarLogin(email, senha) {
    const users = this.obterUsuarios();
    const user = users.find(u => u.email === email && u.senha === senha);

    if (user) {
      // Salvar usuário logado
      localStorage.setItem(this.CURRENT_USER_KEY, JSON.stringify(user));
      return user;
    }

    return null;
  }

  // Obter usuário logado
  obterUsuarioLogado() {
    const user = localStorage.getItem(this.CURRENT_USER_KEY);
    return user ? JSON.parse(user) : null;
  }

  // Verificar se usuário está logado
  estaLogado() {
    return this.obterUsuarioLogado() !== null;
  }

  // Logout
  logout() {
    localStorage.removeItem(this.CURRENT_USER_KEY);
    // Limpar carrinho do usuário ao fazer logout
    const usuarioLogado = this.obterUsuarioLogado();
    if (usuarioLogado) {
      const chaveCarrinho = `carrinho_geteats_${usuarioLogado.email}`;
      localStorage.removeItem(chaveCarrinho);
    }
  }

  // Atualizar dados do usuário logado
  atualizarUsuarioLogado(userData) {
    if (this.estaLogado()) {
      localStorage.setItem(this.CURRENT_USER_KEY, JSON.stringify(userData));
    }
  }
}

// Instância global
const authManager = new AuthManager();

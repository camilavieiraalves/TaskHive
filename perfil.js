// Seleciona os elementos principais
const inputNome = document.querySelector('input[type="text"]');
const inputEmail = document.querySelector('input[type="email"]');
const botaoEditar = document.querySelector('.edit-btn');
const botaoSalvar = document.querySelector('.save-btn');
const botoesMenu = document.querySelectorAll('.menu-btn');

// Carregar dados salvos do localStorage ao abrir a página
window.addEventListener('DOMContentLoaded', () => {
  const nomeSalvo = localStorage.getItem('nomeUsuario');
  const emailSalvo = localStorage.getItem('emailUsuario');

  if (nomeSalvo) inputNome.value = nomeSalvo;
  if (emailSalvo) inputEmail.value = emailSalvo;

  // Começa com os campos desativados
  inputNome.disabled = true;
  inputEmail.disabled = true;
});

// Habilitar edição ao clicar em "Editar ou alterar dados do perfil"
botaoEditar.addEventListener('click', () => {
  const editando = !inputNome.disabled;
  inputNome.disabled = editando;
  inputEmail.disabled = editando;

  if (editando) {
    botaoEditar.textContent = 'Editar ou alterar dados do perfil';
  } else {
    botaoEditar.textContent = 'Concluir edição';
  }
});

// Salvar alterações no localStorage
botaoSalvar.addEventListener('click', () => {
  const nome = inputNome.value.trim();
  const email = inputEmail.value.trim();

  if (!nome || !email) {
    alert('Por favor, preencha todos os campos!');
    return;
  }

  localStorage.setItem('nomeUsuario', nome);
  localStorage.setItem('emailUsuario', email);

  alert('Dados salvos com sucesso!');
  inputNome.disabled = true;
  inputEmail.disabled = true;
  botaoEditar.textContent = 'Editar ou alterar dados do perfil';
});

// Navegação dos botões laterais
botoesMenu.forEach(btn => {
  btn.addEventListener('click', () => {
    const texto = btn.textContent.toLowerCase();

    if (texto.includes('projetos')) {
      window.location.href = 'projetos.html'; // ajuste conforme o nome do arquivo
    } else if (texto.includes('notificações')) {
      window.location.href = 'notificação.html'; // ajuste conforme o nome do arquivo
    } else if (texto.includes('sair')) {
      const confirmar = confirm('Deseja realmente sair?');
      if (confirmar) {
        localStorage.clear();
        window.location.href = 'login.html'; // redireciona para a tela de login
      }
    }
  });
});

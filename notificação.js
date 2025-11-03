// Seleciona todos os botões "Dispensar"
const botoesDispensar = document.querySelectorAll('.dismiss');

// Seleciona o botão "Ignorar tudo"
const botaoIgnorarTudo = document.querySelector('.ignore-all');

// Função para dispensar uma notificação individual
botoesDispensar.forEach(botao => {
  botao.addEventListener('click', () => {
    const notificacao = botao.closest('.notification');
    notificacao.style.transition = 'opacity 0.3s ease';
    notificacao.style.opacity = '0';
    setTimeout(() => notificacao.remove(), 300);
  });
});

// Função para ignorar todas as notificações
botaoIgnorarTudo.addEventListener('click', () => {
  const notificacoes = document.querySelectorAll('.notification');
  notificacoes.forEach(notif => {
    notif.style.transition = 'opacity 0.3s ease';
    notif.style.opacity = '0';
    setTimeout(() => notif.remove(), 300);
  });
});

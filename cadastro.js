// cadastro.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    // Validação básica
    if (!nome || !telefone || !email || !senha) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Digite um e-mail válido!");
      return;
    }

    // Validação de telefone — agora flexível
    const apenasNumeros = telefone.replace(/\D/g, ""); // remove tudo que não é número
    if (apenasNumeros.length < 9) {
      alert("Digite um telefone válido (mínimo 9 dígitos).");
      return;
    }

    // Salvar no LocalStorage
    const usuario = { nome, telefone, email, senha };
    localStorage.setItem("usuario", JSON.stringify(usuario));

    // Mensagem de sucesso
    const msg = document.createElement("div");
    msg.textContent = "Cadastro salvo com sucesso! 🐝";
    msg.style.background = "#fff";
    msg.style.color = "#333";
    msg.style.padding = "10px 20px";
    msg.style.borderRadius = "10px";
    msg.style.textAlign = "center";
    msg.style.marginTop = "15px";
    msg.style.fontWeight = "bold";
    msg.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
    msg.style.transition = "opacity 0.5s ease";

    form.appendChild(msg);
    form.reset();

    // Efeito fade-out
    setTimeout(() => {
      msg.style.opacity = "0";
      setTimeout(() => msg.remove(), 500);
    }, 3000);
  });
});

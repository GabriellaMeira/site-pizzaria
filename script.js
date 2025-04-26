// Código para o formulário
document.getElementById("form-pedido")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const nome = document.getElementById("nome").value;
  const sabor = document.getElementById("sabor").value;
  const confirmacao = document.getElementById("confirmacao");
  confirmacao.innerHTML = `<p>Obrigado, ${nome}! Seu pedido de pizza de ${sabor} foi recebido!</p>`;
});

// Código para o menu mobile
document.getElementById("menu-toggle").addEventListener("click", () => {
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
});

// Código para o horário de funcionamento
const agora = new Date();
const hora = agora.getHours();
const statusHorario = document.getElementById('status-horario');

if (hora >= 18 && hora < 23) {
  statusHorario.textContent = "Estamos ABERTOS! 🍕 Faça seu pedido.";
  statusHorario.style.color = "lightgreen";
} else {
  statusHorario.textContent = "Estamos FECHADOS no momento. ⏳";
  statusHorario.style.color = "yellow";
}

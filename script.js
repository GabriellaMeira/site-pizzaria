
document.getElementById("form-pedido").addEventListener("submit", function(e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const sabor = document.getElementById("sabor").value;
    const confirmacao = document.getElementById("confirmacao");
    confirmacao.innerHTML = `<p>Obrigado, ${nome}! Seu pedido de pizza de ${sabor} foi recebido!</p>`;
  });
  
  document.getElementById("menu-toggle").addEventListener("click", () => {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");
  });
// script.js

// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute("href"));
    destino.scrollIntoView({ behavior: "smooth" });
  });
});

// Exemplo: alerta ao clicar no botão "comprar"
document.querySelectorAll(".produto button").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Produto adicionado ao carrinho!");
  });
});

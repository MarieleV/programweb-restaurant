// Botão do menu: Painel
document.getElementById("link-editar-perfil-painel").addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "painel.html";
});

// Botão do menu: Reservas
/*
document.getElementById("link-editar-perfil-reservas").addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "reservas.html";
});
*/

// Botão do menu: Clientes
document.getElementById("link-editar-perfil-clientes").addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "clientes.html";
});

// Botão do menu: Meu Perfil (quando estiver na tela de edição, volta pra visualização)
document.querySelector(".nav-editar-perfil-links .active").addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "perfil.html";
});

// Botão do menu: Sair
document.getElementById("link-editar-perfil-sair").addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "index.html";
});

// Botão inferior: Cancelar edição
document.getElementById("cancelar-editar-perfil").addEventListener("click", () => {
    window.location.href = "perfil.html";
});

// Botão inferior: Salvar edição
document.getElementById("salvar-editar-perfil").addEventListener("click", () => {
    // validações ou salvar os dados com fetch()
    // por enquanto, só está redirecionando
    window.location.href = "perfil.html";
});



/* Dropdown Reservas */

document.addEventListener("DOMContentLoaded", function(){
    const botaoReservas = document.getElementById("btn-editar-perfil-reservas");
    const menuReservas = document.getElementById("menu-reservas-editar-perfil");
  
    botaoReservas.addEventListener("click", function (e){
      e.preventDefault();
      menuReservas.style.display = menuReservas.style.display === "block" ? "none" : "block";
    });
  
    //fechar dropdown se clicar fora
    document.addEventListener("click", function (e){
      const isClickInside = botaoReservas.contains(e.target) || menuReservas.contains(e.target);
      if (!isClickInside){
        menuReservas.style.display = "none";
      }
    });
  });
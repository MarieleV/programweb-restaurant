// Botão do menu: Painel
document.getElementById("link-clientes-painel").addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "painel.html";
});

// Botão do menu: Reservas
/*
document.getElementById("link-clientes-reservas").addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "reservas.html";
});
*/

// Botão do menu: Perfil
document.getElementById("link-clientes-perfil").addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "perfil.html";
});


// Botão do menu: Sair
document.getElementById("link-clientes-sair").addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "index.html";
});



/* Dropdown Reservas */

document.addEventListener("DOMContentLoaded", function(){
  const botaoReservas = document.getElementById("btn-clientes-reservas");
  const menuReservas = document.getElementById("menu-reservas-clientes");
  
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

  

  // Modal de erro de carregamento
  const btnFecharErro = document.getElementById("btnFecharErro");
  if (btnFecharErro) {
    btnFecharErro.addEventListener("click", function () {
      document.getElementById("modalErroCarregamentoClientes").style.display = "none";
      });
  }
  
  function abrirModalErroCarregamentoClientes() {
    const modal = document.getElementById("modalErroCarregamentoClientes");
    if (modal) {
      modal.style.display = "flex";
    } else {
      console.error("Modal de carregamento não encontrado!");
    }
  }
      
  setTimeout(abrirModalErroCarregamentoClientes, 1000); // abre o modal 1s depois do carregamento

});
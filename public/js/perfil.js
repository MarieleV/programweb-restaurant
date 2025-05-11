document.getElementById('editar-perfil').addEventListener('click', () => {
    window.location.href = 'editar-perfil.html';
});


  
document.getElementById('remover-perfil').addEventListener('click', () => {
  document.getElementById('modal-remover').style.display = 'flex';
});

document.getElementById('cancelar-modal').addEventListener('click', () => {
  document.getElementById('modal-remover').style.display = 'none';
});

document.getElementById('confirmar-remover').addEventListener('click', () => {
  // chamar back para excluir o perfil
  
  // fechar o modal
  document.getElementById('modal-remover').style.display = 'none';

  // redireciona pra tela de login
  window.location.href = 'index.html';
});

  

document.getElementById("link-perfil-painel").addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "painel.html";
}); 

document.getElementById("link-perfil-clientes").addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "clientes.html";
}); 
  
document.getElementById("link-perfil-sair").addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "index.html";
}); 




/* Dropdown Reservas */

document.addEventListener("DOMContentLoaded", function(){
  const botaoReservas = document.getElementById("btn-perfil-reservas");
  const menuReservas = document.getElementById("menu-reservas-perfil");

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


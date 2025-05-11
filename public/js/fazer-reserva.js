document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("link-fazer-reserva-painel").addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = "painel.html";
    }); 
    
    document.getElementById("link-fazer-reserva-clientes").addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "clientes.html";
    }); 
    
    document.getElementById("link-fazer-reserva-perfil").addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = "perfil.html";
      }); 
      
    document.getElementById("link-fazer-reserva-sair").addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = "index.html";
    }); 
    
    
    
    /* Dropdown Reservas */
    
    const botaoReservas = document.getElementById("btn-fazer-reserva-reservas");
    const menuReservas = document.getElementById("menu-reservas-fazer-reserva");
    
    botaoReservas.addEventListener("click", function(e){
        e.preventDefault();
        e.stopPropagation(); // evita q o proximo listener feche o menu imediatamente 
        menuReservas.style.display = menuReservas.style.display === "block" ? "none" : "block";
    }); 
    
    // clicar fora fecha o menu
    document.addEventListener("click", function(e){
        const isClickInside = botaoReservas.contains(e.target) || menuReservas.contains(e.target);
        if(!isClickInside) {
            menuReservas.style.display = "none";
        }
    });
    
    
    
    
    
    
    // Validação do formulario de cadastro
    const formReserva = document.querySelector(".form-fazer-reserva");
    
    formReserva.addEventListener("submit", function(e){
        e.preventDefault();
    
        const nome = document.getElementById("nome").value.trim();
        const data = document.getElementById("data").value.trim();
        const hora = document.getElementById("hora").value.trim();
        const pessoas = document.getElementById("pessoas").value.trim();
    
        if(!nome || !data || !hora || !pessoas) {
            const modalErroCampos = document.getElementById("modalErroCamposReserva");
    
            if(modalErroCampos) {
                modalErroCampos.style.display = "flex";
            }
            return;
        }
    
        // se os campos estiveres preenchidos 
        window.location.href = "visualizar-reservas.html";
    
    
    });
    
    // fechar modal
    document.getElementById("btnFecharErroCadastro-reserva").addEventListener("click", () => {
        document.getElementById("modalErroCamposReserva").style.display = "none";
    });

    
});


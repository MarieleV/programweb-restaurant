document.getElementById("link-visualizar-reserva-painel").addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "painel.html";
}); 

document.getElementById("link-visualizar-reserva-clientes").addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "clientes.html";
}); 

document.getElementById("link-visualizar-reserva-perfil").addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "perfil.html";
  }); 
  
document.getElementById("link-visualizar-reserva-sair").addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "index.html";
}); 



/* Dropdown Reservas */

const botaoReservas = document.getElementById("btn-visualizar-reserva-reservas");
const menuReservas = document.getElementById("menu-reservas-visualizar-reserva");

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


document.addEventListener("DOMContentLoaded", () => {
    const reservas = [
        { nome: "João Silva", data: "11/04/2025", hora: "18:00", pessoas: 4, status: "Confirmada" },
        { nome: "Larissa Costa", data: "12/04/2025", hora: "20:00", pessoas: 5, status: "Pendente" }, 
        { nome: "Carlos Pereira", data: "13/04/2025", hora: "10:00", pessoas: 3, status: "Cancelada"},
        { nome: "João Silva", data: "07/04/2025", hora: "12:00", pessoas: 3, status: "Confirmada"},
        { nome: "Maria Costa", data: "07/04/2025", hora: "13:00", pessoas: 2, status: "Confirmada"},
        { nome: "Carlos Souza", data: "07/04/2025", hora: "14:00", pessoas: 4, status: "Confirmada"},
        { nome: "Ana Paula", data: "08/04/2025", hora: "12:00", pessoas: 2, status: "Pendente"},
        { nome: "Roberto Lima", data: "09/04/2025", hora: "15:00", pessoas: 6, status: "Pendente"},
    ];

    const tbody = document.getElementById("tabela-visualizar-reservas");

    reservas.forEach((reserva, index) => {
        const tr = document.createElement("tr");

        const statusClass = 
            reserva.status === "Confirmada" ? "painel-status-confirmada" :
            reserva.status === "Cancelada" ? "painel-status-cancelada" :
            "painel-status-pendente";

        const tdStatus = `<td class="status-text ${statusClass}" data-index="${index}">${reserva.status}</td>`;

        const btnCancelar = reserva.status !== "Cancelada"
        ? `<button class="btn-cancelar" data-index="${index}">Cancelar</button>`
        : "";

        tr.innerHTML = `
            <td>${reserva.nome}</td>
            <td>${reserva.data}</td>
            <td>${reserva.hora}</td>
            <td>${reserva.pessoas}</td>
            ${tdStatus}
            <td>${btnCancelar}
        `;

        tbody.appendChild(tr);
    });



    // Mensagem de Confirmação de Cancelamento de Reserva

    let reservaSelecionada = null; 

    document.addEventListener("click", function(e) {
        if (e.target.classList.contains("btn-cancelar")) {
          reservaSelecionada = e.target.closest("tr"); // guarda linha
          document.getElementById("modal-cancelar-reservas").style.display = "flex"; 
        }
    });

    document.getElementById("voltar-cancelar-reservas-modal").addEventListener("click", function(){
        document.getElementById("modal-cancelar-reservas").style.display = "none"; 
        reservaSelecionada = null; 
    }); 

    document.getElementById("confirmar-reservas-cancelar").addEventListener("click", function(){
        if(reservaSelecionada){
            const statusTd = reservaSelecionada.querySelector(".status-text");
            const botaoCancelar = reservaSelecionada.querySelector(".btn-cancelar");

            statusTd.textContent = "Cancelada";
            statusTd.classList.remove("painel-status-confirmada", "painel-status-pendente");
            statusTd.classList.add("painel-status-cancelada");

            if(botaoCancelar) botaoCancelar.remove();

            document.getElementById("modal-cancelar-reservas").style.display = "none";
            reservaSelecionada = null; 
        }
    });

    // Modal de erro de carregamento
    const btnFecharErro = document.getElementById("btnFecharErro");
    if (btnFecharErro) {
        btnFecharErro.addEventListener("click", function () {
            document.getElementById("modalErroCarregamentoReservas").style.display = "none";
        });
    }

    function abrirModalErroCarregamentoReservas() {
        const modal = document.getElementById("modalErroCarregamentoReservas");
        if (modal) {
            modal.style.display = "flex";
        } else {
            console.error("Modal de carregamento não encontrado!");
        }
    }
    
    setTimeout(abrirModalErroCarregamentoReservas, 1000); // abre o modal 1s depois do carregamento
});

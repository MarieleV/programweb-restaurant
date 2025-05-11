document.addEventListener("DOMContentLoaded", function () {
  const reservasHoje = [
    { nome: 'João Silva', data: '07/04/2025', hora: '12:00', pessoas: 3 },
    { nome: 'Maria Costa', data: '07/04/2025', hora: '13:00', pessoas: 2 },
    { nome: 'Carlos Souza', data: '07/04/2025', hora: '14:00', pessoas: 4 },
  ];

  const reservasFuturas = [
    { nome: 'Ana Paula', data: '08/04/2025', hora: '12:00', pessoas: 2 },
    { nome: 'Roberto Lima', data: '09/04/2025', hora: '15:00', pessoas: 6 },
  ];

  const hojeTbody = document.getElementById('painel-hoje');
  const futurasTbody = document.getElementById('painel-futuras');
  const contadorHoje = document.getElementById("contador-hoje");

  reservasHoje.forEach(reserva => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${reserva.nome}</td>
        <td>${reserva.data}</td>
        <td>${reserva.hora}</td>
        <td>${reserva.pessoas}</td>
        <td class="painel-status-confirmada">Confirmada</td>
        <td><button class="painel-btn-cancelar">Cancelar</button></td>
    `;
    hojeTbody?.appendChild(tr);
  });

  reservasFuturas.forEach(reserva => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${reserva.nome}</td>
      <td>${reserva.data}</td>
      <td>${reserva.hora}</td>
      <td>${reserva.pessoas}</td>
      <td>
        <button class="painel-btn-confirmar">Confirmar</button>
        <button class="painel-btn-cancelar">Cancelar</button>
        </td>
    `;
    futurasTbody?.appendChild(tr);
  });

  contadorHoje.textContent = reservasHoje.length;

  let linhaParaCancelar = null;

  // Lógica de Cancelar
  document.addEventListener("click", (e) => {
    const botao = e.target;

    if (!botao.matches("button")) return;

    const linha = botao.closest("tr");

    if (botao.classList.contains("painel-btn-cancelar")) {
      linhaParaCancelar = linha;  // Guarda a linha
      document.getElementById('modal-cancelar').style.display = 'flex';  // Abre o modal
    }

    if (botao.classList.contains("painel-btn-confirmar")) {
      const celulaAcoes = linha.children[4];
      celulaAcoes.innerHTML = `<span class="painel-status-confirmada">Confirmada</span>`;
    }
  });

  // Fechar o modal ao clicar em "Voltar"
  document.getElementById('voltar-cancelar-modal').addEventListener('click', () => {
    document.getElementById('modal-cancelar').style.display = 'none';
    linhaParaCancelar = null;  // Limpa a linha armazenada
  });

  // Confirmar o cancelamento
  document.getElementById('confirmar-cancelar').addEventListener('click', () => {
    if (!linhaParaCancelar) return; 

    const celulas = linhaParaCancelar.children; 

    // verifica as colunas da tabela (6a na reservas do dia e 5a na proximos dias)
    if (celulas.length === 6) {
      const celulaStatus = celulas[4]; 
      const celulaAcoes = celulas[5];

      celulaStatus.textContent = "Cancelada"; 
      celulaStatus.className = "painel-status-cancelada"; 
      celulaAcoes.innerHTML = ""; // remove os botões
    } else if (celulas.length === 5) {
      const celulaAcoes = celulas[4]; 

      celulaAcoes.innerHTML = `<span class="painel-status-cancelada">Cancelada</span>`;
    }

    document.getElementById('modal-cancelar').style.display = 'none'; 
    linhaParaCancelar = null; 
  });
  

  // Modal de erro de carregamento
  const btnFecharErro = document.getElementById("btnFecharErro");
  if (btnFecharErro) {
    btnFecharErro.addEventListener("click", function () {
        document.getElementById("modalErroCarregamentoPainel").style.display = "none";
    });
  }

  function abrirModalErroCarregamentoPainel() {
    const modal = document.getElementById("modalErroCarregamentoPainel");
    if (modal) {
        modal.style.display = "flex";
    } else {
        console.error("Modal de carregamento não encontrado!");
    }
  }

  setTimeout(abrirModalErroCarregamentoPainel, 1000); // abre o modal 1s depois do carregamento






  document.getElementById("link-painel-clientes").addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "clientes.html";
  }); 
  
  document.getElementById("link-painel-perfil").addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "perfil.html";
  }); 
  
  document.getElementById("link-painel-sair").addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "index.html";
  }); 
  
  



  /* Dropdown Reservas */

  const botaoReservas = document.getElementById("btn-painel-reservas");
  const menuReservas = document.getElementById("menu-reservas-painel");
  
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
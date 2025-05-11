document.addEventListener("DOMContentLoaded", function () {
    const btnEntrar = document.getElementById("btnEntrar");

    if (btnEntrar) {
        btnEntrar.addEventListener("click", function () {
            // Pegando valores dos inputs
            const email = document.getElementById("email").value;
            const senha = document.getElementById("senha").value;

            // Simulação de um usuário válido
            if (email === "admin@teste.com" && senha === "123456") {
                window.location.href = "painel.html"; // Redireciona para o painel
            } else {
                // Exibir modal de erro, se existir
                const modalErro = document.getElementById("modalErro");
                if (modalErro) {
                    modalErro.style.display = "flex";
                } else {
                    alert("Usuário ou senha incorretos!");
                }
            }
        });
    }

    // Fecha o modal de erro ao clicar no botão "ok"
    const btnFecharErro = document.getElementById("btnFecharErro");
    if (btnFecharErro) {
        btnFecharErro.addEventListener("click", function () {
            document.getElementById("modalErro").style.display = "none";
        });
    }

    // modal 2
    const btnFecharErro2 = document.getElementById("btnFecharErro2");
    if(btnFecharErro2){
        btnFecharErro2.addEventListener("click", function(){
            document.getElementById("modalErroCarregamento").style.display = "none";
        });
    }

    function abrirModalErroCarregamento() {
        const modal = document.getElementById("modalErroCarregamento");
        if (modal) {
            modal.style.display = "flex";
        } else {
            console.error("Modal de carregamento não encontrado!");
        }
    }
        

    setTimeout(abrirModalErroCarregamento, 1000); // abre o modal 1s depois do carregamento
})
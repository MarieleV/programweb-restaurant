document.addEventListener("DOMContentLoaded", function(){
    const formCadastro = document.querySelector("form");
    
    if(formCadastro){
        formCadastro.addEventListener("submit", function (e){
            e.preventDefault(); // impede o envio do formulário

            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const telefone = document.getElementById("telefone").value.trim();
            const senha = document.getElementById("senha").value.trim();
            const confirmarSenha = document.getElementById("confirmar-senha").value.trim();

            if(!nome || !email || !telefone || !senha || !confirmarSenha){
                // Exibir modal de erro
                const modalErroCampos = document.getElementById("modalErroCampos");
                if(modalErroCampos){
                    modalErroCampos.style.display = "flex";
                }
                return; // para aqui
            }

            // se tudo estiver preenchido, redireciona
            window.location.href = "index.html";
        });
    }

    document.getElementById("btnFecharErroCadastro").addEventListener("click", () => {
        document.getElementById("modalErroCampos").style.display = "none"; 
    });

        // modal Carregamento Cadastro
        const btnFecharErroCadastro2 = document.getElementById("btnFecharErroCadastro2");
        if(btnFecharErroCadastro2){
            btnFecharErroCadastro2.addEventListener("click", function(){
                document.getElementById("modalErroCarregamentoCadastro").style.display = "none";
            });
        }
        
        function abrirModalErroCarregamentoCadastro() {
            const modal = document.getElementById("modalErroCarregamentoCadastro");
            if (modal) {
                modal.style.display = "flex";
            } else {
                console.error("Modal de carregamento não encontrado!");
            }
        }
                
        
        setTimeout(abrirModalErroCarregamentoCadastro, 1000); // abre o modal 1s depois do carregamento
    
        document.getElementById("btnFecharErroCarregamentoCadastro").addEventListener("click", () => {
            document.getElementById("modalErroCarregamentoCadastro").style.display = "none"; 
        });
});
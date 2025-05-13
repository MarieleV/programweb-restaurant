document.addEventListener("DOMContentLoaded", function () {
    const btnEntrar = document.getElementById("btnEntrar");

    if (btnEntrar) {
        btnEntrar.addEventListener("click", async function () {
            const email = document.getElementById("email").value;
            const senha = document.getElementById("senha").value;

            try {
                const response = await fetch("http://localhost:3000/api/auth/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ email, senha })
                });

                const data = await response.json();

                if (response.ok) {
                    // Sucesso no login
                    console.log("Login bem-sucedido:", data);
                    // Você pode salvar o token se o back-end retornar um
                    // localStorage.setItem('token', data.token);
                    window.location.href = "painel.html";
                } else {
                    // Exibir modal de erro
                    const modalErro = document.getElementById("modalErro");
                    if (modalErro) {
                        modalErro.style.display = "flex";
                    } else {
                        alert(data.mensagem || "Usuário ou senha incorretos.");
                    }
                }
            } catch (erro) {
                console.error("Erro na requisição de login:", erro);
                const modalErro = document.getElementById("modalErroCarregamento");
                if (modalErro) {
                    modalErro.style.display = "flex";
                } else {
                    alert("Erro de rede ou servidor.");
                }
            }
        });
    }

    // Fecha o modal de erro ao clicar no botão "Ok"
    const btnFecharErro = document.getElementById("btnFecharErro");
    if (btnFecharErro) {
        btnFecharErro.addEventListener("click", function () {
            document.getElementById("modalErro").style.display = "none";
        });
    }

    const btnFecharErro2 = document.getElementById("btnFecharErro2");
    if (btnFecharErro2) {
        btnFecharErro2.addEventListener("click", function () {
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

    setTimeout(abrirModalErroCarregamento, 1000);
});

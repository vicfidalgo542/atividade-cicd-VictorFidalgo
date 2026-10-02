const API_URL = "https://atividade-cicd-back-victorfidalgo.onrender.com";;

async function carregarStatus() {

    const elementoStatus =
        document.getElementById("status");

    const elementoMensagem =
        document.getElementById("mensagem");

    const elementoVersao =
        document.getElementById("versao");

    try {

        const resposta =
            await fetch(`${API_URL}/api/status`);

        if (!resposta.ok) {
            throw new Error("Erro ao consultar backend");
        }

        const dados =
            await resposta.json();

        elementoStatus.textContent =
            dados.status;

        elementoMensagem.textContent =
            dados.mensagem;

        elementoVersao.textContent =
            dados.versao;

    } catch (erro) {

        elementoStatus.textContent =
            "offline";

        elementoMensagem.textContent =
            "Não foi possível acessar o backend.";

        elementoVersao.textContent =
            "-";

        console.error(erro);
    }
}

carregarStatus();
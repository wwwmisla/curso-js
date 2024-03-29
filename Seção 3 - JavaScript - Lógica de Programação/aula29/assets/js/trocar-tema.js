const body = document.querySelector("body");
const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const imagemBotao = document.querySelector(".imagem-botao");
let modoEscuroAtivo = localStorage.getItem("temaEscuroAtivo");

if (modoEscuroAtivo === "true") {
    body.classList.add("modo-escuro");
    imagemBotao.setAttribute("src", "./assets/img/lua.png");
}

botaoAlterarTema.addEventListener("click", () => {
    if (!modoEscuroAtivo) {
    body.classList.add("modo-escuro");
    imagemBotao.setAttribute("src", "./assets/img/lua.png");
    localStorage.setItem("temaEscuroAtivo", true);
    modoEscuroAtivo = true;
    } else {
    body.classList.remove("modo-escuro");
    imagemBotao.setAttribute("src", "./assets/img/sol.png");
    localStorage.setItem("temaEscuroAtivo", false);
    modoEscuroAtivo = false;
    }
});
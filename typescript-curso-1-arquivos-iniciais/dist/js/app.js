import { NegociacaoController } from "./controllers/negociacao-controller.js";
// const negociacao = new Negociacao(new Date(),10,100);
// console.log(negociacao.volume)
const controller = new NegociacaoController();
const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    controller.adiciona();
});

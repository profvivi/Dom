/*click mapeado, escutador do evento*/
const robotron = document.querySelector("#robotron")

robotron.addEventListener("click", (evento) =>{
    console.log("evento")
})

function dizOi(nome) {
    console.log("oi" + nome)
    console.log("Bem-vindo ao Robotron 2024")
}

dizOi("Pedro");
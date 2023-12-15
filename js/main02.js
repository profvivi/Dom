/*click mapeado, escutador do evento*/
const robotron = document.querySelector("#robotron")

robotron.addEventListener("click", () =>{
    console.log("Cliquei no robô.")
})

function dizOi(nome) {
    console.log("oi" + nome)
    console.log("Bem-vindo ao Robotron 2024")
}

dizOi("Pedro");
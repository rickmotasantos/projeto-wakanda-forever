let selecionarBotao = document.querySelector(".btn-trailer")

let abrirModal = document.querySelector(".modal")

let btnFecharModal = document.querySelector(".btn-sair")

let video = document.getElementById("video")

let linkVideo = video.src

selecionarBotao.addEventListener('click', () => {
    abrirModal.classList.add("aberto")
    video.setAttribute("src", linkVideo)
   
})

btnFecharModal.addEventListener('click', () => {
    abrirModal.classList.remove('aberto')
    video.setAttribute("src", "")
})
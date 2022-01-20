const imagensPainel = document.querySelectorAll('.imagem-painel')
const setaAvancar = document.getElementById('btn-avancar')
const setaVoltar = document.getElementById('btn-voltar')
let imagemAtual = 0

setaVoltar.style.opacity = 0.5;

setaAvancar.addEventListener('click', function () {
    if (imagemAtual >= imagensPainel.length - 2) {
        setaAvancar.style.opacity = 0.5;
    }

    if (imagemAtual >= 0) {
        setaVoltar.style.opacity = 1;
    }

    if (imagemAtual === imagensPainel.length - 1) {
        return
    }

    imagemAtual++
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    })

    imagensPainel[imagemAtual].classList.add('mostrar')
})

setaVoltar.addEventListener('click', function () {
    if (imagemAtual <= 1 ) {
        setaVoltar.style.opacity = 0.5;
    }

    if (imagemAtual <= imagensPainel.length - 1) {
        setaAvancar.style.opacity = 1;
    }

    if (imagemAtual <= 0) {
        return
    }

    imagemAtual--
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    })

    imagensPainel[imagemAtual].classList.add('mostrar')
})

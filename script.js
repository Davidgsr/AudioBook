const botaoPlayPause = document.getElementById('play-pause');
const botaoProximo = document.getElementById('proximo');
const botaoAnterior = document.getElementById('anterior');
const audioCapitulo = document.getElementById('audio');
const numeroCapitulos = 10;
const nomeCapitulo = document.getElementById('capitulo');
let capitulo = 1;
let tocando = false;

function tocarFaixa() {
    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add('bi-pause-circle-fill');
}

function pausarFaixa() {
    audioCapitulo.pause();
    botaoPlayPause.classList.add('bi-play-circle-fill');
    botaoPlayPause.classList.remove('bi-pause-circle-fill');
}

function tocarOuPassar() {
    if(tocando === false) {
        tocarFaixa();
        tocando = true;
    } else {
        pausarFaixa();
        tocando = false;
    }
}

function proximaFaixa() {
    if(capitulo < numeroCapitulos) {
        capitulo += 1
    } else {
        capitulo = 1
    }
    audioCapitulo.src = "books/dom-casmurro/" + capitulo + ".mp3";
    nomeCapitulo.innerText = "Capítulo " + capitulo;
    tocarFaixa();
}

function anteriorFaixa() {
    if(capitulo === 1) {
        capitulo = numeroCapitulos;
    } else {
        capitulo -= 1;
    }
    audioCapitulo.src = "books/dom-casmurro/" + capitulo + ".mp3";
    nomeCapitulo.innerText = "Capítulo " + capitulo;
    tocarFaixa();
}

botaoPlayPause.addEventListener('click', tocarOuPassar);
botaoAnterior.addEventListener('click', anteriorFaixa);
botaoProximo.addEventListener('click', proximaFaixa);
audioCapitulo.addEventListener('ended', proximaFaixa);
// Selecciona el elemento de audio
const audio = document.getElementById('background-audio');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');

// Reproducción automática al cargar la página
window.addEventListener('DOMContentLoaded', () => {
    audio.play().catch((error) => {
        console.log('Autoplay bloqueado, el usuario debe interactuar con la página.');
    });
});

// Botón de reproducción manual
playBtn.addEventListener('click', () => {
    audio.play();
});

// Botón de pausa
pauseBtn.addEventListener('click', () => {
    audio.pause();
});

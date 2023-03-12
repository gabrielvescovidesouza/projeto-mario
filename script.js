const mario = document.querySelector('.mario');
const tubos = document.querySelector('.tubos');

const jump = () => {
 mario.classList.add('jump');

setTimeout(() => {

    mario.classList.remove('jump');
}, 500);
}

const loop = setInterval(() => {

const tubosPosition = tubos.offsetLeft;
const marioPosition = window.getComputedStyle(mario).bottom.replace('px','')

if (tubosPosition < 120 && tubosPosition > 0 && marioPosition < 80) {

    tubos.style.animation = 'none';
    tubos.style.left = `${tubosPosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    mario.src = 'images/game-over.jpg'
    mario.style.width = '200px'
    mario.style.marginLeft = '50px'

    clearInterval(loop);

}

}, 10)

document.addEventListener('keydown', jump);
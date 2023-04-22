const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const score = document.querySelector('.score');
const clouds = document.querySelector('.clouds');
const reset = document.querySelector('.reset');

let contador = 0;

const jump = (event) => {
    if (event.type === 'keydown' && event.key === ' ') {
      mario.classList.add('jump');
    } else if (event.type === 'touchstart') {
      mario.classList.add('jump');
    }

  setTimeout(() => {
    mario.classList.remove('jump');
  }, 500);
};

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const cloudsPosition = clouds.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

  if (pipePosition <= 120 && marioPosition > 80) {
    contador += 10;
    score.textContent = `Score:${contador}`;
  }

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = '';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = '';
    mario.style.bottom = `${marioPosition}px`;

    clouds.style.animation = '';
    clouds.style.left = `${cloudsPosition}px`;

    mario.src = '/images/game-over.png';
    mario.style.width = '75px';
    mario.style.marginLeft = '50px';

    reset.classList.add('active');
    document.removeEventListener('touchstart');
    clearInterval(loop);
  }

}, 10);

const handleReset = () => {
  
  
  window.location.reload();
};


reset.addEventListener('click', handleReset);
document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);

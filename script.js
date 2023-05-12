
const btn = document.querySelector('#btn'),
      field = document.querySelector('.field');



const random = (min, max) => {
    const rand = min + Math.random() * (max - min + 1);
    return Math.floor(rand);
}

btn.addEventListener('mouseenter', () => {
    btn.style.top = `${random(0, 90)}%`;
    btn.style.left = `${random(0, 90)}%`;
});






// MODES

const btnMode1 = document.querySelector('.btn-mode-1'),
      btnMode2 = document.querySelector('.btn-mode-2');
      btnMode3 = document.querySelector('.btn-mode-3');

btnMode1.addEventListener('click', () => {
    btn.style = 'transition: 0.7s; transition-delay: 0.05s;';
});

btnMode2.addEventListener('click', () => {
    btn.style = 'transition: 0.06s; transition-delay: 0s;';
});







// if WIN

btn.addEventListener('click', () => {
    alert('Greetengs! You catch BTN!')
});

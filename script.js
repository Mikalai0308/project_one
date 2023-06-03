let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function () {
    offset = offset + 1600;
    if (offset > 14400) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    offset = offset - 1600;
    if (offset < 0) {
        offset = 14400;
    }
    sliderLine.style.left = -offset + 'px';
});

const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const cardSlide = document.querySelectorAll('.card-slide');

let i = 0; 
function fnNext() {
    i = i + 1;
    if ( i >= cardSlide.length) {
        cardSlide[i-1].classList.remove('visible');
        i = 0; 
        cardSlide[i].classList.add('visible');
    } else {
        cardSlide[i-1].classList.remove('visible');
        cardSlide[i].classList.add('visible');
    }
}

btnNext.addEventListener('click', () => {setTimeout(fnNext, 500)})

btnPrev.addEventListener('click', () => {setTimeout(() => {
    if ( i > 0) {
        cardSlide[i].classList.remove('visible');
        cardSlide[i-1].classList.add('visible');
        i = i - 1;
    } else {
        cardSlide[0].classList.remove('visible');
        cardSlide[cardSlide.length-1].classList.add('visible');
        i = cardSlide.length-1;
    }
}, 500)});

const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const leftSideNav = document.querySelector('.left-side-navigation');
const btnClose = document.querySelector('.close-btn');

menuBtn.addEventListener('click', () => {
    menuBtn.style.display = 'none'; 
    mobileMenu.style.left = '0%';
    leftSideNav.style.display = 'block';
});

btnClose.addEventListener('click', () => {
    menuBtn.style.display = 'block';
    mobileMenu.style.left = '-50%';
    leftSideNav.style.display = 'none'; 
});
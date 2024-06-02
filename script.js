let btnNext = document.querySelector('.next');
let btnBack = document.querySelector('.back');

let container = document.querySelector('.container');
let list = document.querySelector('.container .list');
let thumb = document.querySelector('.container .thumb');

let intervalId;

btnNext.onclick = () => {
    moveItensOnClick('next');
    resetCarousel();
};
btnBack.onclick = () => {
    moveItensOnClick('back');
    resetCarousel();
};

function moveItensOnClick(type) {
    let listItems = document.querySelectorAll('.list .list-item');
    let thumbItems = document.querySelectorAll('.thumb .thumb-item');

    if (type === 'next') {
        list.appendChild(listItems[0]);
        thumb.appendChild(thumbItems[0]);
        container.classList.add('next');
    } else {
        list.prepend(listItems[listItems.length - 1]);
        thumb.prepend(thumbItems[thumbItems.length - 1]);
        container.classList.add('back');
    }
}

// Função para iniciar o carrossel automático
function startCarousel() {
    intervalId = setInterval(() => {
        moveItensOnClick('next');
    }, 10000);
}

// Função para resetar o carrossel
function resetCarousel() {
    clearInterval(intervalId);
    startCarousel();
}

// Iniciar o carrossel automático
startCarousel();
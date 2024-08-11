function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColors() {
    const h1 = document.getElementById('randomColorH1');
    const characters = h1.querySelectorAll('.char');
    characters.forEach(char => {
        char.style.color = getRandomColor();
    });
}

function splitText() {
    const h1 = document.getElementById('randomColorH1');
    const text = h1.textContent;
    h1.innerHTML = '';
    for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i];
        span.classList.add('char');
        h1.appendChild(span);
    }
}

window.onload = function() {
    splitText();
    setInterval(changeColors, 1000);
};
// END OF COLOR CHANGING

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.languages');
    const description = document.getElementById('skill-description');

    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            description.textContent = button.getAttribute('data-text');
        });

        button.addEventListener('mouseout', () => {
            description.textContent = '*Hover over the buttons to see the description.*';
        });
    });
});
//END OF SKILLS

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
        if (menu.classList.contains('active')) {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    });
});

//NAV TOGGLE
const navToggleOpen = document.querySelector('.nav_toggle-open');
const navToggleClose = document.querySelector('.nav_toggle-close');
const navMenu = document.querySelector('.nav_menu');

navToggleOpen.addEventListener('click', () => {
    navMenu.classList.add('active');
    navToggleOpen.style.display = 'none';
    navToggleClose.style.display = 'block';
});

navToggleClose.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navToggleOpen.style.display = 'block';
    navToggleClose.style.display = 'none';
});


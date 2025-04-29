let buttons = document.getElementsByClassName('bg-color-btn');
let body = document.querySelector('body');

Array.from(buttons).forEach(button => {
    button.addEventListener('click', function () {
        body.style.backgroundColor = button.dataset.color;
    })
});
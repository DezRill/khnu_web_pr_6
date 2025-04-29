let checkButtons = document.getElementsByClassName('check-btn');
let checkRadios = document.getElementsByClassName('check-radio');

Array.from(checkRadios).forEach(radio => {
    radio.addEventListener('mouseover', function () {
        radio.checked = true;
    })
});

Array.from(checkButtons).forEach(button => {
    button.addEventListener('click', function () {
        let radio = button.closest('tr').querySelector('.check-radio:checked');

        if (radio === null) {
            alert('Відповідь не вибрано');
            return;
        }

        let correct_value = parseInt(button.dataset.correct);
        let selected_value = parseInt(radio.value);

        if (correct_value === selected_value) {
            alert('Вірно');
        } else {
            alert('Невірно');
        }
    });
});
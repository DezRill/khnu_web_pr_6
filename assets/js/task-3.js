let checkWhoSay = document.getElementById('check-who-say');

checkWhoSay.addEventListener('click', function () {
    let radio = document.querySelector('.say-radio:checked');

    if (radio === null) {
        alert('Необхідно вибрати варіант');
        return;
    }

    if (radio.value == 'dog') {
        alert('Вірно');
        return;
    }

    alert('Невірно');
});
let a_field = document.getElementById('a-field');
let b_field = document.getElementById('b-field');
let result_field = document.getElementById('result-field');

let calculate = document.getElementById('calculate');

calculate.addEventListener('click', function () {
    if (a_field.value == '') {
        alert('Необхідно вказати число A');
        return;
    }

    if (b_field.value == '') {
        alert('Необхідно вказати число B');
        return;
    }

    result_field.value = parseFloat(a_field.value) + parseFloat(b_field.value);
});
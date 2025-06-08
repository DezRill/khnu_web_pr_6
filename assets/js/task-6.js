let sendEmail = document.getElementById('send-email');
let email = document.getElementById('email-field');
let subject = document.getElementById('subject-field');
let message = document.getElementById('message-field');

sendEmail.addEventListener('click', function () {
    if (email.value == '') {
        alert('Необхідно вказати Email');
        return;
    }

    if (subject.value == '') {
        alert('Необхідно вказати тему');
        return;
    }

    if (message.value == '') {
        alert('Необхідно вказати повідомлдення');
        return;
    }

    let mail = 'mailto:' + email.value;
    mail += '?subject=' + subject.value;
    mail += '&body=' + message.value;

    window.location.href = mail;
});
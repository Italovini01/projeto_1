document.addEventListener('DOMContentLoaded', function() {
    var telefoneInput = document.getElementById('telefone');
    var telefoneMask = IMask(telefoneInput, {
        mask: '(00) 00000-0000'
    });

    document.getElementById('myForm').addEventListener('submit', function (e) {
        var nome = document.getElementById('nome').value;
        var email = document.getElementById('email').value;
        var telefone = telefoneMask.unmaskedValue; 

        if (!nome.trim()) {
            alert('Por favor, insira seu nome.');
            e.preventDefault();
            return;
        }

        if (!email.trim()) {
            alert('Por favor, insira seu e-mail.');
            e.preventDefault();
            return;
        } else if (!isValidEmail(email)) {
            alert('Por favor, insira um e-mail válido.');
            e.preventDefault();
            return;
        }

        if (!telefone.trim()) {
            alert('Por favor, insira seu telefone.');
            e.preventDefault();
            return;
        }
    });
});

function isValidEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

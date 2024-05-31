document.addEventListener('DOMContentLoaded', function() {
    // Máscara para CPF
    new Cleave('#cpf', {
        delimiters: ['.', '.', '-'],
        blocks: [3, 3, 3, 2],
        numericOnly: true
    });

    // Máscara para Telefone
    new Cleave('#phone', {
        delimiters: ['(', ') ', '-'],
        blocks: [0, 2, 5, 4],
        numericOnly: true
    });

    document.getElementById('continuar-button').addEventListener('click', function() {
        const form = document.getElementById('cadastro-form');
        const nameComplete = document.getElementById('name-complete').value;
        const cpf = document.getElementById('cpf').value;
        const phone = document.getElementById('phone').value;
        const requiredFields = form.querySelectorAll('input[required]');
        let allFieldsFilled = true;

        requiredFields.forEach(function(field) {
            if (!field.value) {
                allFieldsFilled = false;
            }
        });

        const nameIsValid = /^[a-zA-Z\s]+$/.test(nameComplete);

        if (allFieldsFilled && nameIsValid && cpf.length === 14 && phone.length === 15) {
            window.location.href = 'pagamento.html';
        } else {
            if (!nameIsValid) {
                alert('O nome completo não deve conter números.');
            } else {
                alert('Por favor, preencha todos os campos obrigatórios e insira CPF e telefone válidos.');
            }
        }
    });
});
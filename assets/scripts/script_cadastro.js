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

    // Event listener para o botão "Continuar"
    document.getElementById('continuar-button').addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do botão

        const form = document.getElementById('cadastro-form');
        const nameComplete = document.getElementById('name-complete').value;
        const cpf = document.getElementById('cpf').value;
        const phone = document.getElementById('phone').value;
        const requiredFields = form.querySelectorAll('input[required]');
        let allFieldsFilled = true;

        // Verifica se todos os campos obrigatórios estão preenchidos
        requiredFields.forEach(function(field) {
            if (!field.value) {
                allFieldsFilled = false;
            }
        });

        // Expressão regular para validar o nome completo permitindo letras, espaços e acentos
        const nameIsValid = /^[a-zA-ZÀ-ú\s]+$/.test(nameComplete);

        // Condição para redirecionar para a próxima página ou exibir alerta se houver erros
        if (allFieldsFilled && nameIsValid && cpf.length === 14 && phone.length === 15) {
            window.location.href = 'pagamento.html'; // Redireciona para a próxima página
        } else {
            if (!nameIsValid) {
                alert('O nome completo não deve conter números.'); // Alerta se o nome completo contiver números
            } else {
                alert('Por favor, preencha todos os campos obrigatórios e insira CPF e telefone válidos.'); // Alerta se houver campos vazios ou inválidos
            }
        }
    });

    // Event listener para impedir o envio do formulário ao pressionar Enter
    document.getElementById('cadastro-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do formulário
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.checkbox-group input[type="checkbox"]');
    const continuarButton = document.getElementById('continuar-button');
    
    continuarButton.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do botão

        let checked = false;
        checkboxes.forEach(function(checkbox) {
            if (checkbox.checked) {
                checked = true;
            }
        });

        if (!checked) {
            alert('Por favor, selecione ao menos um item.');
            navigator.vibrate([200, 100, 200]); // Vibra o celular da pessoa
        } else {
            window.location.href = 'cadastro.html'; // Redireciona para a próxima página
        }
    });
});
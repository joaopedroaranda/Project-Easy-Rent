document.addEventListener("DOMContentLoaded", function() {
    // Função para coletar informações dos produtos selecionados
    function getSelectedProducts() {
        const selectedProducts = [];
        document.querySelectorAll('.checkbox-group .input-group input[type="checkbox"]').forEach(function(checkbox) {
            if (checkbox.checked) {
                const productName = checkbox.getAttribute('data-name');
                const productPrice = checkbox.getAttribute('data-price');
                selectedProducts.push(`${productName} - ${productPrice}`);
            }
        });
        return selectedProducts;
    }

    // Função para coletar informações do cadastro
    function getCadastroInfo() {
        const cadastroInfo = {};
        cadastroInfo.name = document.getElementById('name-complete')?.value;
        cadastroInfo.cpf = document.getElementById('cpf')?.value;
        cadastroInfo.phone = document.getElementById('phone')?.value;
        cadastroInfo.address = document.getElementById('address')?.value;
        cadastroInfo.complement = document.getElementById('complement')?.value;
        cadastroInfo.observation = document.getElementById('observation')?.value;
        return cadastroInfo;
    }

    // Função para coletar informações da forma de pagamento
    function getPaymentInfo() {
        const paymentMethods = [];
        document.querySelectorAll('.checkbox-group .input-box input[type="checkbox"]').forEach(function(checkbox) {
            if (checkbox.checked) {
                paymentMethods.push(checkbox.getAttribute('date-payment'));
            }
        });
        return paymentMethods;
    }

    // Botão "Continuar" da página de seleção de itens
    document.querySelector('.continue-button button')?.addEventListener('click', function(event) {
        event.preventDefault();
        localStorage.setItem('selectedProducts', JSON.stringify(getSelectedProducts()));
        window.location.href = 'cadastro.html';
    });

    // Botão "Continuar" da página de cadastro
    document.getElementById('continuar-button')?.addEventListener('click', function(event) {
        event.preventDefault();
        localStorage.setItem('cadastroInfo', JSON.stringify(getCadastroInfo()));
        window.location.href = 'pagamento.html';
    });

    // Botão "Finalizar" da página de pagamento
    document.querySelector('.button-save-pagamento button')?.addEventListener('click', function(event) {
        event.preventDefault();
        const selectedProducts = JSON.parse(localStorage.getItem('selectedProducts')) || [];
        const cadastroInfo = JSON.parse(localStorage.getItem('cadastroInfo')) || {};
        const paymentInfo = getPaymentInfo();

        if (selectedProducts.length === 0 || Object.keys(cadastroInfo).length === 0 || paymentInfo.length === 0) {
            alert('Por favor, preencha todas as informações antes de finalizar.');
            return;
        }
        
        let message = 'Aqui está...\n\n';
        message += '*Itens selecionados:*\n' + '-'+ selectedProducts.join('\n-') +'(dia)';
        message += '\n\n*Informações do cadastro:*\n';
        message += `Nome: ${cadastroInfo.name}\nCPF: ${cadastroInfo.cpf}\nTelefone: ${cadastroInfo.phone}\nEndereço: ${cadastroInfo.address}\nComplemento: ${cadastroInfo.complement}\n\n*Observação:* ${cadastroInfo.observation}`;
        message += '\n\n*Forma de pagamento:*\n' + paymentInfo.join(';\n');

        const phoneNumber = '+5567992791493'; // Substitua pelo número de telefone de destino
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappURL, '_blank');
    });
});

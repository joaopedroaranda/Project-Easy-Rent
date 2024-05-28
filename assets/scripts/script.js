document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.products input[type="checkbox"]');
    const cartItems = document.getElementById('cartItems');
    const checkoutButton = document.getElementById('checkoutButton');

    products.forEach(product => {
        product.addEventListener('change', updateCart);
    });

    function updateCart() {
        cartItems.innerHTML = '';
        products.forEach(product => {
            if (product.checked) {
                const listItem = document.createElement('li');
                listItem.textContent = `${product.dataset.name}`;
                cartItems.appendChild(listItem);
            }
        });
    }

    checkoutButton.addEventListener('click', () => {
        const cartText = generateCartText();
        sendToWhatsApp(cartText);
    });

    function generateCartText() {
        let cartText = 'Itens Selecionados:\n';
        products.forEach(product => {
            if (product.checked) {
                cartText += `${product.dataset.name} - $${product.dataset.price} ${product.dataset.mensage}\n`;
            }
        });
        return cartText;
    }

    function sendToWhatsApp(cartText) {
        const whatsappNumber = '+5567991105157'; // Substitua pelo número da sua empresa
        const whatsappMessage = encodeURIComponent(cartText);
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
        window.open(whatsappURL, '_blank');
    }
});

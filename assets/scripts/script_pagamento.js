document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.checkbox-group input[type="checkbox"]');
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const checkedCheckboxes = Array.from(checkboxes).filter(i => i.checked);
            if (checkedCheckboxes.length >= 2) {
                checkboxes.forEach(i => {
                    if (!i.checked) {
                        i.disabled = true;
                    }
                });
            } else {
                checkboxes.forEach(i => i.disabled = false);
            }
        });
    });
});

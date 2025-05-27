document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', function() {
        this.classList.add('active');
        
        setTimeout(() => {
            this.classList.remove('active');
            if (window.Telegram && Telegram.WebApp) {
                Telegram.WebApp.sendData(JSON.stringify({
                    productId: this.dataset.id
                }));
            }
        }, 1000);
    });
});

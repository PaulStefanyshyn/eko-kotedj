document.querySelectorAll('.home-reservation-btn').forEach(link => {
    link.addEventListener('click', function () {
        sessionStorage.setItem('data-blocked', this.dataset.blocked);
        e.preventDefault();

        console.log(this.dataset.blocked);
        setTimeout(() => {
            window.location.href = this.href;
        }, 30000);
    });
});
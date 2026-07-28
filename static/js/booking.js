document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector("[data-booking-calendar-form]");
    const blocked = JSON.parse(sessionStorage.getItem("data-blocked") || "[]");
    console.log("blocked: " + blocked);
    if (blocked) {
        form.dataset.blocked = blocked;
    }
});
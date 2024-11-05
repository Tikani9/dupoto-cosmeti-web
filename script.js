document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('order-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const serviceID = 'service_0v7yhoo';
        const templateID = 'template_gv4p5hu';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                alert('Your order has been sent successfully!');
                form.reset();
            }, (err) => {
                alert('Failed to send the order. Please try again.');
                console.error('EmailJS Error:', err);
            });
    });
});


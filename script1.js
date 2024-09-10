document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const responseDiv = document.getElementById('form-response');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        // Collect form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simple form validation
        if (!name || !email || !message) {
            responseDiv.textContent = 'Please fill out all fields.';
            return;
        }

        // For demonstration purposes, we'll just display a success message
        responseDiv.textContent = `Thank you, ${name}! Your message has been sent.`;

        // Clear the form
        form.reset();
    });
});

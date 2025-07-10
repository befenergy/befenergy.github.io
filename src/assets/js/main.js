document.addEventListener('DOMContentLoaded', function() {
    const quoteForm = document.getElementById('quoteForm');
    
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(event) {
            event.preventDefault();
            validateForm();
        });
    }

    function validateForm() {
        const postalCode = document.getElementById('postalCode').value;
        const housingType = document.querySelector('input[name="housingType"]:checked');
        const roofType = document.querySelector('input[name="roofType"]:checked');
        const residents = document.querySelector('input[name="residents"]:checked');
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const mobile = document.getElementById('mobile').value;

        if (!postalCode || !housingType || !roofType || !residents || !name || !email || !mobile) {
            alert('Please fill in all fields.');
            return;
        }

        // Redirect to a thank you page or display a success message
        alert('Thank you for your submission!');
        // Optionally, you can redirect to another page
        // window.location.href = 'thank-you.html';
    }
});
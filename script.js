document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form'); // Selecting the form
    const feedbackDiv = document.getElementById('form-feedback'); // Selecting the feedback division

    // Selecting input fields by their respective IDs
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // Add an event listener for the 'submit' event
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission to the server

        // Retrieve values and trim whitespace
        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Validation variables
        let isValid = true; // Track overall validation status
        const messages = []; // Store validation error messages

        // Validation logic
        if (username === '') {
            isValid = false;
            messages.push('Username is required.');
        } else if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        if (email === '') {
            isValid = false;
            messages.push('Email is required.');
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            isValid = false;
            messages.push('Email is not valid.');
        }

        if (password === '') {
            isValid = false;
            messages.push('Password is required.');
        } else if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        // Make feedbackDiv visible
        feedbackDiv.style.display = "block";

        // Provide feedback based on validation status
        if (isValid) {
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745'; // Green color for success
        } else {
            feedbackDiv.innerHTML = messages.join('<br>'); // Join messages with <br>
            feedbackDiv.style.color = '#dc3545'; // Red color for errors
        }
    });
});

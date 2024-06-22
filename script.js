document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll('.error').forEach(function(errorElement) {
        errorElement.style.display = 'none';
    });

    // Validate username
    const username = document.getElementById('username').value;
    if (username.length < 3) {
        isValid = false;
        const usernameError = document.getElementById('usernameError');
        usernameError.textContent = 'Username must be at least 3 characters long';
        usernameError.style.display = 'block';
    }

    // Validate email
    const email = document.getElementById('email').value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
    if (!emailPattern.test(email)) {
        isValid = false;
        const emailError = document.getElementById('emailError');
        emailError.textContent = 'Please enter a valid email address';
        emailError.style.display = 'block';
    }

    // Validate password
    const password = document.getElementById('password').value;
    if (password.length < 6) {
        isValid = false;
        const passwordError = document.getElementById('passwordError');
        passwordError.textContent = 'Password must be at least 6 characters long';
        passwordError.style.display = 'block';
    }

    // Validate confirm password
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (confirmPassword !== password) {
        isValid = false;
        const confirmPasswordError = document.getElementById('confirmPasswordError');
        confirmPasswordError.textContent = 'Passwords do not match';
        confirmPasswordError.style.display = 'block';
    }

    // Submit the form if all validations pass
    if (isValid) {
        alert('Registration successful');
        // Here you can add the code to actually submit the form data
    }
});

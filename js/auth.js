// Authentication Script for VibeCopilot Login
document.addEventListener('DOMContentLoaded', function() {
    try {
        // Get form elements
        const loginForm = document.getElementById('login-form');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const errorMessage = document.getElementById('error-message');
        const loginBtn = document.querySelector('.login-btn');

        // Valid credentials (as provided)
        const VALID_CREDENTIALS = {
            email: 'akshat.shrawat@vibecopilot.ai',
            password: 'Vibe@123'
        };

        // Clear error message when user starts typing
        function clearError() {
            errorMessage.classList.remove('show');
            errorMessage.textContent = '';
        }

        emailInput.addEventListener('input', clearError);
        passwordInput.addEventListener('input', clearError);

        // Handle form submission
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            try {
                // Get input values
                const email = emailInput.value.trim();
                const password = passwordInput.value.trim();

                // Validate inputs
                if (!email || !password) {
                    showError('Please enter both email and password.');
                    return;
                }

                // Validate email format
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    showError('Please enter a valid email address.');
                    return;
                }

                // Show loading state
                loginBtn.textContent = 'Logging in...';
                loginBtn.disabled = true;

                // Simulate authentication delay
                setTimeout(() => {
                    // Check credentials
                    if (email === VALID_CREDENTIALS.email && password === VALID_CREDENTIALS.password) {
                        // Store login state
                        sessionStorage.setItem('isLoggedIn', 'true');
                        sessionStorage.setItem('userEmail', email);
                        
                        // Redirect to dashboard
                        window.location.href = 'dashboard.html';
                    } else {
                        showError('Invalid email or password. Please try again.');
                        resetLoginButton();
                    }
                }, 1000);

            } catch (error) {
                console.error('Login error:', error);
                showError('An unexpected error occurred. Please try again.');
                resetLoginButton();
            }
        });

        // Helper function to show error messages
        function showError(message) {
            errorMessage.textContent = message;
            errorMessage.classList.add('show');
        }

        // Helper function to reset login button
        function resetLoginButton() {
            loginBtn.textContent = 'Login';
            loginBtn.disabled = false;
        }

        // Handle SSO button (placeholder functionality)
        const ssoBtn = document.querySelector('.sso-btn');
        if (ssoBtn) {
            ssoBtn.addEventListener('click', function() {
                showError('SSO functionality is not implemented in this demo.');
            });
        }

        // Add enter key support for password field
        passwordInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                loginForm.dispatchEvent(new Event('submit'));
            }
        });

    } catch (error) {
        console.error('Authentication script initialization error:', error);
    }
});

// Check if user is already logged in (for direct access to login page)
window.addEventListener('load', function() {
    if (sessionStorage.getItem('isLoggedIn') === 'true') {
        window.location.href = 'dashboard.html';
    }
});

// public/js/auth.js - FINAL VERSION, WORKS LOCALLY AND LIVE

document.addEventListener('DOMContentLoaded', () => {
    // This line automatically detects the environment.
    const API_BASE_URL = window.location.origin;

    const googleLoginBtn = document.getElementById('google-login-btn');
    const logoutBtn = document.getElementById('logout-btn');

    if (googleLoginBtn) {
        googleLoginBtn.addEventListener('click', () => {
            window.location.href = `${API_BASE_URL}/auth/google`;
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            window.location.href = `${API_BASE_URL}/auth/logout`;
        });
    }
});
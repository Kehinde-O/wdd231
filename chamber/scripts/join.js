// Display current year and last modified date
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Set timestamp for form submission
document.getElementById('timestamp').value = new Date().toISOString();

// Modals
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Hamburger menu
const checkbox = document.getElementById('menu-toggle');
const nav = document.querySelector('nav');

checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
});

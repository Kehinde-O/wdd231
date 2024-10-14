// Function to retrieve URL parameters
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        firstName: params.get('firstName'),
        lastName: params.get('lastName'),
        email: params.get('email'),
        phone: params.get('phone'),
        organization: params.get('organization'),
        timestamp: params.get('timestamp')
    };
}

// Populate the form data in the thank you page
document.addEventListener('DOMContentLoaded', function () {
    const queryParams = getQueryParams();

    document.getElementById('firstName').textContent = queryParams.firstName;
    document.getElementById('lastName').textContent = queryParams.lastName;
    document.getElementById('email').textContent = queryParams.email;
    document.getElementById('phone').textContent = queryParams.phone;
    document.getElementById('organization').textContent = queryParams.organization;
    document.getElementById('timestamp').textContent = new Date(queryParams.timestamp).toLocaleString();
});

// Display current year and last modified date in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Display current year and last modified date
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Fetch and display directory data
fetch('data/members.json')
    .then(response => response.json())
    .then(data => displayDirectory(data));

function displayDirectory(members) {
    const container = document.getElementById('directory-container');
    container.innerHTML = '';  // Clear previous content
    members.forEach(member => {
        const item = document.createElement('div');
        item.classList.add('directory-item');
        item.innerHTML = `
            <div class="business_and_name">
                <h3>${member.name}</h3>
                <p>${member.tagline}</p>
            </div>
            <div class="image_and_details">
                <img src="${member.logo}" alt="${member.name} Logo" class="business-logo">
                <div class="business-details">
                    <p><strong>EMAIL:</strong> ${member.email}</p>
                    <p><strong>PHONE:</strong> ${member.phone}</p>
                    <p><strong>URL:</strong> ${member.url}</p>
                </div>
            </div>
        `;
        container.appendChild(item);
    });
}


// Hamburger toggle
const checkbox = document.getElementById('menu-toggle');
const nav = document.querySelector('nav');

checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
        nav.style.display = 'block'; 
    } else {
        nav.style.display = 'none';
    }
});

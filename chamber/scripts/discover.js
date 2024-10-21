// Lazy Loading Images
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("img");

    images.forEach(img => {
        if ('loading' in HTMLImageElement.prototype) {
            img.loading = 'lazy';
        } else {
            // Fallback for browsers that do not support lazy loading
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        observer.unobserve(img);
                    }
                });
            });
            observer.observe(img);
        }
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const visitMessage = document.getElementById('visitMessage'); // Assuming you have a <p> with id="visitMessage"
    
    // Get current time and last visit time from localStorage
    const currentVisit = new Date().getTime();
    const lastVisit = localStorage.getItem('lastVisitTime');

    // Store the current visit time in localStorage for future visits
    localStorage.setItem('lastVisitTime', currentVisit);

    // If this is the first visit
    if (!lastVisit) {
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
        return;
    }

    // Calculate the difference in time (in milliseconds)
    const timeDifference = currentVisit - parseInt(lastVisit);
    const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds

    // If less than a day has passed
    if (timeDifference < oneDay) {
        visitMessage.textContent = "Back so soon! Awesome!";
    } else {
        // Calculate the number of days
        const daysBetween = Math.floor(timeDifference / oneDay);

        // If the difference is exactly 1 day
        if (daysBetween === 1) {
            visitMessage.textContent = "You last visited 1 day ago.";
        } else {
            visitMessage.textContent = `You last visited ${daysBetween} days ago.`;
        }
    }
});



// // Storing Last Visit Date in localStorage
// const visitMessage = document.getElementById('visitMessage');
// const lastVisit = localStorage.getItem('lastVisit');
// const currentDate = new Date().toLocaleDateString();

// if (lastVisit) {
//     visitMessage.textContent = `Welcome back! Your last visit was on ${lastVisit}`;
// } else {
//     visitMessage.textContent = "Welcome to the Discover page!";
// }

// localStorage.setItem('lastVisit', currentDate);

// Footer dynamic content
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;





/////CALENDER SETUP
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

const calendarDays = document.getElementById('calendarDays');
const monthYear = document.getElementById('monthYear');

function renderCalendar(month, year) {
    calendarDays.innerHTML = ''; // Clear previous days
    monthYear.textContent = `${monthNames[month]} ${year}`;

    const firstDay = new Date(year, month).getDay();
    const daysInMonth = 32 - new Date(year, month, 32).getDate();

    // Fill the calendar days
    for (let i = 0; i < firstDay; i++) {
        calendarDays.innerHTML += `<div></div>`;
    }

    for (let day = 1; day <= daysInMonth; day++) {
        let eventClass = '';
        
        // You can customize events here
        if (month === 9 && day === 25) eventClass = 'event'; // Example of marking an event

        calendarDays.innerHTML += `<div class="${eventClass}">${day}</div>`;
    }
}

document.getElementById('prevMonth').addEventListener('click', function() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar(currentMonth, currentYear);
});

document.getElementById('nextMonth').addEventListener('click', function() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar(currentMonth, currentYear);
});

renderCalendar(currentMonth, currentYear);

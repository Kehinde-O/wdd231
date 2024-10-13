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

// document.getElementById('gridViewBtn').addEventListener('click', () => {
//     document.getElementById('directory-container').classList.add('grid');
//     document.getElementById('directory-container').classList.remove('list');
// });

// document.getElementById('listViewBtn').addEventListener('click', () => {
//     document.getElementById('directory-container').classList.add('list');
//     document.getElementById('directory-container').classList.remove('grid');
// });








//////WEATHER
const apiKey = 'f360abbcae457ec84e0acf7645973942';
const city = 'Lagos';
const country = 'NG';

// Fetch current weather data
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        displayCurrentWeather(data);
    })
    .catch(error => console.error('Error fetching current weather:', error));

// Fetch 3-day forecast data
fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        console.log("Forecast Data",data)
        displayWeatherForecast(data);
    })
    .catch(error => console.error('Error fetching weather forecast:', error));

// Function to display the current weather
function displayCurrentWeather(data) {
    const container = document.getElementById('weather-container');
    const { temp } = data.main;
    const description = data.weather[0].description;

    container.innerHTML = `
        <p><b>${temp.toFixed(1)}°C</b></p>
        <p>${description.charAt(0).toUpperCase() + description.slice(1)}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}

// Function to display the 3-day forecast
function displayWeatherForecast(data) {
    const container = document.getElementById('forecast-container');
    const forecast = [];

    // Extract the forecast for the next 3 days (using 24-hour data points)
    data.list.forEach(item => {
        const date = new Date(item.dt * 1000);
        const hours = date.getHours();
        console.log("Hour",hours,date)
        if (hours === 1) {  // Select forecast for 12:00 PM each day
            forecast.push({
                date: date.toLocaleDateString(),
                temp: item.main.temp.toFixed(1),
                description: item.weather[0].description
            });
        }
    });

    // Display the forecast
    container.innerHTML = forecast.slice(0, 3).map(day => `
        <p><b>${day.date}</b>: ${day.temp}°C - ${day.description.charAt(0).toUpperCase() + day.description.slice(1)}</p>
    `).join('');
}






///////////////////SPOTLIGHTS/////////////////
// Fetch and display members
fetch('data/members.json')
    .then(response => response.json())
    .then(data => {
        displaySpotlights(data);
    })
    .catch(error => console.error('Error fetching member data:', error));

// Function to display spotlights
function displaySpotlights(members) {
    const spotlightContainer = document.getElementById('spotlights-container');
    spotlightContainer.innerHTML = '';  // Clear previous content

    // Filter out gold and silver members
    const goldAndSilverMembers = members.filter(member => 
        member.membershipLevel === 'gold' || member.membershipLevel === 'silver');

    // Randomly select 2 or 3 members
    const randomMembers = getRandomMembers(goldAndSilverMembers, 2 + Math.floor(Math.random() * 2));

    // Display each member in the spotlight
    randomMembers.forEach(member => {
        const spotlightItem = document.createElement('div');
        spotlightItem.classList.add('spotlight-item');
        spotlightItem.innerHTML = `
            <img src="${member.logo}" alt="${member.name} Logo" class="business-logo">
            <h3>${member.name}</h3>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><a href="${member.url}" target="_blank">Visit Website</a></p>
            <p><strong>Membership Level:</strong> ${member.membershipLevel.charAt(0).toUpperCase() + member.membershipLevel.slice(1)}</p>
        `;
        spotlightContainer.appendChild(spotlightItem);
    });
}

// Function to randomly select 'n' members from a given array
function getRandomMembers(arr, n) {
    const shuffled = arr.sort(() => 0.5 - Math.random());  // Shuffle the array
    return shuffled.slice(0, n);  // Return the first 'n' elements
}

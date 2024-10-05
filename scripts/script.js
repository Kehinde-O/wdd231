// Display current year and last modified date
document.getElementById('currentYear').textContent = new Date().getFullYear();

document.getElementById('lastModified').textContent = document.lastModified;


// Course Data
const courses = [
    {
        id: 1,
        name: "GS 170",
        completed: false,
        credits: 1
    },
    {
        id: 2,
        name: "WDD 130",
        completed: true,
        credits: 2
    },
    {
        id: 3,
        name: "CSE 111",
        completed: true,
        credits: 2
    },
    {
        id: 4,
        name: "CSE 210",
        completed: true,
        credits: 2
    }, {
        id: 5,
        name: "WDD 131",
        completed: false,
        credits: 2
    }, {
        id: 6,
        name: "WDD 231",
        completed: false,
        credits: 2
    }, {
        id: 7,
        name: "ITM 111",
        completed: false,
        credits: 3
    }
];

// Display courses dynamically
const courseList = document.querySelector('.courses');
function displayCourses(filter = 'all') {
    courseList.innerHTML = ''; // Clear current list
    let filteredCourses = courses;

    if (filter === 'CSE') {
        filteredCourses = courses.filter(course => course.name.includes('CSE'));
    } else if (filter === 'WDD') {
        filteredCourses = courses.filter(course => course.name.includes('WDD'));
    } else if (filter === 'ITM') {
        filteredCourses = courses.filter(course => course.name.includes('ITM'));
    } else if (filter === 'GS') {
        filteredCourses = courses.filter(course => course.name.includes('GS'));
    }

    filteredCourses.forEach(course => {
        const button = document.createElement('button');
        button.textContent = course.name;
        button.classList.add('course-button');
        if (course.completed) 
            button.classList.add('completed');
        
        courseList.appendChild(button);
    });
}

// Filter functionality
document.getElementById('filterAll').addEventListener('click', () => displayCourses('all'));
document.getElementById('filterCSE').addEventListener('click', () => displayCourses('CSE'));
document.getElementById('filterWDD').addEventListener('click', () => displayCourses('WDD'));
document.getElementById('filterITM').addEventListener('click', () => displayCourses('ITM'));
document.getElementById('filterGS').addEventListener('click', () => displayCourses('GS'));

// Display total credits dynamically
const totalCredits = courses.reduce((acc, course) => acc + course.credits, 0);
document.getElementById('totalCredits').textContent = `Total Credits: ${totalCredits}`;

// Initialize course display
displayCourses();


// Select the checkbox and the nav element
const checkbox = document.getElementById('menu-toggle');
const nav = document.querySelector('nav');

// Add an event listener for checkbox changes
checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
        nav.style.display = 'flex';  // Show the nav
        nav.style.flexDirection = 'column';  // Ensure vertical layout
    } else {
        nav.style.display = 'none';  // Hide the nav
    }
});
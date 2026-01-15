// project.js

const projectList = [
    {
        id: 1,
        number: "01",
        title: "Expense Tracker",
        description: "A web application to track income and expenses with charts, categories, and summary reports.<br> Built with HTML, CSS, JavaScript, and a bit of Python for backend logic.",
        techstack: ["HTML", "CSS", "JavaScript", ],
        image: "assests/projects/tracker.jpeg",
        liveLink: "#",
        githubLink: "https://github.com/Monalishasahu14/ExpenseTracker",
    },
    {
        id: 2,
        number: "02",
        title: "Student Grade Calculator",
        description: "Web app that calculates students' grades and GPA. Provides downloadable reports and a responsive UI.<br>Built using HTML, CSS, JS, and Python for calculations.",
        techstack: ["HTML", "CSS", "JavaScript", "Python"],
        image: "assests/projects/grade.jpeg",
        liveLink: "#",
        githubLink: "https://github.com/Monalishasahu14/StudentGradeCalculator",
    },
    {
        id: 3,
        number: "03",
        title: "Food Order App",
        description: "A responsive web app for ordering food online with cart functionality, product list, and smooth user experience.<br>Built using HTML, CSS, JavaScript, and Python backend logic.",
        techstack: ["HTML", "CSS", "JavaScript", ],
        image: "assests/projects/food.jpeg",
        liveLink: "#",
        githubLink: "https://github.com/Monalishasahu14/FoodOrderApp",
    },
    {
        id: 4,
        number: "04",
        title: "Portfolio Website",
        description: "My personal portfolio showcasing my skills, projects, and contact info. Designed to be colorful, modern, and responsive.<br>Built with HTML, CSS, JavaScript, and a bit of Python for contact form backend.",
        techstack: ["HTML", "CSS", "JavaScript", ],
        image: "assests/projects/Portfolio.jpg",
        liveLink: "#",
        githubLink: "https://github.com/Monalishasahu14/Portfolio",
    }
];

// Select the container
const projectsContainer = document.querySelector(".projects");

// Render all projects
const renderProjects = () => {
    projectsContainer.innerHTML = projectList.map(project => `
        <div class="project-card">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" />
            </div>
            <div class="project-content">
                <div class="project-icon">💻</div>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tech-stack">
                    ${project.techstack.map(tech => `<span>${tech}</span>`).join("")}
                </div>
                <div class="project-links">
                    <a href="${project.liveLink}" target="_blank" class="btn">Live</a>
                    <a href="${project.githubLink}" target="_blank" class="btn">GitHub</a>
                </div>
            </div>
        </div>
    `).join("");
};

// Initialize
renderProjects();

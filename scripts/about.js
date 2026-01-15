const aboutTabs = document.querySelectorAll(".tab");
const aboutContent = document.querySelectorAll(".tab-content");

// On page load, click the first tab
document.addEventListener("DOMContentLoaded", () => {
    if (aboutTabs.length > 0) aboutTabs[0].click();
});

// Tab click handler
aboutTabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
        e.preventDefault();

        // Remove active from all tabs
        aboutTabs.forEach(a => a.classList.remove("active"));
        tab.classList.add("active");

        // Remove active from all content
        aboutContent.forEach(c => c.classList.remove("active"));

        const activeTab = tab.dataset.section;
        const activeContent = document.getElementById(activeTab);
        if (activeContent) activeContent.classList.add("active");

        // ------------------ Experience ------------------
 // ------------------ Experience ------------------
if (activeTab === "experience") {
    const experiences = document.querySelector(".experience-list");
    const experienceList = [
        {
            id: 1,
            date: "2023 – 2024",
            position: "Frontend Web Developer (Academic Project)",
            company: "Expense Tracker App",
            details: "Created a fully responsive web application to track personal finance using HTML, CSS, and JavaScript. Implemented dynamic charts and real-time calculations for income and expenses."
        },
        {
            id: 2,
            date: "2024",
            position: "Python Developer (Mini Projects)",
            company: "Personal Projects",
            details: "Built Python scripts and small backend applications to automate tasks, process data, and enhance learning in object-oriented programming and algorithmic problem solving."
        },
        {
            id: 3,
            date: "2025",
            position: "Full-Stack Web Application Developer",
            company: "Web Development Projects",
            details: "Designed relational databases with SQL, integrated them with HTML/CSS/JavaScript web forms, and practiced CRUD operations. Gained hands-on experience with client-server interactions and responsive design."
        }
    ];

    if (experiences) {
        const experienceContent = experienceList.map((ele) => `
            <div class="experience-box" key=${ele.id}>
                <h4>${ele.date}</h4>
                <h3>${ele.position}</h3>
                <div class="company-name">
                    <span></span>
                    <p>${ele.company}</p>
                </div>
                <p>${ele.details}</p>
            </div>
        `).join("");

        experiences.innerHTML = experienceContent;
    }
}



        // ------------------ Education ------------------
        if (activeTab === "education") {
            const education = document.querySelector(".education-list");
            const educationList = [
                {
                    id: 1,
                    date: "2023-2026",
                    degree: "Bachelor of Computer Science (CS)",
                    Institution: "Lakshya Institute Of Technology, Bhubaneswar",
                    details: "Studied core CS subjects like Data Structures, OS, DBMS, Web Development, and Networks. Built multiple academic projects."
                },
                {
                    id: 2,
                    date: "2021-2023",
                    degree: "Higher Secondary Education (Science)",
                    Institution: "Science College Autonomous, Hinjilicut",
                    details: "Specialized in Physics, Chemistry & Maths, developing strong analytical and problem-solving skills."
                },
                {
                    id: 3,
                    date: "2020-2021",
                    degree: "Board of Secondary School",
                    Institution: "Saraswati Shishu Vidya Mandir, Hinjilicut",
                    details: "Completed school education with good academic performance and early interest in computers."
                }
            ];

            if (education) {
                education.innerHTML = educationList.map(ele => `
                    <div class="experience-box">
                        <h4>${ele.date}</h4>
                        <h3>${ele.degree}</h3>
                        <div class="company-name"><span></span><p>${ele.Institution}</p></div>
                        <p>${ele.details}</p>
                    </div>
                `).join("");
            }
        }

        // ------------------ Skills ------------------
if (activeTab === "skills") {
    const skills = document.querySelector(".skill-list");
    const skillList = [
        { name: "HTML", icon: "fab fa-html5" },
        { name: "CSS", icon: "fab fa-css3-alt" },
        { name: "JavaScript", icon: "fab fa-js-square" },
        { name: "Python", icon: "fab fa-python" },
        { name: "React", icon: "fab fa-react" },
        { name: "Django", icon: "fas fa-leaf" }, // placeholder icon
        { name: "MongoDB", icon: "fas fa-database" }
    ];

    if (skills) {
        skills.innerHTML = skillList.map(skill => `
            <div class="skill-box">
                <i class="${skill.icon}"></i> ${skill.name}
            </div>
        `).join("");
    }
}

        // ------------------ About Me ------------------
        if (activeTab === "about-me") {
            const myInfo = document.querySelector(".my-info");
            const infoList = [
                { key: "Name:", value: "Monalisha Sahu" },
                { key: "Country:", value: "India" },
                { key: "Industry:", value: "Software & IT" },
                { key: "Experience:", value: "Fresher" },
                { key: "Address:", value: "Bhubaneswar" }
            ];

            if (myInfo) {
                myInfo.innerHTML = infoList.map(ele => `
                    <div class="info-box"><span>${ele.key}</span> <span>${ele.value}</span></div>
                `).join("");
            }
        }
    });
});

const toggle=document.getElementById('menu-toggle');

if(toggle && toggle.checked){
            document.body.classList.add
            ("no-scroll");
}else{
      document.body.classList.remove
            ("no-scroll");
}
const words = [
    "Python Web Developer",
    "B.Sc. CS Student",
    "Fresher",
    "Coding Enthusiast",
    "Problem Solver"
];

const typingText=document.getElementById("typing-span");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let erasingDelay = 100;
let nextWordDelay = 1000;

const type = () =>{
    const currentWord = words[wordIndex];

    if(!isDeleting){
        typingText.textContent = currentWord.substring(0,charIndex + 1);
        charIndex++;

        if(charIndex === currentWord.
            length){
             isDeleting = true;
             setTimeout(type, nextWordDelay);   
         }else{
             setTimeout(type,typingDelay); 
         }
    }else{
        typingText.textContent = currentWord.substring(0,charIndex -1);
        charIndex--;

        if(charIndex===0){
            isDeleting = false;
            wordIndex = (wordIndex + 1)%
            words.length;
            setTimeout(type,500);
        }else{
             setTimeout(type,erasingDelay);
        }
    }
};

document.addEventListener('DOMContentLoaded',()=>{
    if(words?.length) type();
});

const navlinks= document.querySelectorAll(".navlink");

const tabs = document.querySelectorAll(".content");

navlinks.forEach((link) => {
    link.addEventListener("click", (e)=>{
        e.preventDefault();

        navlinks.forEach((l) => {
            if(l === link){
                l.classList.add("active");
            }else{
                l.classList.remove("active");
            }
        });

        const tabName=link.dataset.tab;

        tabs.forEach((tab) => {
            if(tab.id===tabName){
                tab.classList.add("active");
            }else{
                tab.classList.remove
                ("active");
            }
});

if(tabName === "services"){
    const serviceList = [
        {
        id: 1,
        icon: "ph-code",
        text: "Web Development",
        para: "I design and develop responsive websites using HTML, CSS, JavaScript, and Python, focusing on clean UI, basic backend logic, and user-friendly experiences.",
    },
    {
    
    id: 2,
    icon: "ph-python-logo",
    text: "Python Developer",
    para: "I develop beginner-friendly and responsive web applications using Python, with a strong focus on logic building and backend development.",
},

 {
    id: 3,
    icon: "ph-database",
    text: "Database Design & Management",
    para: "I design and manage databases using MySQL and SQLite, focusing on proper table structure, relationships, and efficient queries for web applications.",
},

    {
    id: 4,
    icon: "ph-server",
    text: "Backend Development",
    para: "I build efficient and scalable backend systems using Python frameworks like Flask and Django, integrating databases and APIs for web applications.",
},
{
    id: 5,
    icon: "ph-code",
    text: "Web Application Development",
    para: "I develop responsive and interactive web applications using Python, HTML, CSS, JavaScript, and frameworks like Django and Flask.",
},
{
    id: 6,
    icon: "ph-lightbulb",
    text: "Problem Solving & Projects",
    para: "I provide practical solutions for small-scale projects, including coding logic, database design, and web app structuring to help bring ideas to life.",
}

];
    const services = document.getElementsByClassName("service-list");

    const innerContent = serviceList.map((l) => {
         return `
         <div class="box" key=${l?.id}>
                <div class="head-icons">
                    <i class="ph ${l?.icon}"></i>
                  <span>
                     <i class="ph ph-arrow-down-right"></i>
                  </span>  
                </div>
                <h3>${l?.text}</h3>
                <span class="spacer"></span>

                <p>${l?.para}</p>
                </div>
        `;
    })
    .join("");
               
   Array.from(services).forEach((ele)=>{
       ele.innerHTML=innerContent;   
     });
}  

    toggle.checked = false;
});
});

const serviceContainer = document.querySelector(".service-list");

serviceList.forEach(service => {
    serviceContainer.innerHTML += `
    <div class="box">
        <div class="head-icons">
            <i class="${service.icon}"></i>
        </div>
        <h3>${service.text}</h3>
        <p>${service.para}</p>
    </div>
    `;
});


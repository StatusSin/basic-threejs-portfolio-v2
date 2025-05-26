const navLinks = [
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },
    {
        name: "Testimonials",
        link: "#testimonials",
    },
];

const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
    { value: 7, suffix: "+", label: "Years of Experience" },
    { value: 50, suffix: "+", label: "Completed Projects" },
    { value: 2, suffix: "", label: "Certificates" },
    { value: 30, suffix: "+", label: "Languages" },
];

const logoIconsList = [
    {
        imgPath: "/images/logos/company-logo-1.png",
    },
    {
        imgPath: "/images/logos/company-logo-2.png",
    },
    {
        imgPath: "/images/logos/company-logo-3.png",
    },
    {
        imgPath: "/images/logos/company-logo-4.png",
    },
    {
        imgPath: "/images/logos/company-logo-5.png",
    },
    {
        imgPath: "/images/logos/company-logo-6.png",
    },
    {
        imgPath: "/images/logos/company-logo-7.png",
    },
    {
        imgPath: "/images/logos/company-logo-8.png",
    },
    {
        imgPath: "/images/logos/company-logo-9.png",
    },
    {
        imgPath: "/images/logos/company-logo-10.png",
    },
    {
        imgPath: "/images/logos/company-logo-11.png",
    },
];

const abilities = [
    {
        imgPath: "/images/seo.png",
        title: "Quality Focus",
        desc: "Developing high-quality work while maintaining attention to every detail.",
    },
    {
        imgPath: "/images/chat.png",
        title: "Reliable Communication",
        desc: "Keeping transparency and clarity the forefront of project workflow.",
    },
    {
        imgPath: "/images/time.png",
        title: "On-Time Delivery",
        desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
];

const techStackImgs = [
    {
        name: "React Developer",
        imgPath: "/images/logos/react.png",
    },
    {
        name: "Python Developer",
        imgPath: "/images/logos/python.svg",
    },
    {
        name: "Backend Developer",
        imgPath: "/images/logos/node.png",
    },
    {
        name: "Interactive Developer",
        imgPath: "/images/logos/three.png",
    },
    {
        name: "Project Manager",
        imgPath: "/images/logos/git.svg",
    },
];

const techStackIcons = [
    {
        name: "React Developer",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Python Developer",
        modelPath: "/models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Backend Developer",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Interactive Developer",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "Project Manager",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        location:
            "Santa Monica, CA",
        imgPath: "/images/CodeRevKids-full.png",
        logoPath: "/images/CodeRevKidsLogo.png",
        logoSize: 70,
        title: "Coding Instructor",
        date: "July 2022 - August 2023",
        timelineColor: "#62e0ff",
        responsibilities: [
            "Trained over 100 students in Python, Java, C++ and Scratch.",
            "Designed a teaching curriculum to effectively teach students of different backgrounds.",
        ],
    },
    {
        location:
            "Burbank, CA",
        imgPath: "/images/GothamCityLA-full.png",
        logoPath: "/images/GothamCityLALogo.png",
        logoSize: 70,
        title: "Full Stack Engineer (contract)",
        date: "June 2022 - July 2022",
        timelineColor: "#ffe562",
        responsibilities: [
            "Built a full-stack web application using React, Node.js, and Express.",
            "Streamlined server architecture to optimize performance and scalability.",
            "Used three.js, gsap, and react-three-fiber to create an interactive and aesthetically pleasing experience.",
        ],
    },
    {
        location:
            "Remote",
        imgPath: "/images/EA-full.png",
        logoPath: "/images/EALogo.png",
        logoSize: 70,
        title: "Software Engineer Intern",
        date: "August 2021 - December 2021",
        timelineColor: "#ff3e3e",
        responsibilities: [
            "Expanded functionality for multi-generational compatibility on Battlefield 2042 with C++ functions to decrease load on legacy systems.",
            "Developed AI opponent behaviors in C++ and Lua for Madden NFL 23.",
        ],
    },
    {
        location:
            "Remote",
        imgPath: "/images/inhabitr-full.png",
        logoPath: "/images/inhabitrLogo.png",
        logoSize: 58,
        title: "Software Engineer Intern",
        date: "June 2021 - August 2021",
        timelineColor: "#ffc062",
        responsibilities: [
            "Designed SQL model to categorize over 500 furniture SKUs and accurately track stock availability.",
            "Devised and pitched concept to expand into student rental market to management team.",
        ],
    },
];

const expLogos = [
    {
        name: "logo1",
        imgPath: "/images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "/images/logo2.png",
    },
    {
        name: "logo3",
        imgPath: "/images/logo3.png",
    },
    {
        name: "logo4",
        imgPath: "/images/inhabitrLogo.png",
    },
];

const educationCards = [
    {
        gpa: "GPA: ",
        imgPath: "/images/UIUC-full.png",
        logoPath: "/images/UIUCLogo.svg",
        logoSize: 65,
        title: "University of Illinois Urbana-Champaign",
        subtitle: "Master of Science in Computer Science",
        date: "August 2025 - Present",
        timelineColor: "#ff6210",
        responsibilities: [
            "UIUC 1.",
            "UIUC 2.",
            "UIUC 3.",
        ],
    },
    {
        gpa: "GPA: 3.94 / 4.0",
        imgPath: "/images/LMU-full.png",
        logoPath: "/images/LMULogo.svg",
        logoSize: 68,
        title: "Loyola Marymount University",
        subtitle: "Bachelor of Science in Computer Science",
        date: "August 2020 - May 2024",
        timelineColor: "#62e0ff",
        responsibilities: [
            "Conducted research using LLaMA and GPT LLM APIs in python to create a narrative agent capable of generating an interactive world around a base storyline.",
            "Built reinforcement learning and deep Q-learning agents in python to compete in tournament as final project of Artificial Intelligence course (CMSI 4320). ",
            "Developed Unity game using C# and Lua for Senior Capstone Project (CMSI 4071 - CMSI 4072)",
        ],
    },
];

const educationLogos = [
    {
        name: "UIUCLogo",
        imgPath: "/images/UIUCLogo.svg",
    },
    {
        name: "LMULogo",
        imgPath: "/images/LMULogo.svg",
    },
];

const testimonials = [
    {
        name: "Esther Howard",
        mentions: "@estherhoward",
        review:
            "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
        imgPath: "/images/client1.png",
    },
    {
        name: "Wade Warren",
        mentions: "@wadewarren",
        review:
            "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
        imgPath: "/images/client3.png",
    },
    {
        name: "Guy Hawkins",
        mentions: "@guyhawkins",
        review:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        imgPath: "/images/client2.png",
    },
    {
        name: "Marvin McKinney",
        mentions: "@marvinmckinney",
        review:
            "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
        imgPath: "/images/client5.png",
    },
    {
        name: "Floyd Miles",
        mentions: "@floydmiles",
        review:
            "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
        imgPath: "/images/client4.png",
    },
    {
        name: "Albert Flores",
        mentions: "@albertflores",
        review:
            "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
        imgPath: "/images/client6.png",
    },
];

const socialImgs = [
    {
        name: "insta",
        url: "https://www.instagram.com/",
        imgPath: "/images/insta.png",
    },
    {
        name: "fb",
        url: "https://www.facebook.com/",
        imgPath: "/images/fb.png",
    },
    {
        name: "x",
        url: "https://www.x.com/",
        imgPath: "/images/x.png",
    },
    {
        name: "linkedin",
        url: "https://www.linkedin.com/",
        imgPath: "/images/linkedin.png",
    },
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    educationCards,
    educationLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
};
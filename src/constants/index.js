const navLinks = [
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Work",
        link: "#work",
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

const counterItems = [
    { value: 7, suffix: "+", label: "Years of Experience" },
    { value: 50, suffix: "+", label: "Completed Projects" },
    { value: 2, suffix: "", label: "Certificates" },
    { value: 30, suffix: "+", label: "Languages" },
];

const logoIconsList = [
    {
        imgPath: "/images/LogosImages/company-logo-1.png",
    },
    {
        imgPath: "/images/LogosImages/company-logo-2.png",
    },
    {
        imgPath: "/images/LogosImages/company-logo-3.png",
    },
    {
        imgPath: "/images/LogosImages/company-logo-4.png",
    },
    {
        imgPath: "/images/LogosImages/company-logo-5.png",
    },
    {
        imgPath: "/images/LogosImages/company-logo-6.png",
    },
    {
        imgPath: "/images/LogosImages/company-logo-7.png",
    },
    {
        imgPath: "/images/LogosImages/company-logo-8.png",
    },
    {
        imgPath: "/images/LogosImages/company-logo-9.png",
    },
    {
        imgPath: "/images/LogosImages/company-logo-10.png",
    },
    {
        imgPath: "/images/LogosImages/company-logo-11.png",
    },
];

const abilities = [
    {
        imgPath: "/images/AbilitiesImages/seo.png",
        title: "Quality Focus",
        desc: "Developing high-quality work while maintaining attention to every detail.",
    },
    {
        imgPath: "/images/AbilitiesImages/chat.png",
        title: "Reliable Communication",
        desc: "Keeping transparency and clarity the forefront of project workflow.",
    },
    {
        imgPath: "/images/AbilitiesImages/time.png",
        title: "On-Time Delivery",
        desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
];

const educationCards = [
    {
        gpa: "GPA: ",
        imgPath: "/images/EducationImages/UIUC-full.png",
        logoPath: "/images/EducationImages/UIUCLogo.svg",
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
        imgPath: "/images/EducationImages/LMU-full.png",
        logoPath: "/images/EducationImages/LMULogo.svg",
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

const expCards = [
    {
        location:
            "Santa Monica, CA",
        imgPath: "/images/ExperienceImages/CodeRevKids-full.png",
        logoPath: "/images/ExperienceImages/CodeRevKidsLogo.png",
        logoSize: 70,
        title: "Coding Instructor",
        date: "July 2022 - August 2023",
        timelineColor: "#40a2bb",
        responsibilities: [
            "Trained over 100 students in Python, Java, C++ and Scratch.",
            "Designed a teaching curriculum to effectively teach students of different backgrounds.",
        ],
    },
    {
        location:
            "Burbank, CA",
        imgPath: "/images/ExperienceImages/GothamCityLA-full.png",
        logoPath: "/images/ExperienceImages/GothamCityLALogo.png",
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
        imgPath: "/images/ExperienceImages/EA-full.png",
        logoPath: "/images/ExperienceImages/EALogo.png",
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
        imgPath: "/images/ExperienceImages/inhabitr-full.png",
        logoPath: "/images/ExperienceImages/inhabitrLogo.png",
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

const techStackBulb = [
    {
        techStack: "Machine Learning",
        imgPathWhite: "/images/TechStackImages/AILogoWhite.svg",
        imgPathBlack: "/images/TechStackImages/AILogoBlack.svg",
        stack: [
            "Python",
            "C, C++",
            "PyTorch",
            "Pandas",
            "TensorFlow",
            "MLFlow",
            "Cuda",
        ],
        stackLogo: [
            "/images/TechStackImages/PythonLogo.svg",
            "/images/TechStackImages/C++Logo.svg",
            "/images/TechStackImages/PyTorchLogo.svg",
            "/images/TechStackImages/PandasLogo.svg",
            "/images/TechStackImages/TensorFlowLogo.svg",
            "/images/TechStackImages/MLFlowLogo.svg",
            "/images/TechStackImages/CudaLogo.svg",
        ],
        satelliteDistance: 140,
        centreDiameter: 270,   // px – overall button size   (default 192)
        logoSize: 100,          // px – logo inside button    (defaults to 0.42 × diameter)
        fontSize: 20,
        projectRoute: "/MachineLearningProjects",
    },
    {
        techStack: "Frontend",
        imgPathWhite: "/images/TechStackImages/FrontendLogoWhite.svg",
        imgPathBlack: "/images/TechStackImages/FrontendLogoBlack.svg",
        stack: [
            "JavaScript",
            "HTML",
            "React",
            "Next.js",
            "GSAP",
            "Three.js",
            "CSS",
        ],
        stackLogo: [
            "/images/TechStackImages/JavaScriptLogo.svg",
            "/images/TechStackImages/HTMLLogo.svg",
            "/images/TechStackImages/ReactLogo.svg",
            "/images/TechStackImages/NextJSLogo.svg",
            "/images/TechStackImages/GSAPLogo.svg",
            "/images/TechStackImages/ThreeJSLogo.svg",
            "/images/TechStackImages/CSSLogo.svg",
        ],
        satelliteDistance: 140,
        centreDiameter: 270,   // px – overall button size   (default 192)
        logoSize: 100,          // px – logo inside button    (defaults to 0.42 × diameter)
        fontSize: 20,
        projectRoute: "/FrontendProjects",
    },
    {
        techStack: "Backend",
        imgPathWhite: "/images/TechStackImages/BackendLogoWhite.svg",
        imgPathBlack: "/images/TechStackImages/BackendLogoBlack.svg",
        stack: [
            "Java",
            "Node.js",
            "AWS",
            "Microsoft Azure",
            "MySQL",
            "PostgreSQL",
            "MongoDB",
        ],
        stackLogo: [
            "/images/TechStackImages/JavaLogo.svg",
            "/images/TechStackImages/NodeJSLogo.svg",
            "/images/TechStackImages/awsLogo.svg",
            "/images/TechStackImages/MicrosoftAzureLogo.svg",
            "/images/TechStackImages/MySQLLogo.svg",
            "/images/TechStackImages/PostgreSQLLogo.svg",
            "/images/TechStackImages/MongoDBLogo.svg",
        ],
        satelliteDistance: 140,
        centreDiameter: 270,   // px – overall button size   (default 192)
        logoSize: 100,          // px – logo inside button    (defaults to 0.42 × diameter)
        fontSize: 20,
        projectRoute: "/BackendProjects",
    },
];

const techStackModels = [
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
    navLinks,
    counterItems,
    logoIconsList,
    abilities,
    educationCards,
    expCards,
    techStackBulb,
    techStackModels,
    socialImgs,
};
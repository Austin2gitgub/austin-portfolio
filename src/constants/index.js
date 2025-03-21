export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'My Work',
        href: '#projects',
    },
    {
        id: 5,
        name: 'Work Experience',
        href: '#experience',
    },
    {
        id: 6,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: 'assets/review3.png',
        review:
            'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];

export const myProjects = [
    {
        title: 'JPMC Financial Dashboard - P33',
        desc: 'Closely worked with JPMC(JPMorgan Chase) employees to create a financial dashboard & incorporating different tech stacks. Only team among 15+ teams to create dashboard with data visualization & streaming',
        subdesc: 'Learned a lot of skills from JPMC staff and working in a agile method. Tech Stack & Skills: Java Script, Bootstrap, Jot Forms, HTML 5, CSS, Agile Methodologies, Leadership.',
        href: "www.youtube.com",
        texture: '/textures/project/P33Project.mp4',
        logo: '/assets/project-logo1.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'javascript',
                path: '/assets/javascript.png',
            },
            {
                id: 2,
                name: 'Bootstrap',
                path: 'assets/bootstrap.png',
            },
            {
                id: 3,
                name: 'CSS',
                path: '/assets/css.png',
            },
            {
                id: 4,
                name: 'Html',
                path: '/assets/html-logo.png',
            },
        ],
    },
    {
        title: 'TCS Internship Project - Automating Workflows(RPA)',
        desc: 'Proposed an email automation business case and implemented it within given timeframe with automated test cases. Streamlined dataflow and optimized app with exception handling mechanism. Closely worked under a TCS employee, create and get the business case approved.',
        subdesc:
            'Improved app performance with the help of feedback from TCS developers and peers.Tech Stacks & Skills: C++, .Net Libraries, UiPath, Business Casing, Email Automation, Workflow Automation.',
        href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
        texture: '/textures/project/TCSProject.mp4',
        logo: '/assets/tata.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'Uipath',
                path: '/assets/uipath.png',
            },
            {
                id: 2,
                name: 'c++',
                path: 'assets/cplusplus.png',
            },
            {
                id: 3,
                name: 'dot-net-image',
                path: '/assets/dot-net.png',
            },
        ],
    },
    {
        title: 'Redfin Real-Time DBMS App',
        desc: 'As part of my CS 425 class, we created a real estate app like redfin with a robust UI and data visualization. We incorporated generating reports, filtering and other features. Implementing a seamless solution that placed us in top 5 in a class of 60.',
        subdesc:
            'We used Python UI libraries and MySQL to populate redfin data on our app and create the UI. Incorporated data clensing and filtering techniques. Tech Stack & Skills: Python, MySQL, Postgres.',
        href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
        texture: '/textures/project/real-estate-db.mp4',
        logo: '/assets/database-2.png',
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'Python',
                path: '/assets/python.png',
            },
            {
                id: 2,
                name: 'Mysql',
                path: 'assets/mysql-1.png',
            },
            {
                id: 3,
                name: 'PostgreSQL',
                path: '/assets/postgresql.png',
            },
        ],
    },
    {
        title: 'Covid-19 Awareness App',
        desc: 'Created a Covid-19 awareness app with real-time google maps integration for providing access to Covid-19 centers, vaccine information and factual news. Won 1st place against 100+ Software Dev. Students.',
        subdesc:
            'Plotted visualizations with real-time data and statistics from accredited organizations. Took care of the back-end for the app. Tech Stacks & Skills: C#, Data Scraping, Google Maps, .Net Libraries.',
        href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
        texture: '/textures/project/VaccInfo.mp4',
        logo: '/assets/covid-19.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'C-sharp',
                path: '/assets/c-sharp.png',
            },
            {
                id: 2,
                name: 'Google',
                path: 'assets/google.png',
            },
            {
                id: 3,
                name: 'Dot-net',
                path: '/assets/dot-net.png',
            },
        ],
    },
    // {
    //     title: 'Imaginify - AI Photo Manipulation App',
    //     desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
    //     subdesc:
    //         'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
    //     href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    //     texture: '/textures/project/project5.mp4',
    //     logo: '/assets/project-logo5.png',
    //     logoStyle: {
    //         backgroundColor: '#1C1A43',
    //         border: '0.2px solid #252262',
    //         boxShadow: '0px 0px 60px 0px #635BFF4D',
    //     },
    //     spotlight: '/assets/spotlight5.png',
    //     tags: [
    //         {
    //             id: 1,
    //             name: 'React.js',
    //             path: '/assets/react.svg',
    //         },
    //         {
    //             id: 2,
    //             name: 'TailwindCSS',
    //             path: 'assets/tailwindcss.png',
    //         },
    //         {
    //             id: 3,
    //             name: 'TypeScript',
    //             path: '/assets/typescript.png',
    //         },
    //         {
    //             id: 4,
    //             name: 'Framer Motion',
    //             path: '/assets/framer.png',
    //         },
    //     ],
    // },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Kaplan Institute',
        pos: 'Technical Genesis Analyst',
        duration: 'Jan 2025 - Mar 2025',
        title: "Assessed the technology of multiple AI Startups that applied for the $500K TechForward Kaplan Grant. Analyzed algorithmic differentiation across AI startups, analyzing different Transformer models, LLMs, GANs & suggested better benchmarked models.",
        icon: '/assets/kaplan.png',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Illinois Institute of Technology',
        pos: 'Resmatch Co-pilot: Research Associate',
        duration: 'Sep 2023 - Present',
        title: "Copiloted & developed machine learning models using PyTorch for identifying Multiple Sclerosis with MRI data, collaborating with UChicago Medicine. Model outperformed PHD student thesis with 2/10th training data and an accuracy of 99.7%. Tech Stack: Pytorch, MATLAB",
        icon: '/assets/IIT2.png',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'JPMC',
        pos: 'Software Engineer - Collab with P33',
        duration: 'Aug 2022 - Dec 2022',
        title: "JPMC collaborated with P33 to allow us to work alongside JPMC staff on a financial dashboard. Competed with 15+ teams and created the only working tool. Tech Stack: HTML 5, CSS, JavaScript, Bootstrap",
        icon: '/assets/jpmc.png',
        animation: 'salute',
    },
    {
        id: 4,
        name: 'TCS - Tata Consultancy Services',
        pos: 'Software Engineer',
        duration: 'Jun 2021 - Aug 2021',
        title: "Implemented 30+ automated test cases for Email Automation workflows, reducing manual testing time by ~80%. Tech Stack: C++, UiPath",
        icon: '/assets/tcs3.svg',
        animation: 'salute',
    },
];
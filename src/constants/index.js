import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    nodejs,
    postgres,
    pricewise,
    rails,
    react,
    ruby,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    cibc,
    traffic,
    typescript,
    wordpress,
    blueocean
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
      imageUrl: postgres,
      name: "PostgreSQL",
      type: "Backend",
    },
    {
      imageUrl: ruby,
      name: "Ruby",
      type: "Backend",
    },
    {
      imageUrl: rails,
      name: "Ruby on Rails",
      type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
      imageUrl: wordpress,
      name: "WordPress",
      type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Customer Support Team Lead",
        company_name: "Traffic Tech",
        icon: traffic,
        iconBg: "#accbe1",
        date: "May 2021 - Present",
        points: [
            "Supervised a team of up to 6 employees in meeting defined goals for business targets and professional development.",
            "Acted as single point of contact for a 10-person group of co-op students to ensure proper support and rapid communication.",
            "Assisted with the writing and implementation of training documentation and standard procedures, administering training to new hires on a quarterly basis.",
            "Prepared daily statistical reports for upper management, providing a snapshot of the current day's efficiency rate and predicting upcoming service level impacts.",
            "Led by example in execution of excellent customer service and precise data entry, utilizing phone and email to trace over-the-road logistics in North America."
        ],
    },
    {
        title: "Financial Services Representative",
        company_name: "CIBC",
        icon: cibc,
        iconBg: "#fbc3bc",
        date: "Nov 2019 - Mar 2021",
        points: [
            "Took inbound phone calls in a fast-paced environment, averaging approximately 80 calls per day.",
            "Provided first-call resolution for a wide range of clients over the phone, aiming at an efficiency target of less than 5 minutes per call.",
            "Ensured white-glove service for high-value clients who would start the call upset and end feeling reassured and heard.",
            "Adhered strictly to security  and anti-fraud procedures, protecting sensitive client data and business information.",
        ],
    },
    {
        title: "Customer Service Agent / LNP Processor",
        company_name: "Blue Ocean Contact Centres",
        icon: blueocean,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Mastered Local Number Portability legacy software, processing and validating up to 100 requests per day for a major telecom carrier.",
            "Administered troubleshooting procedures requiring a high degree of accuracy.",
            "Provided detailed escalation reports for tier-2 agents.",
            "Created and maintained various training documents during down-time to assist colleagues and new hires.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];
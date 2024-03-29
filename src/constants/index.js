import {
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    nodejs,
    postgres,
    rails,
    react,
    ruby,
    sass,
    tailwindcss,
    cibc,
    traffic,
    typescript,
    wordpress,
    blueocean,
    clock,
    pricewise,
    map,
    calendar
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
    title: "Customer Service Agent / LNP Processor",
    company_name: "Blue Ocean Contact Centres",
    icon: blueocean,
    iconBg: "#a2d2ff",
    date: "Oct 2018 - Nov 2019",
    points: [
      "Mastered Local Number Portability legacy software, processing and validating up to 100 requests per day for a major telecom carrier.",
      "Administered troubleshooting procedures requiring a high degree of accuracy.",
      "Provided detailed escalation reports for tier-2 agents.",
      "Created and maintained various training documents during down-time to assist colleagues and new hires.",
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
        iconUrl: clock,
        theme: 'btn-back-green',
        name: 'Startle Alarm Clock',
        description: 'A full-stack alarm clock app built by a 3-person team, with user-recorded alarm sounds, pop-up notifications and text messages sent through the Twilio API.',
        link: 'https://github.com/dylanToews/final-project',
    },
    {
      iconUrl: map,
      theme: 'btn-back-yellow',
      name: 'Wikimap',
      description: 'A Vanilla JS app built by a 3-person team, to create unlimited collections of points on multiple maps.',
      link: 'https://github.com/Thornrose/WikiMap',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-black',
        name: 'Jungle Market',
        description: 'A mini e-commerce application built with Ruby on Rails.',
        link: 'https://github.com/Thornrose/jungle-rails',
    },
    {
        iconUrl: calendar,
        theme: 'btn-back-blue',
        name: 'Interview Scheduler',
        description: 'A front-end React app to create, edit and delete interviews between students and interviewers in a 7-day calendar.',
        link: 'https://github.com/Thornrose/scheduler',
    },
];
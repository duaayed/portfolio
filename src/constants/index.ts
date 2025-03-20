import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  meta,
  carrent,
  tripguide,
  threejs,
  drum,
  weather,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: " Full Stack Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "UI/UX Designer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences: TExperience[] = [
  
  
  {
    title: "Development Team Member",
    companyName: "WAVES Society",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "May 2025 - Present",
    points: [
      "PresentDesigned the user interface (UI) as a member of the development team, collaborating to build the society's website using web design principles, front-end development, and the React framework, ensuring a responsive and user-friendly experience.",
      "HTU SUMO ROBOTICS CONTEST 2024 - Team WAVES03: Developed robotics algorithms and hardware integration for a competitive robotics challenge, showcasing advanced problem-solving and teamwork.",
      "Effective Team Collaboration: Coordinated with diverse teams to tackle challenges in web development, and roboticsprojects, leveraging effective communication and teamwork to deliver innovative solutions on time and within scope.",
     
    ],
  },
];



const projects: TProject[] = [
  {
    name: "Workout Buddy",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://workout-buddy-frontend-726j.vercel.app",
  },
  {
    name: "Weather App",
    description:
      "Web application that enables users to search for a city weather, by integrating API to fetch the data.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    sourceCodeLink: "https://weatherapi-gamma-seven.vercel.app/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Sevi online bookshop",
    description:
      "A comprehensive online bookshop platform that allows users to buy books and do secure payment using paypal.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://sevi.great-site.net",
  },
  {
    name: "Drum Kit",
    description:
      "A Responsive Drum kit with each sound.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "JS",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: drum,
    sourceCodeLink: "https://duaayed.github.io/Drums/",
  },
];

export { services, technologies, experiences, projects };

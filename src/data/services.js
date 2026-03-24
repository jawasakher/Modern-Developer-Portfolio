import { 
  MdDesktopWindows, 
  MdStorage, 
  MdPhoneIphone, 
  MdPalette, 
  MdTrendingUp, 
  MdSettings 
} from "react-icons/md";

export const services = [
  {
    id: 1,
    icon: <MdDesktopWindows />, // Frontend
    title: 'Frontend Development',
    description: 'Building responsive and interactive web interfaces using modern frameworks like React and Vue.'
  },
  {
    id: 2,
    icon: <MdStorage />, // Backend / Database
    title: 'Backend Development',
    description: 'Designing scalable server-side applications and APIs with Node.js, Express, and databases like MongoDB.'
  },
  {
    id: 3,
    icon: <MdPhoneIphone />, // Mobile
    title: 'Mobile App Development',
    description: 'Creating cross-platform mobile apps with React Native or Flutter for iOS and Android.'
  },
  {
    id: 4,
    icon: <MdPalette />, // UI/UX
    title: 'UI/UX Design',
    description: 'Crafting user-friendly and visually appealing designs for web and mobile applications.'
  },
  {
    id: 5,
    icon: <MdTrendingUp />, // Marketing
    title: 'Digital Marketing',
    description: 'Planning and executing online marketing strategies including SEO, social media, and paid campaigns.'
  },
  {
    id: 6,
    icon: <MdSettings />, // DevOps
    title: 'DevOps & Deployment',
    description: 'Managing CI/CD pipelines, cloud infrastructure, and deployment for high-availability applications.'
  }
];

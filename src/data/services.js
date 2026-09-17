import { 
  MdDesktopWindows, 
  MdStorage, 
  MdPhoneIphone, 
  MdPalette, 
  MdSettings 
} from "react-icons/md";

export const services = [
  {
    id: 1,
    icon: MdDesktopWindows,
    title: 'Product Interfaces',
    description: 'Designing responsive, accessible interfaces with clear states, thoughtful interactions, and reusable React components.'
  },

  {
    id: 2,
    icon: MdPhoneIphone,
    title: 'Full-Stack Applications',
    description: 'Building complete web products that connect polished frontends with reliable backend services and real data.'
  },
  {
    id: 3,
    icon: MdStorage,
    title: 'API & Data Systems',
    description: 'Connecting products to REST APIs, authentication, validation, PostgreSQL, MongoDB, and clean data workflows.'
  },
  {
    id: 4,
    icon: MdPalette,
    title: 'AI-Powered Features',
    description: 'Integrating AI where it creates a useful product workflow, from content generation to personalized recommendations.'
  },
  {
    id: 5,
    icon: MdSettings,
    title: 'Deployment & Delivery',
    description: 'Shipping production-ready applications with responsive layouts, performance awareness, and dependable deployment.'
  }
];
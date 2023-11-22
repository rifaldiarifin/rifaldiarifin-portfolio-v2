import { v4 as uuidv4 } from 'uuid'
export default function getProjects() {
  const projects = [
    {
      uuid: uuidv4(),
      title: 'Cafe CBN Remake',
      description:
        'Remake project of an old Cafe CBN project. a Self-Service Kiosk Ordering (Single-Page Application), provide devices for customer satisfaction in ordering according to what they want, with easy-to-navigate interface, just touch, pay and get your order.',
      technologyUsed: ['React', 'Node.js', 'Firebase', 'Chart.js', 'Netlify'],
      src: '/img/projects/cafe-cbn-remake-overview.webp',
      alt: 'Cafe CBN Remake',
      github: 'https://github.com/rifaldiarifin/cafe-cbn-remake',
      externalLink: 'https://cafecbn.netlify.app',
      bestProject: 1
    },
    {
      uuid: uuidv4(),
      title: 'Cafe CBN API',
      description: 'API data for Cafe CBN application',
      technologyUsed: ['Typescript', 'MongoDB', 'Express', 'Node.js', 'Jest', 'Vercel'],
      src: '/img/projects/cafe-cbn-api-overview.webp',
      alt: 'Cafe CBN API',
      github: 'https://github.com/rifaldiarifin/cafe-cbn-api',
      externalLink: null,
      bestProject: 2
    },
    {
      uuid: uuidv4(),
      title: 'laporMasyarakat',
      description:
        'Reports and handles all community complaints, to realize good communication between communities. (Single-Page Application)',
      technologyUsed: ['EJS', 'Node.js', 'Express', 'MySQL'],
      src: '/img/projects/lapormasyarakat_overview.webp',
      alt: 'laporMasyarakat',
      github: 'https://github.com/rifaldiarifin/lapor-masyarakat',
      externalLink: null,
      bestProject: 3
    },
    {
      uuid: uuidv4(),
      title: 'Cafe CBN (Old)',
      description:
        'Cafe CBN, a website that manages ordering transactions, as well as manages the drink and food menus.',
      technologyUsed: ['HTML', 'CSS', 'Javascript', 'PHP', 'MySQL'],
      src: '/img/bg-site5.png',
      alt: 'Cafe CBN',
      github: 'https://github.com/rifaldiarifin/cafe-cbn',
      externalLink: null,
      bestProject: false
    },
    {
      uuid: uuidv4(),
      title: 'Modern UI Components',
      description:
        'Modern components, such as input form validation, buttons, popup alerts for me to reuse in other projects, are made using only pure CSS and vanilla javascript.',
      technologyUsed: ['HTML', 'CSS', 'Javascript'],
      src: null,
      alt: null,
      github: 'https://github.com/rifaldiarifin/in-css',
      externalLink: null,
      bestProject: false
    },
    {
      uuid: uuidv4(),
      title: 'My Portfolio V1',
      description:
        'My first website portfolio (Single-Page Application), themed Universe with enrichment of modern technology appearance, simple website.',
      technologyUsed: ['HTML', 'CSS', 'Javascript'],
      src: null,
      alt: null,
      github: 'https://github.com/rifaldiarifin/portfolio-rifaldiarifin',
      externalLink: null,
      bestProject: false
    },
    {
      uuid: uuidv4(),
      title: 'Icons8 CSS Generator',
      description:
        'A mini script code to generate CSS code from icons8 icons, currently only supports ".ico" and ".png" formats, this script generates CSS Classes, also easy to configure size, color, and so on, mostly I use this for other projects too.',
      technologyUsed: ['Node.js'],
      src: null,
      alt: null,
      github: null,
      externalLink: null,
      bestProject: false
    }
  ]
  return new Promise((res) => {
    setTimeout(() => {
      res(projects)
    }, 50)
  })
}

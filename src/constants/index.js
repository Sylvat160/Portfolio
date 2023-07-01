import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  nextjs,
  etherjs,
  solidity,
  ether,
  hardhat,
  movies,
  zombies,
  coming,
  crownfunding,
  xplorer,
  avaxgods,
  escrow
} from "../assets";

export const navLinks = [
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

const services = [
  {
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "Blockchain Engineer",
    icon: mobile,
  },
  {
    title: "Dapps Specialist",
    icon: backend,
  },
  // {
  //   title: "Smart Contract",
  //   icon: creator,
  // },
];

const technologies = [
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "nextjs",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
  {
    name: "ether",
    icon: ether,
  },
  {
    name: "hardhat",
    icon: hardhat,
  },
  {
    name: "solidity",
    icon: solidity,
  },
  {
    name: "etherjs",
    icon: etherjs,
  }

 
];

const experiences = [
  {
    title: "Fullstack Developer",
    company_name: "Laravel / React",
    icon: "",
    iconBg: "#383E56",
    date: "Nov 2022 - Feb 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Freelance Developer",
    company_name: "Personal",
    icon: "",
    iconBg: "#E6DEDD",
    date: "Sept 2022 - Present",
    points: [
      "Developing projects for clients using Laravel",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Movies Store",
    description:
      "Web-based platform that allows users to search, book, and manage movies from omdbapi",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: movies,
    source_code_link: "https://github.com/Sylvat160/react-js-C",
    live_link : "",
  },
  {
    name: "Zombie Game",
    description:
      "A zombie game logic coding in solidity. Zombies multiply by feeding on other zombies and can attack other players.",
    tags: [
      {
        name: "Solidity",
        color: "blue-text-gradient",
      },
    ],
    image: zombies,
    source_code_link: "https://github.com/Sylvat160/solidity_ZombiesGame",
    live_link: "",
  },
  {
    name: "Crowdfunding",
    description:
      "Decentralized crowdfunding DApp revolutionizing fundraising.",
    tags: [
      {
        name: "Vite - React",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "thirdweb",
        color: "pink-text-gradient",
      },
    ],
    image: crownfunding,
    source_code_link: "https://github.com/Sylvat160/Crowfundind-Dapp.git",
    live_link: "https://crowfundind-dapp.vercel.app/",
  },
  {
    name: "block explorer",
    description:
      "Block Explorer and Analytics Platform for Ethereum, a decentralized smart contracts platform.",
    tags: [
      {
        name: "Vite - React",
        color: "blue-text-gradient",
      },
      {
        name: "Alchemy-SDK",
        color: "green-text-gradient",
      },
      
    ],
    image: xplorer,
    source_code_link: "https://github.com/Sylvat160/block_explorer.git",
    live_link: "https://x-plorer.vercel.app/",
  },
  {
    name: "Avax Gods",
    description:
      "An ERC-1155 based NFT game on Avalanche. Users can play the game and earn Tokens.  The game is based on the popular avaxGods.",
    tags: [
      {
        name: "Vite - React",
        color: "blue-text-gradient",
      },
      {
        name: "Avalanche",
        color: "green-text-gradient",
      },
      
    ],
    image: avaxgods,
    source_code_link: "https://github.com/Sylvat160/nft-gaming.git",
    live_link: "",
  },
  {
    name: "Escrow Dapp",
    description:
      "A decentralized escrow application that allows user to create an escrow contract and send funds to the contract.",
    tags: [
      {
        name: "Vite - React",
        color: "blue-text-gradient",
      },
      {
        name: "solidity - Hardhat",
        color: "green-text-gradient",
      },
      
    ],
    image: escrow,
    source_code_link: "hhttps://github.com/Sylvat160/Escrow_Dapp.git",
    live_link: "https://escrow-dapp-nu.vercel.app/",
  },
  {
    name: "Oracle",
    description:
      "A decentralized application that allows users to request data from an API and receive the response in a smart contract.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "hardhat",
        color: "pink-text-gradient",
      },
    ],
    image: coming,
    source_code_link: "https://github.com/Sylvat160",
    live_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
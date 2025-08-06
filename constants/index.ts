

// const navLinks = [
//   {
//     name: "Work",
//     link: "#work",
//   },
//   {
//     name: "Skills",
//     link: "#skills",
//   },
//   {
    
//     name: "Experience",
//     link: "#experience",
//   },
//   {
//     name: "Tech Stack",
//     link: "#techstack",
//   },
// ];

const navLinks = {
  en: [
    { name: "Work", link: "#work" },
    { name: "Skills", link: "#skills" },
    { name: "Experience", link: "#experience" },
    { name: "Tech Stack", link: "#techstack" },
  ],
  fr: [
    { name: "Projets", link: "#work" },
    { name: "Compétences", link: "#skills" },
    { name: "Expérience", link: "#experience" },
    { name: "Tech Stack", link: "#techstack" },
  ]
};

const translations = {
  en: {
    nav: {
      contact: "Contact"
    },
    hero: {
      shaping: "Shapping",
      intoRealProjects: "Into Real Projects",
      deliverResults: "that Deliver Results",
      description: "Hi I'm Oliver, a developer based in Belgium with a passion for creating immersive designs.",
      buttonText: "See My Work"
    },
    slider: {
      title: "Swipe through the projects",
      subtitle: "Quick Dive into the projects"
    },
    showcase: {
      title: "Explore the details of each project",
      subtitle: "Take a deeper dive"
    },
    projects: {
      library: {
        title: "BookWise : A library management system",
        description: "Streamlining book management for libraries"
      },
      artgallery: {
        title: "Art Gallery : A social platform for artists",
        description: "A platform that allows artists to create profiles, upload their artwork, and connect with art enthusiasts."
      },
      portfolio: {
        title: "Portfolio Website",
        description: "An animated portfolio website showcasing my work."
      },
      lenoyer: {
        title: "Le Noyer : Medical center website",
        description: "A minimalist, elegant, and functional website"
      },
      annick: {
        title: "Annick Van Endert : Artist's website",
        description: "A window into the paintress's world."
      }
    }
  },
  fr: {
    nav: {
      contact: "Contact"
    },
    hero: {
      shaping: "Transformez vos ",
      intoRealProjects: "En Projets Professionnels",
      deliverResults: "",
      description: "Bienvenue sur mon site. Je suis un développeur basé en Belgique avec une passion pour la création de designs immersifs.",
      buttonText: "Mes Projets"
    },
    slider: {
      title: "Swipez pour parcourir les projets",
      subtitle: "Aperçu rapide des projets"
    },
    showcase: {
      title: "Explorez les détails de chaque projet",
      subtitle: "Une plongée dans mes projets"
    },
    projects: {
      library: {
        title: "BookWise : Système de gestion de bibliothèque",
        description: "Faciliter la gestion des livres au sein d'une bibliothèque universitaire"
      },
      artgallery: {
        title: "Art Gallery : Plateforme sociale pour artistes",
        description: "Une plateforme qui permet aux artistes de créer des profils, télécharger leurs œuvres et se connecter avec les amateurs d'art."
      },
      portfolio: {
        title: "Site Web Portfolio",
        description: "Un site portfolio animé présentant mon travail."
      },
      lenoyer: {
        title: "Le Noyer : Site web du centre médical",
        description: "Un site web minimaliste, élégant et fonctionnel"
      },
      annick: {
        title: "Annick Van Endert : Site web d'artiste",
        description: "Une fenêtre sur le monde de la peintre."
      }
    }
  },
};


const words = {
  en: [
    { id: 1, text: "Ideas", imgPath: "/images/ideas.svg" },
    { id: 2, text: "Concepts", imgPath: "/images/concepts.svg" },
    { id: 3, text: "Designs", imgPath: "/images/designs.svg" },
    { id: 4, text: "Code", imgPath: "/images/code.svg" },
    { id: 5, text: "Ideas", imgPath: "/images/ideas.svg" },
    { id: 6, text: "Concepts", imgPath: "/images/concepts.svg" },
    { id: 7, text: "Designs", imgPath: "/images/designs.svg" },
    { id: 8, text: "Code", imgPath: "/images/code.svg" },
  ],
  fr: [
    { id: 1, text: "Idées", imgPath: "/images/ideas.svg" },
    { id: 2, text: "Concepts", imgPath: "/images/concepts.svg" },
    { id: 3, text: "Designs", imgPath: "/images/designs.svg" },
    { id: 4, text: "Code", imgPath: "/images/code.svg" },
    { id: 5, text: "Idées", imgPath: "/images/ideas.svg" },
    { id: 6, text: "Concepts", imgPath: "/images/concepts.svg" },
    { id: 7, text: "Designs", imgPath: "/images/designs.svg" },
    { id: 8, text: "Code", imgPath: "/images/code.svg" },
  ]
};

const counterItems = [
  { value: 1, suffix: "+", label: "Year of Experience" },
  { value: 10, suffix: "+", label: "Completed Projects" },
  { value: 10, suffix: "+", label: "Satisfied Clients" },
//   { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    id: 1,
    imgPath: "/images/logos/nextjs.png",
  },
  {
    id: 2,
    imgPath: "/images/logos/react.png",
  },
  {
    id: 3,
    imgPath: "/images/logos/tailwind.png",
  },
  {
    id: 4,
    imgPath: "/images/logos/node.png",
  },
  {
    id: 5,
    imgPath: "/images/logos/sql.png",
  },
  {
    id: 6,
    imgPath: "/images/logos/postgresql.png",
  },
  {
    id: 7,
    imgPath: "/images/logos/three.png",
  },
  {
    id: 8,
    imgPath: "/images/logos/git.svg",
  },
  {
    id: 9,
    imgPath: "/images/logos/html.png",
  },
  {
    id: 10, 
    imgPath: "/images/logos/css.png",
  },
  {
    id: 11,
    imgPath: "/images/logos/js.png",
  },
  {
    id: 12,
    imgPath: "/images/logos/nextjs.png",
  },
  {
    id: 13, 
    imgPath: "/images/logos/react.png",
  },
  {
    id: 14,
    imgPath: "/images/logos/tailwind.png",
  },
  {
    id: 15,
    imgPath: "/images/logos/node.png",
  },
  {
    id: 16,
    imgPath: "/images/logos/sql.png",
  },
  {
    id: 17,
    imgPath: "/images/logos/postgresql.png",
  },
  {
    id: 18,
    imgPath: "/images/logos/three.png",
  },
  {
    id: 19,
    imgPath: "/images/logos/git.svg",
  },
  {
    id: 20,
    imgPath: "/images/logos/html.png",
  },
  {
    id: 21,
    imgPath: "/images/logos/css.png",
  },
  {
    id: 22,
    imgPath: "/images/logos/js.png",
  },
];

const abilities = {
  en: [
    {
      imgPath: "/images/seo.png",
      title: "Quality Focus",
      desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
      imgPath: "/images/chat.png",
      title: "Reliable Communication",
      desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
      imgPath: "/images/time.png",
      title: "On-Time Delivery",
      desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
  ],
  fr: [
    {
      imgPath: "/images/seo.png",
      title: "Focus Qualité",
      desc: "Livrer des résultats de haute qualité tout en maintenant l'attention sur chaque détail.",
    },
    {
      imgPath: "/images/chat.png",
      title: "Communication Fiable",
      desc: "Vous tenir informé à chaque étape pour assurer transparence et clarté.",
    },
    {
      imgPath: "/images/time.png",
      title: "Livraison Ponctuelle",
      desc: "S'assurer que les projets sont terminés dans les délais, avec qualité et attention aux détails.",
    },
  ]
};

const techStackImgs = [
  {
    name: "Frontend Developer",
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
    name: "Project Management",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "Frontend Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  // {
  //   name: "Python Developer",
  //   modelPath: "/models/python-transformed.glb",
  //   scale: 0.8,
  //   rotation: [0, 0, 0],
  // },
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
    name: "Project Management",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
    {
    review:
      "Through those projects, I have developed strong technical skills and adaptability across modern stacks. My work is composed of web apps, portfolio sites, and client platforms, always with a focus on quality and user experience.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/asset1.png",
    title: "Freelance Web Developer",
    date: "2024 – 2025",
    responsibilities: [
      "Developed full-stack web apps including Art Gallery (React, SQL, Node.js, Express, MUI5), University Library (React, Next.js, PostgreSQL), and a personal portfolio (Next.js, React, GSAP).",
      "Built and deployed client websites such as annickvanendert.com and lenoyer.be using WordPress, HTML, CSS, and JavaScript.",
      "Managed all aspects of project delivery: design translation, frontend and backend development, deployment, and client communication.",
    ],
  },
  {
    review:
      "During my training at DigitalCity, I built a solid foundation in frontend development, mastering modern tools and frameworks while delivering real-world projects.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/asset2.png",
    title: "Front End Development Training",
    date: "2023 – 2024",
    responsibilities: [
      "Produced multiple websites using HTML5, CSS, Vanilla JS, Flexbox, Grid, SASS, API management, GSAP, and React.",
      "Transcribed site designs and architecture into ready-to-use WordPress platforms.",
      "Developed a social network web app for Belgian artists using React, Node.js, and MySQL.",
    ],
  },
  {
    review:
      "My working holiday in Australia helped me foster strong soft skills and adaptability, enriching my professional and personal growth through diverse experiences.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/asset3.png",
    title: "Working Holiday & Soft Skills Development",
    date: "2019 – 2022",
    responsibilities: [
      "Worked various jobs across Western Australia: mining, farms, cattle stations, and more.",
      "Traveled extensively, developing autonomy, adaptability, stress management, resilience, and decision-making skills.",
      "Achieved English proficiency at C1 level.",
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
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Oliver. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Oliver was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Oliver was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Oliver's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Oliver is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Oliver was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Oliver’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Oliver was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const projects = [
    {
    slug: "library",
    title: "BookWise : A library management system",
    description: "Streamlining book management for libraries",
    image: "/images/library1.png",
    link: "https://university-library-v2-nu.vercel.app/",
    techLogos: [
      "/images/logos/nextjs.png",
      "/images/logos/react.png",
      "/images/logos/node.png",
      "/images/logos/postgresql.png",
      // "/images/logos/tailwind.png",
    ],
    bg: "#ffefdb",
  },
  {
    slug: "artgallery",
    title: "Art Gallery : A social platform for artists",
    description: "A platform that allows artists to create profiles, upload their artwork, and connect with art enthusiasts.",
    image: "/images/ag2.png",
    link: "https://github.com/OliWebDevO/Art_Gallery_Front_End",
    techLogos: [
      "/images/logos/react.png",
      "/images/logos/node.png",
      "/images/logos/sql.png",
    ],
    bg: "#1c1c21",
  },
  {
    slug: "portfolio",
    title: "Portfolio Website",
    description: "An animated portfolio website showcasing my work.",
    image: "/images/portfolioCover.png",
    link: "https://olivervdb.com",
    techLogos: [
      "/images/logos/nextjs.png",
      "/images/logos/react.png",
      "/images/logos/node.png",
      "/images/logos/tailwind.png",
    ],
    bg: "#ffefdb",
  },
  {
    slug: "lenoyer",
    title: "Le Noyer : Medical center website",
    description: "A minimalist, elegant, and functional website",
    image: "/images/lenoyer1.png",
    link: "https://lenoyer.be",
    techLogos: [
      "/images/logos/html.png",
      "/images/logos/css.png",
      "/images/logos/js.png",
      "/images/logos/wordpress.png",
    ],
    bg: "white",
  },
  {
    slug: "annick",
    title: "Annick Van Endert : Artist's website",
    description: "A window into the paintress's world.",
    image: "/images/annick1.png",
    link: "https://annickvanendert.com",
    techLogos: [
       "/images/logos/html.png",
      "/images/logos/css.png",
      "/images/logos/js.png",
      "/images/logos/wordpress.png",
    ],
    bg: "#ffefdb",
  },
];

const socialImgs = [
  // {
  //   name: "insta",
  //   url: "https://www.instagram.com/",
  //   imgPath: "/images/insta.png",
  // },
  // {
  //   name: "fb",
  //   url: "https://www.facebook.com/",
  //   imgPath: "/images/fb.png",
  // },
  // {
  //   name: "x",
  //   url: "https://www.x.com/",
  //   imgPath: "/images/x.png",
  // },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/oliver-van-droogenbroeck-44b699151/",
    imgPath: "/images/linkedin.png",
  },
];

const projectDetailsCards = [
    {
  slug: "library",
  cards: [
    {
      imgPath: "/images/library.png",
      logoPath: "/images/asset1.png",
      title: "BookWise: University Library Management System",
      details: [
        "BookWise is a comprehensive library management system built with Next.js and TypeScript, designed to streamline book management for universities and libraries.",
        "The platform features a profile page for users, a borrowing system, and automated email notifications for onboarding.",
        "Caching, rate-limiting, DDoS protection, and real-time image optimization are implemented to enhance performance and security.",
      ],
    },
    {
      imgPath: "/images/library3.png",
      logoPath: "/images/asset2.png",
      title: "Front End Technologies",
      details: [
        "Built with Next.js and TypeScript for scalable, maintainable development.",
        "Tailwind CSS and ShadCN provide a modern, responsive UI/UX.",
        "ImageKit is used for real-time image and video optimization.",
      ],
    },
    {
      imgPath: "/images/library2.png",
      logoPath: "/images/asset3.png",
      title: "Back End Technologies",
      details: [
        "PostgreSQL with Neon powers scalable and collaborative database management.",
        "Upstash Redis is used for efficient caching, workflows, and triggers.",
        "Drizzle ORM simplifies database interactions.",
        "Resend handles automated email notifications for onboarding, reminders, and updates.",
        "NextAuth provides robust authentication and role management.",
      ],
    },
  ],
},
  {
    slug: "artgallery",
    cards: [
      {
        imgPath: "/images/ag1.png",
        logoPath: "/images/asset1.png",
        title: "A social platform for artists",
        details: [
          `This web app is the result of my final project at Digital City. The frontend is built with React, while the backend is constructed using Node & Express. User information is stored in a MySQL database.`,
          "Through this project, I wanted to create a social network that allows artists to showcase and share their works, while enabling everyone to like and comment on each post. Users can create their own profile, where they can publish text and photos as posts. They can also display their artworks in a personal gallery.",
        ],
      },
      {
        imgPath: "/images/artg1.png",
        logoPath: "/images/asset2.png",
        title: "Front End Technologies",
        details: [
         "React Router Dom handles routing, navigation, and links.",
          "MUI5 is used for the interface design.",
          "Axios is used for managing API queries.",
          "React Query is used for state management and data fetching.",
          "Toastify is used for notifications and pop-ups."
        ],
      },
      {
        imgPath: "/images/ag3.png",
        logoPath: "/images/asset3.png",
        title: "Back End Technologies",
        details: [
          "Nodemon is used for server monitoring.",
          "CORS is used for managing cross-origin requests.",
          "Multer is used for file handling.",
          "Bcrypt is used for password encryption.",
          "JsonWebToken is used for authentication token management.",
          "Cookie Parser is used to store these tokens via cookie management.",
          "DotEnv is used for managing environment variables and securing sensitive information."
        ],
      },
    ],
  },
    {
     slug: "portfolio",
  cards: [
    {
      imgPath: "/images/portfolioCover.png",
      logoPath: "/images/asset1.png",
      title: "Animated Portfolio Website",
      details: [
        "This portfolio website was designed and developed to showcase my work, skills, and experience as a front-end developer.",
        "The site features interactive animations, a modern UI, and responsive design to provide an engaging user experience on all devices.",
      ],
    },
    {
      imgPath: "/images/portfolioCover2.png",
      logoPath: "/images/asset2.png",
      title: "Front End Technologies",
      details: [
        "Built with Next.js and React for fast, SEO-friendly rendering.",
        "Tailwind CSS is used for rapid and consistent styling.",
        "GSAP powers the smooth animations and transitions.",
        "TypeScript ensures type safety and maintainability.",
      ],
    },
    {
    imgPath: "/images/portfolioCover3.png",
    logoPath: "/images/asset3.png",
    title: "Contact Me",
    details: [
      "Interested in working together or have a project in mind?",
      "Feel free to reach out to discuss your ideas, get a quote, or just say hello!",
      "I'm always open to new opportunities and collaborations.",
      "Let's build something great together, contact me today!"
      ],
    },
  ],
  },
   {
     slug: "lenoyer",
  cards: [
    {
      imgPath: "/images/lenoyer1.png",
      logoPath: "/images/asset1.png",
      title: "Medical Center Le Noyer",
      details: [
       "A minimalist, elegant, and functional website",
        "Maison Médicale Le Noyer is a multidisciplinary team providing quality, accessible, continuous, comprehensive, and integrated healthcare in the municipality of Schaerbeek.",
      ],
    },
    {
      imgPath: "/images/lenoyer2.png",
      logoPath: "/images/asset2.png",
      title: "All the informations in a few clicks",
      details: [
       "The website summarizes the range of healthcare services offered by the medical center through 7 tabs: Home, How it works, Services, Activities, Team, Journal, and Contact & Access.",
        "The site is personalized so that each section can be directly modified or updated by the medical center team. They can easily add or remove content at will via the Wordpress admin panel.",
      ],
    },
    {
    imgPath: "/images/lenoyer3.png",
    logoPath: "/images/asset3.png",
    title: "A responsive and user-friendly design",
    details: [
      "The site uses various plugins:",
      "Wow.js & Animate.css are used for animations.",
      "Slick Slider is used for managing carousels (for example: team page).",
      "Magnific Popup is used to display images as a lightbox."
      ],
    },
  ],
  },
   {
     slug: "annick",
  cards: [
    {
      imgPath: "/images/annick2.png",
      logoPath: "/images/asset1.png",
      title: "A professional painter's website",
      details: [
      "A window into the artist's world",
      "Annick Van Endert is a painter, sculptor, and tattoo artist from Brussels. Through various mediums, her works highlight sharp and striking contrasts.",
      ],
    },
    {
      imgPath: "/images/annick3.png",
      logoPath: "/images/asset2.png",
      title: "A modern and visually engaging interface",
      details: [
       "The website offers a window into the world of Annick Van Endert, showcasing her paintings, sculptures, and tattoo art through a modern and visually engaging interface.",
        "The site is designed so that each gallery and section can be easily updated, allowing Annick to add new artworks and content at any time through the Wordpress admin panel.",
      ],
    },
    {
    imgPath: "/images/annick4.png",
    logoPath: "/images/asset3.png",
    title: "Pluggins and Features",
    details: [
     "To create this website, various plugins are used:",
      "Wow.js & Animate.css are used for animations.",
      "Swiper is used for the slider.",
      "SimpleLightBox is used for displaying the gallery.",
      "Lenis is used for smooth scrolling."
      ],
    },
  ],
  },
];

export {
  translations,
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  projects,
  projectDetailsCards,
};
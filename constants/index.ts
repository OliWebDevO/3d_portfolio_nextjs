const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
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

const words = [
  { id: 1, text: "Ideas", imgPath: "/images/ideas.svg" },
  { id: 2, text: "Concepts", imgPath: "/images/concepts.svg" },
  { id: 3, text: "Designs", imgPath: "/images/designs.svg" },
  { id: 4, text: "Code", imgPath: "/images/code.svg" },
  { id: 5, text: "Ideas", imgPath: "/images/ideas.svg" },
  { id: 6, text: "Concepts", imgPath: "/images/concepts.svg" },
  { id: 7, text: "Designs", imgPath: "/images/designs.svg" },
  { id: 8, text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Year of Experience" },
  { value: 10, suffix: "+", label: "Completed Projects" },
  { value: 10, suffix: "+", label: "Satisfied Clients" },
//   { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
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
];

const techStackImgs = [
  {
    name: "React Developer",
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
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
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
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Oliver brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/asset1.png",
    title: "Frontend Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review:
      "Oliver’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/asset2.png",
    title: "Full Stack Developer",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
    review:
      "Oliver’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/asset3.png",
    title: "React Native Developer",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
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
    slug: "artgallery",
    title: "Art Gallery : A social platform for artists",
    description: "A platform that allows artists to create profiles, upload their artwork, and connect with art enthusiasts.",
    image: "/images/ag2.png",
    techLogos: [
      "/images/logos/react.png",
      "/images/logos/node.png",
      "/images/logos/sql.png",
    ],
    bg: "",
  },
  {
    slug: "library",
    title: "BookWise : A library management system",
    description: "Streamlining book management for libraries",
    image: "/images/project2.png",
    techLogos: [
      "/images/logos/nextjs.png",
      "/images/logos/react.png",
      "/images/logos/node.png",
      "/images/logos/postgresql.png",
      "/images/logos/tailwind.png",
    ],
    bg: "#ffefdb",
  },
  {
    slug: "portfolio",
    title: "Portfolio Website",
    description: "An animated portfolio website showcasing my work.",
    image: "/images/portfolioCover.png",
    techLogos: [
      "/images/logos/nextjs.png",
      "/images/logos/react.png",
      "/images/logos/node.png",
      "/images/logos/tailwind.png",
    ],
    bg: "#ffe7eb",
  },
  {
    slug: "lenoyer",
    title: "Le Noyer : Medical center website",
    description: "A minimalist, elegant, and functional website",
    image: "/images/portfolioCover.png",
    techLogos: [
      "/images/logos/html.png",
      "/images/logos/css.png",
      "/images/logos/js.png",
      "/images/logos/wordpress.png",
    ],
    bg: "#ffe7eb",
  },
  {
    slug: "annick",
    title: "Annick Van Endert : Artist's website",
    description: "A window into the paintress's world.",
    image: "/images/portfolioCover.png",
    techLogos: [
       "/images/logos/html.png",
      "/images/logos/css.png",
      "/images/logos/js.png",
      "/images/logos/wordpress.png",
    ],
    bg: "#ffe7eb",
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
    url: "https://www.linkedin.com/",
    imgPath: "/images/linkedin.png",
  },
];

const projectDetailsCards = [
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
    slug: "library",
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
      imgPath: "/images/portfolioCover.png",
      logoPath: "/images/asset1.png",
      title: "Medical Center Le Noyer",
      details: [
       "A minimalist, elegant, and functional website",
        "Maison Médicale Le Noyer is a multidisciplinary team providing quality, accessible, continuous, comprehensive, and integrated healthcare in the municipality of Schaerbeek.",
      ],
    },
    {
      imgPath: "/images/portfolioCover2.png",
      logoPath: "/images/asset2.png",
      title: "All the informations in a few clicks",
      details: [
       "The website summarizes the range of healthcare services offered by the medical center through 7 tabs: Home, How it works, Services, Activities, Team, Journal, and Contact & Access.",
        "The site is personalized so that each section can be directly modified or updated by the medical center team. They can easily add or remove content at will via the Wordpress admin panel.",
      ],
    },
    {
    imgPath: "/images/portfolioCover3.png",
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
      imgPath: "/images/portfolioCover.png",
      logoPath: "/images/asset1.png",
      title: "A professional painter's website",
      details: [
      "A window into the artist's world",
      "Annick Van Endert is a painter, sculptor, and tattoo artist from Brussels. Through various mediums, her works highlight sharp and striking contrasts.",
      ],
    },
    {
      imgPath: "/images/portfolioCover2.png",
      logoPath: "/images/asset2.png",
      title: "Front End Technologies",
      details: [
       "The website offers a window into the world of Annick Van Endert, showcasing her paintings, sculptures, and tattoo art through a modern and visually engaging interface.",
        "The site is designed so that each gallery and section can be easily updated, allowing Annick to add new artworks and content at any time through the Wordpress admin panel.",
      ],
    },
    {
    imgPath: "/images/portfolioCover3.png",
    logoPath: "/images/asset3.png",
    title: "Contact Me",
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

const navLinks = {
  en: [
    { name: "Work", link: "#work" },
    { name: "Skills", link: "#skills" },
    { name: "Experience", link: "#experience" },
    { name: "Tech Stack", link: "#techstack" },
    { name: "Contact", link: "#contact" },
  ],
  fr: [
    { name: "Projets", link: "#work" },
    { name: "Compétences", link: "#skills" },
    { name: "Expérience", link: "#experience" },
    { name: "Tech Stack", link: "#techstack" },
    { name: "Contact", link: "#contact" },
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
      "ovni-compta": {
        title: "OVNI Compta : Custom accounting app for a Belgian NGO",
        description: "A tailor-made web app to manage finances, members, and projects"
      },
      fanal: {
        title: "Le Fanal des Chats : Custom platform for an animal shelter",
        description: "A full-featured WordPress platform with quizzes, multi-step forms, blog, and online donations"
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
        title: "Le Noyer : Professional website for a medical center",
        description: "A custom WordPress site built to inspire trust, inform patients, and let the team manage content autonomously"
      },
      annick: {
        title: "Annick Van Endert : Artist's website",
        description: "A window into the paintress's world."
      }
    },
    skills: {
      title: "Skills",
      subtitle: "⚙️ My field of expertise" 
    },
    experience: {
      title: "Professional Work Experience",
      subtitle: "💼  My career Overview",
      resp: "Responsibilities"
    },
    techstack : {
      title: "Tech Stack",
      subtitle: "🛠️  My Toolbox"
    },
    contact: {
      title: "Get in Touch",
      subtitle: "📬  Let's connect",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send",
      sending: "Sending...",
      successTitle: "Message Sent!",
      successMessage: "Thank you for reaching out. I'll get back to you as soon as possible.",
      close: "Close"
    },
    projectpage: {
      visitProject: "Visit Project"
    }
  },
  fr: {
    nav: {
      contact: "Contact"
    },
    hero: {
      shaping: "Transformez vos",
      intoRealProjects: "En Projets Professionnels",
      deliverResults: "",
      description: "Bienvenue sur mon site. Je suis un développeur basé en Belgique avec une passion pour la création de designs immersifs.",
      buttonText: "Mes Projets"
    },
    slider: {
      title: "Découvrez mes projets",
      subtitle: "Aperçu rapide des projets"
    },
    showcase: {
      title: "Explorez les détails de chaque projet",
      subtitle: "Une plongée dans mes projets"
    },
    projects: {
      "ovni-compta": {
        title: "OVNI Compta : Application comptable sur mesure pour ASBL",
        description: "Une application web sur mesure pour gérer finances, membres et projets"
      },
      fanal: {
        title: "Le Fanal des Chats : Plateforme sur mesure pour un refuge animalier",
        description: "Une plateforme WordPress complète avec quiz, formulaires multi-étapes, blog et dons en ligne"
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
        title: "Le Noyer : Site professionnel pour un centre médical",
        description: "Un site WordPress sur mesure conçu pour inspirer confiance, informer les patients et permettre une gestion autonome du contenu"
      },
      annick: {
        title: "Annick Van Endert : Site web d'artiste",
        description: "Une fenêtre sur le monde de la peintre."
      }
    },
    skills: {
      title: "Compétences",
      subtitle: "⚙️ Mon domaine d'expertise",
    },
    experience: {
      title: "Expérience Professionnelle",
      subtitle: "💼  Mon parcours professionnel",
      resp : "Responsabilités",
    },
    techstack : {
      title: "Tech Stack",
      subtitle: "🛠️  Mes Outils"
    },
    contact : {
      title: "Contactez-moi",
      subtitle: "📬  Restons en contact",
      name: " Nom",
      email: "Email",
      message: "Message",
      send: "Envoyer",
      sending: "Envoi en cours...",
      successTitle: "Message Envoyé !",
      successMessage: "Je vous répondrai dans les plus brefs délais.",
      close: "Fermer"
    },
    projectpage: {
      visitProject: "Visiter le projet"
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
    imgPath: "/images/logos/nextjs.webp",
  },
  {
    id: 2,
    imgPath: "/images/logos/react.webp",
  },
  {
    id: 3,
    imgPath: "/images/logos/tailwind.webp",
  },
  {
    id: 4,
    imgPath: "/images/logos/node.webp",
  },
  {
    id: 5,
    imgPath: "/images/logos/sql.webp",
  },
  {
    id: 6,
    imgPath: "/images/logos/postgresql.webp",
  },
  {
    id: 7,
    imgPath: "/images/logos/three.webp",
  },
  {
    id: 8,
    imgPath: "/images/logos/git.svg",
  },
  {
    id: 9,
    imgPath: "/images/logos/html.webp",
  },
  {
    id: 10, 
    imgPath: "/images/logos/css.webp",
  },
  {
    id: 11,
    imgPath: "/images/logos/js.webp",
  },
  {
    id: 12,
    imgPath: "/images/logos/nextjs.webp",
  },
  {
    id: 13, 
    imgPath: "/images/logos/react.webp",
  },
  {
    id: 14,
    imgPath: "/images/logos/tailwind.webp",
  },
  {
    id: 15,
    imgPath: "/images/logos/node.webp",
  },
  {
    id: 16,
    imgPath: "/images/logos/sql.webp",
  },
  {
    id: 17,
    imgPath: "/images/logos/postgresql.webp",
  },
  {
    id: 18,
    imgPath: "/images/logos/three.webp",
  },
  {
    id: 19,
    imgPath: "/images/logos/git.svg",
  },
  {
    id: 20,
    imgPath: "/images/logos/html.webp",
  },
  {
    id: 21,
    imgPath: "/images/logos/css.webp",
  },
  {
    id: 22,
    imgPath: "/images/logos/js.webp",
  },
];

const abilities = {
  en: [
    {
      imgPath: "/images/seo.webp",
      title: "Quality Focus",
      desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
      imgPath: "/images/chat.webp",
      title: "Reliable Communication",
      desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
      imgPath: "/images/time.webp",
      title: "On-Time Delivery",
      desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
  ],
  fr: [
    {
      imgPath: "/images/seo.webp",
      title: "Focus Qualité",
      desc: "Livrer des résultats de haute qualité tout en maintenant l'attention sur chaque détail.",
    },
    {
      imgPath: "/images/chat.webp",
      title: "Communication Fiable",
      desc: "Vous tenir informé à chaque étape pour assurer transparence et clarté.",
    },
    {
      imgPath: "/images/time.webp",
      title: "Livraison Ponctuelle",
      desc: "S'assurer que les projets sont terminés dans les délais, avec qualité et attention aux détails.",
    },
  ]
};

const expCards = {
  en: [
    {
      review:
        "Through those projects, I have developed strong technical skills and adaptability across modern stacks. My work is composed of web apps, portfolio sites, and client platforms, always with a focus on quality and user experience.",
      imgPath: "/images/exp1.webp",
      logoPath: "/images/Asset1.webp",
      title: "Freelance Web Developer",
      date: "2024 – 2026",
      responsibilities: [
        "Built OVNI Compta, a custom accounting web app for a Belgian NGO (Next.js, React, TypeScript, Supabase, Tailwind CSS).",
        "Developed Le Fanal des Chats, a full-featured WordPress platform for an animal shelter with interactive quizzes, multi-step forms, blog, and online donations.",
        "Built and deployed client websites such as annickvanendert.com and lenoyer.be using WordPress, HTML, CSS, and JavaScript.",
        "Managed all aspects of project delivery: design translation, frontend and backend development, deployment, and client communication.",
        "Developed a personal portfolio (Next.js, React, GSAP) and Art Gallery, a full-stack social platform for artists (React, SQL, Node.js, Express, MUI5).",
      ],
    },
    {
      review:
        "During my training at DigitalCity, I built a solid foundation in frontend development, mastering modern tools and frameworks while delivering real-world projects.",
      imgPath: "/images/exp2.webp",
      logoPath: "/images/Asset2.webp",
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
      imgPath: "/images/exp3.webp",
      logoPath: "/images/Asset3.webp",
      title: "Working Holiday & Soft Skills Development",
      date: "2019 – 2022",
      responsibilities: [
        "Worked various jobs across Western Australia: mining, farms, cattle stations, and more.",
        "Traveled extensively, developing autonomy, adaptability, stress management, resilience, and decision-making skills.",
        "Achieved English proficiency at C1 level.",
      ],
    },
  ],
  fr: [
    {
      review:
        "À travers ces projets, j'ai développé de solides compétences techniques et une adaptabilité à travers les stacks modernes. Mon travail est composé d'applications web, de sites portfolio et de plateformes clients, toujours avec un focus sur la qualité et l'expérience utilisateur.",
      imgPath: "/images/exp1.webp",
      logoPath: "/images/Asset1.webp",
      title: "Développeur Web Freelance",
      date: "2024 – 2026",
      responsibilities: [
        "Développement d'OVNI Compta, une application web comptable sur mesure pour une ASBL belge (Next.js, React, TypeScript, Supabase, Tailwind CSS).",
        "Développement du Fanal des Chats, une plateforme WordPress complète pour un refuge animalier avec quiz interactifs, formulaires multi-étapes, blog et dons en ligne.",
        "Construction et déploiement de sites clients tels que annickvanendert.com et lenoyer.be en utilisant WordPress, HTML, CSS et JavaScript.",
        "Gestion de tous les aspects de livraison de projet : traduction de design, développement frontend et backend, déploiement et communication client.",
        "Développement d'un portfolio personnel (Next.js, React, GSAP) et d'Art Gallery, une plateforme sociale pour artistes (React, SQL, Node.js, Express, MUI5).",
      ],
    },
    {
      review:
        "Pendant ma formation à DigitalCity, j'ai construit une base solide en développement frontend, maîtrisant les outils et frameworks modernes tout en livrant des projets concrets.",
      imgPath: "/images/exp2.webp",
      logoPath: "/images/Asset2.webp",
      title: "Formation Développement Front End",
      date: "2023 – 2024",
      responsibilities: [
        "Production de multiples sites web utilisant HTML5, CSS, Vanilla JS, Flexbox, Grid, SASS, gestion d'API, GSAP et React.",
        "Transcription de designs et architectures de sites en plateformes WordPress prêtes à l'emploi.",
        "Développement d'une application web de réseau social pour artistes belges en utilisant React, Node.js et MySQL.",
      ],
    },
    {
      review:
        "Mon working holiday en Australie m'a aidé à développer de solides soft skills et une adaptabilité, enrichissant ma croissance professionnelle et personnelle à travers diverses expériences.",
      imgPath: "/images/exp3.webp",
      logoPath: "/images/Asset3.webp",
      title: "Working Holiday & Développement des Soft Skills",
      date: "2019 – 2022",
      responsibilities: [
        "Travail dans divers emplois à travers l'Australie Occidentale : mines, fermes, stations de bétail, et plus.",
        "Voyages extensifs, développant autonomie, adaptabilité, gestion du stress, résilience et prise de décision.",
        "Atteinte d'un niveau de maîtrise de l'anglais C1.",
      ],
    },
  ]
};

const techStackImgs = {
  en: [
    {
      name: "Frontend Developer",
      imgPath: "/images/logos/react.webp",
    },
    {
      name: "Python Developer",
      imgPath: "/images/logos/python.svg",
    },
    {
      name: "Backend Developer",
      imgPath: "/images/logos/node.webp",
    },
    {
      name: "Interactive Developer",
      imgPath: "/images/logos/three.webp",
    },
    {
      name: "Project Management",
      imgPath: "/images/logos/git.svg",
    },
  ],
  fr: [
    {
      name: "Développeur Frontend",
      imgPath: "/images/logos/react.webp",
    },
    {
      name: "Développeur Python",
      imgPath: "/images/logos/python.svg",
    },
    {
      name: "Développeur Backend",
      imgPath: "/images/logos/node.webp",
    },
    {
      name: "Développeur Interactif",
      imgPath: "/images/logos/three.webp",
    },
    {
      name: "Gestion de Projet",
      imgPath: "/images/logos/git.svg",
    },
  ]
};

const techStackIcons = {
  en: [
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
  ],
  fr: [
    {
      name: "Développeur Frontend",
      modelPath: "/models/react_logo-transformed.glb",
      scale: 1,
      rotation: [0, 0, 0],
    },
    // {
    //   name: "Développeur Python",
    //   modelPath: "/models/python-transformed.glb",
    //   scale: 0.8,
    //   rotation: [0, 0, 0],
    // },
    {
      name: "Développeur Backend",
      modelPath: "/models/node-transformed.glb",
      scale: 5,
      rotation: [0, -Math.PI / 2, 0],
    },
    {
      name: "Développeur Interactif",
      modelPath: "/models/three.js-transformed.glb",
      scale: 0.05,
      rotation: [0, 0, 0],
    },
    {
      name: "Gestion de Projet",
      modelPath: "/models/git-svg-transformed.glb",
      scale: 0.05,
      rotation: [0, -Math.PI / 4, 0],
    },
  ]
};

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.webp",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.webp",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.webp",
  },
];

const projects = {
  en: [
    {
      slug: "lenoyer",
      title: "Le Noyer : Professional website for a medical center",
      description: "A custom WordPress site built to inspire trust, inform patients, and let the team manage content autonomously",
      image: "/images/lenoyer1.webp",
      link: "https://lenoyer.be",
      techLogos: [
        "/images/logos/html.webp",
        "/images/logos/css.webp",
        "/images/logos/js.webp",
        "/images/logos/wordpress.webp",
      ],
      bg: "white",
    },
    {
      slug: "ovni-compta",
      title: "OVNI Compta : Custom accounting app for a Belgian NGO",
      description: "A tailor-made web app to manage finances, members, and projects",
      image: "/images/asbl_ovni/ovni_dashboard.webp",
      link: "https://www.asbl-ovni.com/",
      techLogos: [
        "/images/logos/nextjs.webp",
        "/images/logos/react.webp",
        "/images/logos/tailwind.webp",
        "/images/logos/postgresql.webp",
      ],
      bg: "#ffefdb",
    },
    {
      slug: "fanal",
      title: "Le Fanal des Chats : Custom platform for an animal shelter",
      description: "A full-featured WordPress platform with quizzes, multi-step forms, blog, and online donations",
      image: "/images/fanal_des_chats/fanal_home.webp",
      link: "https://versiontest.site/",
      techLogos: [
        "/images/logos/html.webp",
        "/images/logos/css.webp",
        "/images/logos/js.webp",
        "/images/logos/wordpress.webp",
      ],
      bg: "#ffefdb",
    },
    {
      slug: "annick",
      title: "Annick Van Endert : Artist's website",
      description: "A window into the paintress's world.",
      image: "/images/annick1.webp",
      link: "https://annickvanendert.com",
      techLogos: [
        "/images/logos/html.webp",
        "/images/logos/css.webp",
        "/images/logos/js.webp",
        "/images/logos/wordpress.webp",
      ],
      bg: "#ffefdb",
    },
    {
      slug: "portfolio",
      title: "Portfolio Website",
      description: "An animated portfolio website showcasing my work.",
      image: "/images/portfolioCover.webp",
      link: "https://olivervdb.com",
      techLogos: [
        "/images/logos/nextjs.webp",
        "/images/logos/react.webp",
        "/images/logos/node.webp",
        "/images/logos/tailwind.webp",
      ],
      bg: "#ffefdb",
    },
    {
      slug: "artgallery",
      title: "Art Gallery : A social platform for artists",
      description: "A platform that allows artists to create profiles, upload their artwork, and connect with art enthusiasts.",
      image: "/images/ag2.webp",
      link: "https://github.com/OliWebDevO/Art_Gallery_Front_End",
      techLogos: [
        "/images/logos/react.webp",
        "/images/logos/node.webp",
        "/images/logos/sql.webp",
      ],
      bg: "#1c1c21",
    },
  ],
  fr: [
    {
      slug: "lenoyer",
      title: "Le Noyer : Site professionnel pour un centre médical",
      description: "Un site WordPress sur mesure conçu pour inspirer confiance, informer les patients et permettre une gestion autonome du contenu",
      image: "/images/lenoyer1.webp",
      link: "https://lenoyer.be",
      techLogos: [
        "/images/logos/html.webp",
        "/images/logos/css.webp",
        "/images/logos/js.webp",
        "/images/logos/wordpress.webp",
      ],
      bg: "white",
    },
    {
      slug: "ovni-compta",
      title: "OVNI Compta : Application comptable sur mesure pour ASBL",
      description: "Une application web sur mesure pour gérer finances, membres et projets",
      image: "/images/asbl_ovni/ovni_dashboard.webp",
      link: "https://www.asbl-ovni.com/",
      techLogos: [
        "/images/logos/nextjs.webp",
        "/images/logos/react.webp",
        "/images/logos/tailwind.webp",
        "/images/logos/postgresql.webp",
      ],
      bg: "#ffefdb",
    },
    {
      slug: "fanal",
      title: "Le Fanal des Chats : Plateforme sur mesure pour un refuge animalier",
      description: "Une plateforme WordPress complète avec quiz, formulaires multi-étapes, blog et dons en ligne",
      image: "/images/fanal_des_chats/fanal_home.webp",
      link: "https://versiontest.site/",
      techLogos: [
        "/images/logos/html.webp",
        "/images/logos/css.webp",
        "/images/logos/js.webp",
        "/images/logos/wordpress.webp",
      ],
      bg: "#ffefdb",
    },
    {
      slug: "annick",
      title: "Annick Van Endert : Site web d'artiste",
      description: "Une fenêtre sur le monde de la peintre.",
      image: "/images/annick1.webp",
      link: "https://annickvanendert.com",
      techLogos: [
        "/images/logos/html.webp",
        "/images/logos/css.webp",
        "/images/logos/js.webp",
        "/images/logos/wordpress.webp",
      ],
      bg: "#ffefdb",
    },
    {
      slug: "portfolio",
      title: "Site Web Portfolio",
      description: "Un site portfolio animé présentant mon travail.",
      image: "/images/portfolioCover.webp",
      link: "https://olivervdb.com",
      techLogos: [
        "/images/logos/nextjs.webp",
        "/images/logos/react.webp",
        "/images/logos/node.webp",
        "/images/logos/tailwind.webp",
      ],
      bg: "#ffefdb",
    },
    {
      slug: "artgallery",
      title: "Art Gallery : Plateforme sociale pour artistes",
      description: "Une plateforme qui permet aux artistes de créer des profils, télécharger leurs œuvres et se connecter avec les amateurs d'art.",
      image: "/images/ag2.webp",
      link: "https://github.com/OliWebDevO/Art_Gallery_Front_End",
      techLogos: [
        "/images/logos/react.webp",
        "/images/logos/node.webp",
        "/images/logos/sql.webp",
      ],
      bg: "#1c1c21",
    },
  ]
};

const socialImgs = [
  // {
  //   name: "insta",
  //   url: "https://www.instagram.com/",
  //   imgPath: "/images/insta.webp",
  // },
  // {
  //   name: "fb",
  //   url: "https://www.facebook.com/",
  //   imgPath: "/images/fb.webp",
  // },
  // {
  //   name: "x",
  //   url: "https://www.x.com/",
  //   imgPath: "/images/x.webp",
  // },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/oliver-van-droogenbroeck-44b699151/",
    imgPath: "/images/linkedin.webp",
  },
];

const projectDetailsCards = {
  en: [
    {
      slug: "ovni-compta",
      cards: [
        {
          imgPath: "/images/asbl_ovni/ovni_artistes.webp",
          logoPath: "/images/Asset1.webp",
          title: "OVNI Compta: Custom Accounting for a Belgian NGO",
          details: [
            "A custom-built accounting web app developed for a Belgian cultural NGO (ASBL) to replace shared Excel files with a secure, centralized tool.",
            "Manages finances at three levels: members, projects, and central treasury, with automated internal transfers that keep accounts balanced.",
            "Accessible from any device, the app lets the client manage everything autonomously -- no technical intervention needed.",
          ],
        },
        {
          imgPath: "/images/asbl_ovni/ovni_transactions.webp",
          logoPath: "/images/Asset2.webp",
          title: "Key Features",
          details: [
            "Interactive dashboard with financial overview, charts, and recent transactions at a glance.",
            "Member and project tracking with real-time balances, budget indicators, and full transaction history.",
            "Automated financial reports (monthly, annual), CSV/PDF exports, and centralized document archiving.",
          ],
        },
        {
          imgPath: "/images/asbl_ovni/ovni_ressources.webp",
          logoPath: "/images/Asset3.webp",
          title: "Technical Stack & Security",
          details: [
            "Built with Next.js, React, TypeScript, and Tailwind CSS for a modern, responsive interface with dark/light mode.",
            "PostgreSQL database via Supabase for scalable data management and secure file storage.",
            "Invite-only access with three permission levels (Admin, Editor, Reader), encrypted credentials, and protection against common attacks.",
          ],
        },
      ],
    },
    {
      slug: "fanal",
      cards: [
        {
          imgPath: "/images/fanal_des_chats/fanal_about.webp",
          logoPath: "/images/Asset1.webp",
          title: "Le Fanal des Chats: Custom Platform for an Animal Shelter",
          details: [
            "A fully custom WordPress platform built for a Belgian cat shelter, featuring 12 custom pages, 3 interactive quizzes, 2 multi-step forms, a blog with nested comments, and online donations.",
            "Every page is managed via custom fields in the WordPress admin -- the client updates all content autonomously without any technical skills.",
            "Designed to drive visitor engagement through structured journeys: adoption, volunteering, and donations.",
          ],
        },
        {
          imgPath: "/images/fanal_des_chats/fanal_service.webp",
          logoPath: "/images/Asset2.webp",
          title: "Interactive Features",
          details: [
            "3 interactive quizzes (adoption, volunteering, donation) with step-by-step visual progression and personalized results.",
            "Multi-step forms with conditional fields and real-time client-side validation for adoption and volunteering applications.",
            "Full blog system with pagination, 4 categories, photo galleries, social sharing buttons, and 3-level nested comments.",
          ],
        },
        {
          imgPath: "/images/fanal_des_chats/fanal_testimony.webp",
          logoPath: "/images/Asset3.webp",
          title: "Design & Technical Stack",
          details: [
            "100% custom WordPress theme -- no template, no page builder. Built with ACF PRO, Bootstrap 5, SASS, and jQuery.",
            "Scroll animations (Animate.css, WOW.js), animated counters (Odometer.js), carousels (Slick, Swiper), and lightboxes (Fancybox).",
            "Online donations via GiveWP, downloadable PDF publications archive, responsive mobile-first design.",
          ],
        },
      ],
    },
    {
      slug: "artgallery",
      cards: [
        {
          imgPath: "/images/ag1.webp",
          logoPath: "/images/Asset1.webp",
          title: "A social platform for artists",
          details: [
            "This web app is the result of my final project at Digital City. The frontend is built with React, while the backend is constructed using Node & Express. User information is stored in a MySQL database.",
            "Through this project, I wanted to create a social network that allows artists to showcase and share their works, while enabling everyone to like and comment on each post. Users can create their own profile, where they can publish text and photos as posts. They can also display their artworks in a personal gallery.",
          ],
        },
        {
          imgPath: "/images/artg1.webp",
          logoPath: "/images/Asset2.webp",
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
          imgPath: "/images/ag3.webp",
          logoPath: "/images/Asset3.webp",
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
          imgPath: "/images/portfolioCover.webp",
          logoPath: "/images/Asset1.webp",
          title: "Animated Portfolio Website",
          details: [
            "This portfolio website was designed and developed to showcase my work, skills, and experience as a front-end developer.",
            "The site features interactive animations, a modern UI, and responsive design to provide an engaging user experience on all devices.",
          ],
        },
        {
          imgPath: "/images/portfolioCover2.webp",
          logoPath: "/images/Asset2.webp",
          title: "Front End Technologies",
          details: [
            "Built with Next.js and React for fast, SEO-friendly rendering.",
            "Tailwind CSS is used for rapid and consistent styling.",
            "GSAP powers the smooth animations and transitions.",
            "TypeScript ensures type safety and maintainability.",
          ],
        },
        {
          imgPath: "/images/portfolioCover3.webp",
          logoPath: "/images/Asset3.webp",
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
          imgPath: "/images/lenoyer1.webp",
          logoPath: "/images/Asset1.webp",
          title: "Le Noyer: A Trustworthy Online Presence for Healthcare",
          details: [
            "Custom WordPress website for a multidisciplinary medical center in Schaerbeek, Brussels. Designed to convey trust and professionalism from the first visit.",
            "7 structured sections covering everything patients need: services, team, activities, how it works, blog, and contact with access info.",
            "The client manages all content independently through WordPress admin -- no developer needed for updates, schedule changes, or team announcements.",
          ],
        },
        {
          imgPath: "/images/lenoyer2.webp",
          logoPath: "/images/Asset2.webp",
          title: "Designed for Patient Engagement",
          details: [
            "Clean, minimalist design that puts essential information front and center -- patients find what they need in seconds, not minutes.",
            "Fully responsive layout ensuring a seamless experience on mobile, tablet, and desktop -- critical for healthcare sites where users often search on the go.",
            "Smooth scroll animations and interactive carousels bring the content to life while maintaining a professional, reassuring tone.",
          ],
        },
        {
          imgPath: "/images/lenoyer3.webp",
          logoPath: "/images/Asset3.webp",
          title: "Custom WordPress Theme & Technical Stack",
          details: [
            "100% custom WordPress theme -- no generic template, no page builder. Every element is tailored to the medical center's needs and branding.",
            "Built with ACF PRO for flexible content management, Slick Slider for team and gallery carousels, and Magnific Popup for image lightboxes.",
            "Scroll animations (WOW.js, Animate.css) add polish without compromising page speed or accessibility.",
          ],
        },
      ],
    },
    {
      slug: "annick",
      cards: [
        {
          imgPath: "/images/annick2.webp",
          logoPath: "/images/Asset1.webp",
          title: "A professional painter's website",
          details: [
            "A window into the artist's world",
            "Annick Van Endert is a painter, sculptor, and tattoo artist from Brussels. Through various mediums, her works highlight sharp and striking contrasts.",
          ],
        },
        {
          imgPath: "/images/annick3.webp",
          logoPath: "/images/Asset2.webp",
          title: "A modern and visually engaging interface",
          details: [
            "The website offers a window into the world of Annick Van Endert, showcasing her paintings, sculptures, and tattoo art through a modern and visually engaging interface.",
            "The site is designed so that each gallery and section can be easily updated, allowing Annick to add new artworks and content at any time through the Wordpress admin panel.",
          ],
        },
        {
          imgPath: "/images/annick4.webp",
          logoPath: "/images/Asset3.webp",
          title: "Plugins and Features",
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
  ],
  fr: [
    {
      slug: "ovni-compta",
      cards: [
        {
          imgPath: "/images/asbl_ovni/ovni_artistes.webp",
          logoPath: "/images/Asset1.webp",
          title: "OVNI Compta : Comptabilité sur mesure pour ASBL",
          details: [
            "Application web comptable développée sur mesure pour une ASBL culturelle belge, en remplacement de fichiers Excel partagés par un outil centralisé et sécurisé.",
            "Gestion des finances à trois niveaux : membres, projets et trésorerie centrale, avec virements internes automatisés qui maintiennent l'équilibre des comptes.",
            "Accessible depuis n'importe quel appareil, l'application permet au client de tout gérer en autonomie, sans intervention technique.",
          ],
        },
        {
          imgPath: "/images/asbl_ovni/ovni_transactions.webp",
          logoPath: "/images/Asset2.webp",
          title: "Fonctionnalités clés",
          details: [
            "Tableau de bord interactif avec vue d'ensemble financière, graphiques et dernières transactions en un coup d'œil.",
            "Suivi des membres et projets avec soldes en temps réel, indicateurs de budget et historique complet des transactions.",
            "Rapports financiers automatiques (mensuels, annuels), exports CSV/PDF et archivage centralisé de documents.",
          ],
        },
        {
          imgPath: "/images/asbl_ovni/ovni_ressources.webp",
          logoPath: "/images/Asset3.webp",
          title: "Stack technique & Sécurité",
          details: [
            "Construit avec Next.js, React, TypeScript et Tailwind CSS pour une interface moderne et responsive avec mode sombre/clair.",
            "Base de données PostgreSQL via Supabase pour une gestion de données évolutive et un stockage de fichiers sécurisé.",
            "Accès sur invitation uniquement avec trois niveaux de droits (Admin, Éditeur, Lecteur), identifiants chiffrés et protection contre les attaques courantes.",
          ],
        },
      ],
    },
    {
      slug: "fanal",
      cards: [
        {
          imgPath: "/images/fanal_des_chats/fanal_about.webp",
          logoPath: "/images/Asset1.webp",
          title: "Le Fanal des Chats : Plateforme sur mesure pour un refuge",
          details: [
            "Plateforme WordPress entièrement sur mesure pour un refuge de chats belge : 12 pages personnalisées, 3 quiz interactifs, 2 formulaires multi-étapes, un blog avec commentaires imbriqués et des dons en ligne.",
            "Chaque page est gérée via des champs personnalisés dans l'admin WordPress -- le client met à jour tout son contenu en autonomie, sans compétence technique.",
            "Conçue pour guider les visiteurs dans des parcours d'engagement structurés : adoption, bénévolat et dons.",
          ],
        },
        {
          imgPath: "/images/fanal_des_chats/fanal_service.webp",
          logoPath: "/images/Asset2.webp",
          title: "Fonctionnalités interactives",
          details: [
            "3 quiz interactifs (adoption, bénévolat, don) avec progression visuelle étape par étape et résultats personnalisés.",
            "Formulaires multi-étapes avec champs conditionnels et validation en temps réel pour les candidatures d'adoption et de bénévolat.",
            "Système de blog complet avec pagination, 4 catégories, galeries photos, partage social et commentaires imbriqués sur 3 niveaux.",
          ],
        },
        {
          imgPath: "/images/fanal_des_chats/fanal_testimony.webp",
          logoPath: "/images/Asset3.webp",
          title: "Design & Stack technique",
          details: [
            "Thème WordPress 100% sur mesure -- aucun template, aucun page builder. Construit avec ACF PRO, Bootstrap 5, SASS et jQuery.",
            "Animations au scroll (Animate.css, WOW.js), compteurs animés (Odometer.js), carrousels (Slick, Swiper) et lightboxes (Fancybox).",
            "Dons en ligne via GiveWP, archive de publications PDF téléchargeables, design responsive mobile-first.",
          ],
        },
      ],
    },
    {
      slug: "artgallery",
      cards: [
        {
          imgPath: "/images/ag1.webp",
          logoPath: "/images/Asset1.webp",
          title: "Une plateforme sociale pour artistes",
          details: [
            "Cette application web est le résultat de mon projet final à Digital City. Le frontend est construit avec React, tandis que le backend est construit avec Node & Express. Les informations utilisateur sont stockées dans une base de données MySQL.",
            "À travers ce projet, j'ai voulu créer un réseau social qui permet aux artistes de présenter et partager leurs œuvres, tout en permettant à chacun d'aimer et commenter chaque publication. Les utilisateurs peuvent créer leur propre profil, où ils peuvent publier du texte et des photos comme publications. Ils peuvent également afficher leurs œuvres d'art dans une galerie personnelle.",
          ],
        },
        {
          imgPath: "/images/artg1.webp",
          logoPath: "/images/Asset2.webp",
          title: "Technologies Front End",
          details: [
            "React Router Dom gère le routage, la navigation et les liens.",
            "MUI5 est utilisé pour la conception de l'interface.",
            "Axios est utilisé pour gérer les requêtes API.",
            "React Query est utilisé pour la gestion d'état et la récupération de données.",
            "Toastify est utilisé pour les notifications et pop-ups."
          ],
        },
        {
          imgPath: "/images/ag3.webp",
          logoPath: "/images/Asset3.webp",
          title: "Technologies Back End",
          details: [
            "Nodemon est utilisé pour la surveillance du serveur.",
            "CORS est utilisé pour gérer les requêtes cross-origin.",
            "Multer est utilisé pour la gestion des fichiers.",
            "Bcrypt est utilisé pour le chiffrement des mots de passe.",
            "JsonWebToken est utilisé pour la gestion des jetons d'authentification.",
            "Cookie Parser est utilisé pour stocker ces jetons via la gestion des cookies.",
            "DotEnv est utilisé pour gérer les variables d'environnement et sécuriser les informations sensibles."
          ],
        },
      ],
    },
    {
      slug: "portfolio",
      cards: [
        {
          imgPath: "/images/portfolioCover.webp",
          logoPath: "/images/Asset1.webp",
          title: "Site Web Portfolio Animé",
          details: [
            "Ce site web portfolio a été conçu et développé pour présenter mon travail, mes compétences et mon expérience en tant que développeur front-end.",
            "Le site présente des animations interactives, une interface moderne et un design responsive pour offrir une expérience utilisateur engageante sur tous les appareils.",
          ],
        },
        {
          imgPath: "/images/portfolioCover2.webp",
          logoPath: "/images/Asset2.webp",
          title: "Technologies Front End",
          details: [
            "Construit avec Next.js et React pour un rendu rapide et optimisé pour le SEO.",
            "Tailwind CSS est utilisé pour un stylisme rapide et cohérent.",
            "GSAP alimente les animations fluides et les transitions.",
            "TypeScript assure la sécurité des types et la maintenabilité.",
          ],
        },
        {
          imgPath: "/images/portfolioCover3.webp",
          logoPath: "/images/Asset3.webp",
          title: "Contactez-moi",
          details: [
            "Intéressé par une collaboration ou avez-vous un projet en tête ?",
            "N'hésitez pas à me contacter pour discuter de vos idées, obtenir un devis ou simplement dire bonjour !",
            "Je suis toujours ouvert aux nouvelles opportunités et collaborations.",
            "Construisons quelque chose de fantastique ensemble, contactez-moi aujourd'hui !"
          ],
        },
      ],
    },
    {
      slug: "lenoyer",
      cards: [
        {
          imgPath: "/images/lenoyer1.webp",
          logoPath: "/images/Asset1.webp",
          title: "Le Noyer : Une présence en ligne de confiance pour le secteur médical",
          details: [
            "Site WordPress sur mesure pour une maison médicale pluridisciplinaire à Schaerbeek, Bruxelles. Conçu pour transmettre confiance et professionnalisme dès la première visite.",
            "7 sections structurées couvrant tout ce dont les patients ont besoin : services, équipe, activités, fonctionnement, blog, et contact avec infos d'accès.",
            "Le client gère tout son contenu en autonomie via l'admin WordPress -- aucun développeur nécessaire pour les mises à jour, changements d'horaires ou annonces d'équipe.",
          ],
        },
        {
          imgPath: "/images/lenoyer2.webp",
          logoPath: "/images/Asset2.webp",
          title: "Conçu pour l'engagement des patients",
          details: [
            "Design épuré et minimaliste qui met l'essentiel au premier plan -- les patients trouvent ce qu'ils cherchent en quelques secondes.",
            "Mise en page entièrement responsive garantissant une expérience fluide sur mobile, tablette et desktop -- essentiel pour un site de santé où les utilisateurs consultent souvent en déplacement.",
            "Animations au scroll et carrousels interactifs donnent vie au contenu tout en maintenant un ton professionnel et rassurant.",
          ],
        },
        {
          imgPath: "/images/lenoyer3.webp",
          logoPath: "/images/Asset3.webp",
          title: "Thème WordPress sur mesure & Stack technique",
          details: [
            "Thème WordPress 100% sur mesure -- aucun template générique, aucun page builder. Chaque élément est adapté aux besoins et à l'identité du centre médical.",
            "Construit avec ACF PRO pour une gestion de contenu flexible, Slick Slider pour les carrousels d'équipe et galeries, et Magnific Popup pour les lightboxes d'images.",
            "Animations au scroll (WOW.js, Animate.css) apportent du dynamisme sans compromettre la vitesse de chargement ni l'accessibilité.",
          ],
        },
      ],
    },
    {
      slug: "annick",
      cards: [
        {
          imgPath: "/images/annick2.webp",
          logoPath: "/images/Asset1.webp",
          title: "Site web d'une peintre professionnelle",
          details: [
            "Une fenêtre sur le monde de l'artiste",
            "Annick Van Endert est une peintre, sculptrice et tatoueuse de Bruxelles. À travers divers médiums, ses œuvres mettent en évidence des contrastes nets et frappants.",
          ],
        },
        {
          imgPath: "/images/annick3.webp",
          logoPath: "/images/Asset2.webp",
          title: "Une interface moderne et visuellement engageante",
          details: [
            "Le site web offre une fenêtre sur le monde d'Annick Van Endert, présentant ses peintures, sculptures et art du tatouage à travers une interface moderne et visuellement engageante.",
            "Le site est conçu pour que chaque galerie et section puisse être facilement mise à jour, permettant à Annick d'ajouter de nouvelles œuvres d'art et du contenu à tout moment via le panneau d'administration WordPress.",
          ],
        },
        {
          imgPath: "/images/annick4.webp",
          logoPath: "/images/Asset3.webp",
          title: "Plugins et Fonctionnalités",
          details: [
            "Pour créer ce site web, divers plugins sont utilisés :",
            "Wow.js & Animate.css sont utilisés pour les animations.",
            "Swiper est utilisé pour le slider.",
            "SimpleLightBox est utilisé pour afficher la galerie.",
            "Lenis est utilisé pour le défilement fluide."
          ],
        },
      ],
    },
  ]
};








const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Oliver. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.webp",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Oliver was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.webp",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Oliver was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Oliver's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Oliver is the ideal partner.",
    imgPath: "/images/client2.webp",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Oliver was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.webp",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Oliver’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.webp",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Oliver was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.webp",
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
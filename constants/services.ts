// Service pages (/[lang]/services/[slug]): one entry per product card of the home page.
// Prices are shown excluding VAT (HTVA).

export interface ServicePrice {
  min: number;
  max?: number;
}

export interface ServiceType {
  slug: string;
  name: string;
  title: string;
  description: string;
  metaDescription: string;
  price: ServicePrice;
  priceLabel: string;
  image: string;
  cards: ProjectDetailCard[];
  steps: StepType[];
  faq: FaqItemType[];
}

const serviceUi = {
  fr: {
    cta: "Demander un devis",
    priceCaption: "Tarif indicatif",
    stepsTitle: "La marche à suivre",
    faqTitle: "Questions fréquentes",
    faqCategory: "Questions sur ce service",
    vat: "HTVA",
    from: "À partir de",
    quoteSubject: "Demande de devis",
  },
  en: {
    cta: "Request a quote",
    priceCaption: "Indicative price",
    stepsTitle: "How it works",
    faqTitle: "Frequently asked questions",
    faqCategory: "About this service",
    vat: "excl. VAT",
    from: "From",
    quoteSubject: "Quote request",
  },
};

const services: { fr: ServiceType[]; en: ServiceType[] } = {
  fr: [
    {
      slug: "site-vitrine",
      name: "Site vitrine",
      title: "Création de site vitrine sur mesure à Bruxelles",
      description:
        "Un site WordPress sur mesure qui présente votre activité, rassure vos visiteurs et les transforme en clients. Vous modifiez vous-même vos textes et vos images, sans abonnement à un éditeur de site.",
      metaDescription:
        "Création de site vitrine WordPress sur mesure à Bruxelles : design unique, SEO, mobile, formation incluse. Entre 1 500 et 3 000 € HTVA, en 2 semaines à 1 mois.",
      price: { min: 1500, max: 3000 },
      priceLabel: "1 500 – 3 000 € HTVA",
      image: "/images/nasirian/nasirian_cover.webp",
      cards: [
        {
          imgPath: "/images/nasirian/nasirian_atelier.webp",
          logoPath: "/images/Asset1.webp",
          title: "Ce qui est inclus",
          details: [
            "Un design sur mesure à votre image : maquettes validées avec vous avant tout développement.",
            "Un thème WordPress développé pour votre site, avec des champs personnalisés pour modifier textes, images, actualités ou galeries en toute autonomie.",
            "Un site rapide, adapté au mobile et optimisé pour Google dès le départ : structure, balises, vitesse de chargement.",
            "La mise en ligne complète (hébergement, nom de domaine, certificat SSL) et une formation pour gérer votre contenu.",
          ],
        },
        {
          imgPath: "/images/felix/felix_bio.webp",
          logoPath: "/images/Asset2.webp",
          title: "Pour qui ?",
          details: [
            "Indépendants, artistes, commerces, ASBL et petites entreprises qui veulent une présence en ligne professionnelle et crédible.",
            "Ceux qui ont un site fait maison (Jimdo, Wix…) et veulent passer à un site plus moderne, sans abonnement mensuel à un éditeur.",
            "Exemples : la galerie et atelier d'encadrement Nasirian Gallery, le bassiste de jazz Félix Zurstrassen, la maison médicale Le Noyer.",
          ],
        },
        {
          imgPath: "/images/lenoyer1.webp",
          logoPath: "/images/Asset3.webp",
          title: "Prix et délais",
          details: [
            "Entre 1 500 et 3 000 € HTVA. Le prix dépend du nombre de pages, des fonctionnalités (blog, galerie, formulaires, multilingue) et du niveau d'animation.",
            "Vous recevez un devis détaillé ligne par ligne avant de vous engager, sans frais cachés.",
            "Paiement en deux temps : un acompte au démarrage, le solde à la livraison.",
            "Comptez 2 semaines à 1 mois selon la taille du site et la rapidité des retours.",
          ],
        },
      ],
      steps: [
        {
          number: 1,
          title: "Premier échange",
          shortTitle: "Échange",
          review: "On parle de votre activité, de vos clients et de ce que le site doit leur faire faire : appeler, réserver, vous écrire, découvrir votre travail.",
          checkpoints: [
            "Appel ou rencontre, sans engagement",
            "Vos objectifs et votre public cible",
            "Les pages et contenus nécessaires",
            "Une première idée du budget et des délais",
          ],
        },
        {
          number: 2,
          title: "Devis et planning",
          shortTitle: "Devis",
          review: "Je vous envoie un devis détaillé et un planning. Rien ne démarre avant votre accord.",
          checkpoints: [
            "Devis ligne par ligne, prix HTVA",
            "Planning avec les étapes de validation",
            "Acompte au démarrage, solde à la livraison",
          ],
        },
        {
          number: 3,
          title: "Design et maquettes",
          shortTitle: "Design",
          review: "Je crée les maquettes de vos pages. On les ajuste ensemble jusqu'à ce que le rendu vous ressemble.",
          checkpoints: [
            "Propositions de design à votre image",
            "Version mobile et ordinateur",
            "Révisions jusqu'à validation",
          ],
        },
        {
          number: 4,
          title: "Développement WordPress",
          shortTitle: "Création",
          review: "Je développe le thème WordPress sur mesure, avec les animations et les champs qui vous permettront de tout modifier.",
          checkpoints: [
            "Thème WordPress développé pour vous",
            "Optimisation SEO et vitesse",
            "Lien de prévisualisation pour suivre l'avancement",
          ],
        },
        {
          number: 5,
          title: "Mise en ligne et formation",
          shortTitle: "En ligne",
          review: "Je mets le site en ligne et je vous montre comment gérer votre contenu. Je reste disponible après le lancement.",
          checkpoints: [
            "Hébergement, nom de domaine et SSL configurés",
            "Formation à l'administration du site",
            "Suivi après la mise en ligne",
          ],
        },
      ],
      faq: [
        {
          question: "Combien coûte un site vitrine ?",
          answer: "Entre 1 500 et 3 000 € HTVA. Un site de quelques pages sans fonctionnalité particulière se situe dans le bas de la fourchette ; un site multilingue, avec blog, galerie ou animations avancées, dans le haut. Le devis détaillé fixe le prix exact avant le démarrage.",
        },
        {
          question: "Pourquoi WordPress ?",
          answer: "WordPress vous rend autonome : vous modifiez vos textes, images et actualités sans développeur et sans abonnement à un éditeur de site. Le thème est développé sur mesure pour votre site, ce n'est pas un modèle acheté.",
        },
        {
          question: "Je n'ai pas encore de textes ni de photos, est-ce un problème ?",
          answer: "Non. On définit ensemble les contenus nécessaires page par page, et je vous aide à les structurer. Le design peut avancer en parallèle.",
        },
        {
          question: "Est-ce que le site sera bien référencé sur Google ?",
          answer: "Le site est construit pour Google dès le départ : structure des titres, balises, données structurées, vitesse et version mobile. Le référencement dépend aussi de vos contenus et de votre activité en ligne, mais la base technique sera solide.",
        },
        {
          question: "Et l'hébergement après la mise en ligne ?",
          answer: "Je m'occupe de l'hébergement, du nom de domaine et du certificat SSL. Un suivi (mises à jour, sauvegardes, petites modifications) peut être mis en place après le lancement si vous le souhaitez.",
        },
      ],
    },
    {
      slug: "plateforme-interactive",
      name: "Plateforme interactive",
      title: "Plateforme web interactive et e-commerce sur mesure",
      description:
        "Un site qui va plus loin qu'une vitrine : boutique en ligne, dons, réservations, espace membre, formulaires avancés. Des fonctionnalités pensées pour votre activité, faciles à gérer au quotidien.",
      metaDescription:
        "Plateforme web et e-commerce sur mesure à Bruxelles : boutique en ligne, paiement, dons, réservations, espace membre. Entre 2 500 et 4 000 € HTVA.",
      price: { min: 2500, max: 4000 },
      priceLabel: "2 500 – 4 000 € HTVA",
      image: "/images/fanal_des_chats/fanal_home.webp",
      cards: [
        {
          imgPath: "/images/fanal_des_chats/fanal_service.webp",
          logoPath: "/images/Asset1.webp",
          title: "Ce qui est inclus",
          details: [
            "Tout ce que comprend un site vitrine : design sur mesure, version mobile, SEO, mise en ligne et formation.",
            "Les fonctionnalités dont votre activité a besoin : boutique en ligne et paiement, dons, réservations, espace membre, formulaires en plusieurs étapes, quiz.",
            "Une administration claire pour gérer produits, commandes, inscriptions ou demandes sans développeur.",
            "Les intégrations utiles : paiement en ligne, emails automatiques, newsletter, outils que vous utilisez déjà.",
          ],
        },
        {
          imgPath: "/images/fanal_des_chats/fanal_about.webp",
          logoPath: "/images/Asset2.webp",
          title: "Pour qui ?",
          details: [
            "Commerces et créateurs qui veulent vendre en ligne, ASBL qui collectent des dons ou des inscriptions, indépendants qui prennent des réservations.",
            "Ceux dont le site doit faire plus qu'informer : faire agir le visiteur, et lui simplifier la démarche.",
            "Exemple : la plateforme du refuge Le Fanal des Chats, avec quiz, formulaires d'adoption en plusieurs étapes, blog et dons en ligne.",
          ],
        },
        {
          imgPath: "/images/fanal_des_chats/fanal_testimony.webp",
          logoPath: "/images/Asset3.webp",
          title: "Prix et délais",
          details: [
            "Entre 2 500 et 4 000 € HTVA. Le prix dépend du nombre de fonctionnalités, du nombre de produits et des intégrations nécessaires.",
            "Devis détaillé ligne par ligne avant de vous engager, sans frais cachés.",
            "Paiement en deux temps : un acompte au démarrage, le solde à la livraison.",
            "Comptez 1 à 3 mois selon la complexité du projet.",
          ],
        },
      ],
      steps: [
        {
          number: 1,
          title: "Analyse du besoin",
          shortTitle: "Analyse",
          review: "On détaille ce que vos visiteurs doivent pouvoir faire sur le site, et comment vous gérez tout ça aujourd'hui.",
          checkpoints: [
            "Appel ou rencontre, sans engagement",
            "Parcours des visiteurs : achat, don, réservation, inscription",
            "Vos outils actuels et ce qu'il faut connecter",
            "Une première idée du budget et des délais",
          ],
        },
        {
          number: 2,
          title: "Devis et cahier des charges",
          shortTitle: "Devis",
          review: "Je rédige la liste précise des fonctionnalités et le devis correspondant. Vous savez exactement ce qui sera livré.",
          checkpoints: [
            "Liste des fonctionnalités validée ensemble",
            "Devis ligne par ligne, prix HTVA",
            "Planning avec les étapes de validation",
          ],
        },
        {
          number: 3,
          title: "Design et parcours",
          shortTitle: "Design",
          review: "Je dessine les pages et les parcours clés (commande, formulaire, espace membre) pour qu'ils soient simples à utiliser.",
          checkpoints: [
            "Maquettes des pages et des parcours",
            "Version mobile et ordinateur",
            "Révisions jusqu'à validation",
          ],
        },
        {
          number: 4,
          title: "Développement et tests",
          shortTitle: "Création",
          review: "Je développe les fonctionnalités et je teste chaque parcours, paiement compris, avant la mise en ligne.",
          checkpoints: [
            "Fonctionnalités et administration",
            "Paiement et emails automatiques testés",
            "Lien de prévisualisation pour suivre l'avancement",
          ],
        },
        {
          number: 5,
          title: "Lancement et formation",
          shortTitle: "En ligne",
          review: "Je mets la plateforme en ligne et je vous forme à sa gestion. Je reste disponible pour les ajustements après le lancement.",
          checkpoints: [
            "Mise en ligne, nom de domaine et SSL",
            "Formation à la gestion des commandes, dons ou inscriptions",
            "Suivi après le lancement",
          ],
        },
      ],
      faq: [
        {
          question: "Combien coûte une boutique en ligne ou une plateforme ?",
          answer: "Entre 2 500 et 4 000 € HTVA selon les fonctionnalités, le nombre de produits et les intégrations. Le devis détaillé fixe le prix exact avant le démarrage.",
        },
        {
          question: "Quels moyens de paiement peut-on proposer ?",
          answer: "Les paiements en ligne courants en Belgique : Bancontact, cartes de crédit et autres moyens selon le prestataire de paiement choisi ensemble. Les frais de transaction du prestataire s'ajoutent, ils ne passent pas par moi.",
        },
        {
          question: "Est-ce que je peux gérer mes produits et commandes moi-même ?",
          answer: "Oui. Vous ajoutez vos produits, modifiez les prix, suivez les commandes, les dons ou les inscriptions depuis l'administration, sans développeur. Je vous forme à son utilisation.",
        },
        {
          question: "Mon site actuel peut-il évoluer vers une plateforme ?",
          answer: "Souvent oui. Selon la façon dont il est construit, on ajoute les fonctionnalités à l'existant ou on repart sur une base plus solide. On en décide ensemble après l'analyse.",
        },
        {
          question: "Les données des clients sont-elles protégées ?",
          answer: "Oui : certificat SSL, accès sécurisés, protection contre les attaques courantes et respect du RGPD (consentement, données limitées au nécessaire). Les données de paiement sont traitées par le prestataire de paiement, jamais stockées sur le site.",
        },
      ],
    },
    {
      slug: "application-de-gestion",
      name: "Application de gestion",
      title: "Application de gestion sur mesure pour votre activité",
      description:
        "Un outil web conçu pour votre façon de travailler : tableaux de bord, suivi des membres, des projets ou des finances, accès par rôles, automatisation des tâches répétitives. Fini les fichiers Excel éparpillés.",
      metaDescription:
        "Application de gestion sur mesure à Bruxelles (Next.js, Supabase) : tableaux de bord, accès par rôles, automatisation, exports. À partir de 3 000 € HTVA.",
      price: { min: 3000 },
      priceLabel: "À partir de 3 000 € HTVA",
      image: "/images/asbl_ovni/ovni_dashboard.webp?v=2",
      cards: [
        {
          imgPath: "/images/asbl_ovni/ovni_artistes.webp?v=2",
          logoPath: "/images/Asset1.webp",
          title: "Ce qui est inclus",
          details: [
            "Une application web sur mesure, accessible depuis n'importe quel navigateur, sur ordinateur comme sur mobile.",
            "Les écrans dont vous avez besoin : tableaux de bord, listes, fiches, formulaires, recherches et filtres.",
            "Des comptes utilisateurs avec accès par rôles : chacun voit et modifie seulement ce qui le concerne.",
            "Les automatisations et exports utiles : calculs, rapports, exports Excel ou PDF, emails automatiques.",
          ],
        },
        {
          imgPath: "/images/asbl_ovni/ovni_transactions.webp?v=2",
          logoPath: "/images/Asset2.webp",
          title: "Pour qui ?",
          details: [
            "ASBL, associations et petites structures qui gèrent membres, projets, subsides ou finances dans des tableurs.",
            "Indépendants et équipes qui perdent du temps sur des tâches répétitives ou des informations dispersées.",
            "Exemple : OVNI Compta, l'application comptable sur mesure d'une ASBL belge pour gérer finances, artistes et projets.",
          ],
        },
        {
          imgPath: "/images/asbl_ovni/ovni_ressources.webp?v=2",
          logoPath: "/images/Asset3.webp",
          title: "Prix et délais",
          details: [
            "À partir de 3 000 € HTVA. Le prix dépend du nombre d'écrans, des règles métier, des rôles et des automatisations.",
            "Devis détaillé ligne par ligne avant de vous engager. Un projet plus large peut être découpé en phases.",
            "Paiement en deux temps : un acompte au démarrage, le solde à la livraison.",
            "Comptez 1 à 4 mois selon la complexité de l'application.",
          ],
        },
      ],
      steps: [
        {
          number: 1,
          title: "Comprendre votre façon de travailler",
          shortTitle: "Analyse",
          review: "On passe en revue vos tâches, vos fichiers et vos outils actuels pour repérer ce qui vous fait perdre du temps.",
          checkpoints: [
            "Appel ou rencontre, sans engagement",
            "Vos processus et les personnes concernées",
            "Les données à gérer et à reprendre",
            "Une première idée du budget et des délais",
          ],
        },
        {
          number: 2,
          title: "Cahier des charges et devis",
          shortTitle: "Devis",
          review: "Je décris les écrans, les rôles et les règles de l'application, avec le devis correspondant. Un projet large peut être découpé en phases.",
          checkpoints: [
            "Écrans, rôles et règles métier détaillés",
            "Devis ligne par ligne, prix HTVA",
            "Planning et découpage en phases si besoin",
          ],
        },
        {
          number: 3,
          title: "Maquettes des écrans",
          shortTitle: "Design",
          review: "Je dessine les écrans principaux pour valider l'organisation et la facilité d'utilisation avant de développer.",
          checkpoints: [
            "Maquettes des écrans clés",
            "Parcours de travail validés avec vous",
            "Révisions jusqu'à validation",
          ],
        },
        {
          number: 4,
          title: "Développement et tests",
          shortTitle: "Création",
          review: "Je développe l'application (Next.js, base de données Supabase) et je vous livre des versions régulières à tester.",
          checkpoints: [
            "Développement écran par écran",
            "Démos régulières sur un lien de test",
            "Reprise de vos données existantes",
          ],
        },
        {
          number: 5,
          title: "Mise en service et suivi",
          shortTitle: "En ligne",
          review: "Je mets l'application en ligne, je forme les utilisateurs et j'assure le suivi : corrections, ajustements et évolutions.",
          checkpoints: [
            "Mise en ligne sécurisée et sauvegardes automatiques",
            "Formation des utilisateurs",
            "Suivi et évolutions selon vos besoins",
          ],
        },
      ],
      faq: [
        {
          question: "Combien coûte une application de gestion sur mesure ?",
          answer: "À partir de 3 000 € HTVA. Le prix dépend du nombre d'écrans, des rôles, des règles métier et des automatisations. Un projet plus large peut être découpé en phases pour étaler l'investissement.",
        },
        {
          question: "Pourquoi une application sur mesure plutôt qu'un logiciel existant ?",
          answer: "Un logiciel du commerce vous oblige à adapter votre façon de travailler, et coûte souvent un abonnement par utilisateur. Une application sur mesure fait exactement ce dont vous avez besoin, sans fonctionnalités inutiles.",
        },
        {
          question: "Peut-on reprendre mes fichiers Excel existants ?",
          answer: "Oui. Je reprends vos données existantes (tableurs, exports d'anciens outils) dans l'application lors de la mise en service.",
        },
        {
          question: "Mes données sont-elles en sécurité ?",
          answer: "Oui : accès par rôles, connexion sécurisée, chiffrement des échanges et sauvegardes automatiques chaque nuit. Les données restent les vôtres, exportables à tout moment.",
        },
        {
          question: "Est-ce que l'application pourra évoluer ?",
          answer: "Oui. Le code est structuré pour ajouter des écrans et des fonctionnalités au fil de vos besoins, sans tout reconstruire.",
        },
      ],
    },
  ],
  en: [
    {
      slug: "site-vitrine",
      name: "Showcase website",
      title: "Custom showcase website design in Brussels",
      description:
        "A custom WordPress website that presents your business, builds trust and turns visitors into clients. You edit your own texts and images, with no website-builder subscription.",
      metaDescription:
        "Custom WordPress showcase website in Brussels: unique design, SEO, mobile-ready, training included. €1,500 to €3,000 excl. VAT, in 2 weeks to 1 month.",
      price: { min: 1500, max: 3000 },
      priceLabel: "€1,500 – €3,000 excl. VAT",
      image: "/images/nasirian/nasirian_cover.webp",
      cards: [
        {
          imgPath: "/images/nasirian/nasirian_atelier.webp",
          logoPath: "/images/Asset1.webp",
          title: "What's included",
          details: [
            "A custom design that reflects your brand: mockups approved with you before any development.",
            "A WordPress theme built for your site, with custom fields so you can edit texts, images, news or galleries on your own.",
            "A fast, mobile-friendly site optimized for Google from day one: structure, tags, loading speed.",
            "Full go-live (hosting, domain name, SSL certificate) and training to manage your content.",
          ],
        },
        {
          imgPath: "/images/felix/felix_bio.webp",
          logoPath: "/images/Asset2.webp",
          title: "Who is it for?",
          details: [
            "Freelancers, artists, shops, non-profits and small businesses that want a professional, credible online presence.",
            "Anyone with a self-built site (Jimdo, Wix…) who wants a more modern website without a monthly builder subscription.",
            "Examples: Nasirian Gallery (framing atelier and art gallery), jazz bassist Félix Zurstrassen, the Le Noyer medical center.",
          ],
        },
        {
          imgPath: "/images/lenoyer1.webp",
          logoPath: "/images/Asset3.webp",
          title: "Price and timeline",
          details: [
            "€1,500 to €3,000 excl. VAT. The price depends on the number of pages, the features (blog, gallery, forms, multilingual) and the level of animation.",
            "You get a detailed, line-by-line quote before committing, with no hidden costs.",
            "Two-step payment: a deposit at the start, the balance on delivery.",
            "Allow 2 weeks to 1 month depending on the size of the site and how quickly feedback comes in.",
          ],
        },
      ],
      steps: [
        {
          number: 1,
          title: "First conversation",
          shortTitle: "Talk",
          review: "We talk about your business, your clients and what the site should get them to do: call, book, write to you, discover your work.",
          checkpoints: [
            "Call or meeting, no commitment",
            "Your goals and target audience",
            "The pages and content needed",
            "A first idea of budget and timeline",
          ],
        },
        {
          number: 2,
          title: "Quote and schedule",
          shortTitle: "Quote",
          review: "I send you a detailed quote and a schedule. Nothing starts without your approval.",
          checkpoints: [
            "Line-by-line quote, prices excl. VAT",
            "Schedule with approval milestones",
            "Deposit at the start, balance on delivery",
          ],
        },
        {
          number: 3,
          title: "Design and mockups",
          shortTitle: "Design",
          review: "I design your page mockups. We refine them together until the result feels like you.",
          checkpoints: [
            "Design proposals that match your brand",
            "Mobile and desktop versions",
            "Revisions until approval",
          ],
        },
        {
          number: 4,
          title: "WordPress development",
          shortTitle: "Build",
          review: "I build the custom WordPress theme, with the animations and fields that let you edit everything.",
          checkpoints: [
            "WordPress theme built for you",
            "SEO and speed optimization",
            "Preview link to follow progress",
          ],
        },
        {
          number: 5,
          title: "Go-live and training",
          shortTitle: "Live",
          review: "I put the site online and show you how to manage your content. I stay available after launch.",
          checkpoints: [
            "Hosting, domain name and SSL set up",
            "Training on managing the site",
            "Follow-up after launch",
          ],
        },
      ],
      faq: [
        {
          question: "How much does a showcase website cost?",
          answer: "€1,500 to €3,000 excl. VAT. A site of a few pages with no special features sits at the lower end; a multilingual site with a blog, gallery or advanced animations at the upper end. The detailed quote sets the exact price before we start.",
        },
        {
          question: "Why WordPress?",
          answer: "WordPress makes you independent: you edit your texts, images and news without a developer and without a website-builder subscription. The theme is built specifically for your site, not a bought template.",
        },
        {
          question: "I don't have texts or photos yet, is that a problem?",
          answer: "No. We define the content needed page by page, and I help you structure it. The design can move forward in parallel.",
        },
        {
          question: "Will the site rank well on Google?",
          answer: "The site is built for Google from the start: heading structure, tags, structured data, speed and mobile version. Rankings also depend on your content and online activity, but the technical foundation will be solid.",
        },
        {
          question: "What about hosting after launch?",
          answer: "I take care of hosting, the domain name and the SSL certificate. Ongoing care (updates, backups, small changes) can be set up after launch if you wish.",
        },
      ],
    },
    {
      slug: "plateforme-interactive",
      name: "Interactive platform",
      title: "Custom interactive web platform and e-commerce",
      description:
        "A site that goes beyond a showcase: online shop, donations, bookings, member area, advanced forms. Features designed around your business, easy to manage day to day.",
      metaDescription:
        "Custom web platform and e-commerce in Brussels: online shop, payments, donations, bookings, member area. €2,500 to €4,000 excl. VAT.",
      price: { min: 2500, max: 4000 },
      priceLabel: "€2,500 – €4,000 excl. VAT",
      image: "/images/fanal_des_chats/fanal_home.webp",
      cards: [
        {
          imgPath: "/images/fanal_des_chats/fanal_service.webp",
          logoPath: "/images/Asset1.webp",
          title: "What's included",
          details: [
            "Everything a showcase website includes: custom design, mobile version, SEO, go-live and training.",
            "The features your business needs: online shop and payments, donations, bookings, member area, multi-step forms, quizzes.",
            "A clear admin area to manage products, orders, sign-ups or requests without a developer.",
            "Useful integrations: online payment, automatic emails, newsletter, tools you already use.",
          ],
        },
        {
          imgPath: "/images/fanal_des_chats/fanal_about.webp",
          logoPath: "/images/Asset2.webp",
          title: "Who is it for?",
          details: [
            "Shops and makers who want to sell online, non-profits collecting donations or sign-ups, freelancers taking bookings.",
            "Anyone whose site must do more than inform: get visitors to act, and make it easy for them.",
            "Example: the platform of the Le Fanal des Chats shelter, with quizzes, multi-step adoption forms, a blog and online donations.",
          ],
        },
        {
          imgPath: "/images/fanal_des_chats/fanal_testimony.webp",
          logoPath: "/images/Asset3.webp",
          title: "Price and timeline",
          details: [
            "€2,500 to €4,000 excl. VAT. The price depends on the number of features, products and integrations needed.",
            "Detailed, line-by-line quote before committing, with no hidden costs.",
            "Two-step payment: a deposit at the start, the balance on delivery.",
            "Allow 1 to 3 months depending on the complexity of the project.",
          ],
        },
      ],
      steps: [
        {
          number: 1,
          title: "Needs analysis",
          shortTitle: "Analysis",
          review: "We detail what your visitors should be able to do on the site, and how you handle it all today.",
          checkpoints: [
            "Call or meeting, no commitment",
            "Visitor journeys: purchase, donation, booking, sign-up",
            "Your current tools and what to connect",
            "A first idea of budget and timeline",
          ],
        },
        {
          number: 2,
          title: "Quote and specifications",
          shortTitle: "Quote",
          review: "I write the precise feature list and the matching quote. You know exactly what will be delivered.",
          checkpoints: [
            "Feature list agreed together",
            "Line-by-line quote, prices excl. VAT",
            "Schedule with approval milestones",
          ],
        },
        {
          number: 3,
          title: "Design and journeys",
          shortTitle: "Design",
          review: "I design the pages and key journeys (checkout, forms, member area) so they are simple to use.",
          checkpoints: [
            "Mockups of pages and journeys",
            "Mobile and desktop versions",
            "Revisions until approval",
          ],
        },
        {
          number: 4,
          title: "Development and testing",
          shortTitle: "Build",
          review: "I build the features and test every journey, payment included, before going live.",
          checkpoints: [
            "Features and admin area",
            "Payments and automatic emails tested",
            "Preview link to follow progress",
          ],
        },
        {
          number: 5,
          title: "Launch and training",
          shortTitle: "Live",
          review: "I launch the platform and train you to manage it. I stay available for adjustments after launch.",
          checkpoints: [
            "Go-live, domain name and SSL",
            "Training on managing orders, donations or sign-ups",
            "Follow-up after launch",
          ],
        },
      ],
      faq: [
        {
          question: "How much does an online shop or platform cost?",
          answer: "€2,500 to €4,000 excl. VAT depending on the features, the number of products and the integrations. The detailed quote sets the exact price before we start.",
        },
        {
          question: "Which payment methods can I offer?",
          answer: "The usual online payment methods in Belgium: Bancontact, credit cards and others depending on the payment provider we choose together. The provider's transaction fees are separate and don't go through me.",
        },
        {
          question: "Can I manage my products and orders myself?",
          answer: "Yes. You add products, change prices, follow orders, donations or sign-ups from the admin area, without a developer. I train you to use it.",
        },
        {
          question: "Can my current site evolve into a platform?",
          answer: "Often, yes. Depending on how it is built, we add features to the existing site or start from a more solid base. We decide together after the analysis.",
        },
        {
          question: "Is customer data protected?",
          answer: "Yes: SSL certificate, secure access, protection against common attacks and GDPR compliance (consent, only the data needed). Payment data is handled by the payment provider and never stored on the site.",
        },
      ],
    },
    {
      slug: "application-de-gestion",
      name: "Management app",
      title: "Custom management app for your business",
      description:
        "A web tool designed around the way you work: dashboards, tracking of members, projects or finances, role-based access, automation of repetitive tasks. No more scattered Excel files.",
      metaDescription:
        "Custom management app in Brussels (Next.js, Supabase): dashboards, role-based access, automation, exports. From €3,000 excl. VAT.",
      price: { min: 3000 },
      priceLabel: "From €3,000 excl. VAT",
      image: "/images/asbl_ovni/ovni_dashboard.webp?v=2",
      cards: [
        {
          imgPath: "/images/asbl_ovni/ovni_artistes.webp?v=2",
          logoPath: "/images/Asset1.webp",
          title: "What's included",
          details: [
            "A custom web app, available from any browser, on desktop and mobile.",
            "The screens you need: dashboards, lists, records, forms, search and filters.",
            "User accounts with role-based access: everyone sees and edits only what concerns them.",
            "Useful automation and exports: calculations, reports, Excel or PDF exports, automatic emails.",
          ],
        },
        {
          imgPath: "/images/asbl_ovni/ovni_transactions.webp?v=2",
          logoPath: "/images/Asset2.webp",
          title: "Who is it for?",
          details: [
            "Non-profits, associations and small organizations managing members, projects, grants or finances in spreadsheets.",
            "Freelancers and teams losing time on repetitive tasks or scattered information.",
            "Example: OVNI Compta, the custom accounting app of a Belgian non-profit to manage finances, artists and projects.",
          ],
        },
        {
          imgPath: "/images/asbl_ovni/ovni_ressources.webp?v=2",
          logoPath: "/images/Asset3.webp",
          title: "Price and timeline",
          details: [
            "From €3,000 excl. VAT. The price depends on the number of screens, business rules, roles and automations.",
            "Detailed, line-by-line quote before committing. A larger project can be split into phases.",
            "Two-step payment: a deposit at the start, the balance on delivery.",
            "Allow 1 to 4 months depending on the complexity of the app.",
          ],
        },
      ],
      steps: [
        {
          number: 1,
          title: "Understanding how you work",
          shortTitle: "Analysis",
          review: "We review your tasks, files and current tools to spot what is costing you time.",
          checkpoints: [
            "Call or meeting, no commitment",
            "Your processes and the people involved",
            "The data to manage and to migrate",
            "A first idea of budget and timeline",
          ],
        },
        {
          number: 2,
          title: "Specifications and quote",
          shortTitle: "Quote",
          review: "I describe the app's screens, roles and rules, with the matching quote. A large project can be split into phases.",
          checkpoints: [
            "Screens, roles and business rules in detail",
            "Line-by-line quote, prices excl. VAT",
            "Schedule, split into phases if needed",
          ],
        },
        {
          number: 3,
          title: "Screen mockups",
          shortTitle: "Design",
          review: "I design the main screens to validate the layout and ease of use before development.",
          checkpoints: [
            "Mockups of the key screens",
            "Workflows approved with you",
            "Revisions until approval",
          ],
        },
        {
          number: 4,
          title: "Development and testing",
          shortTitle: "Build",
          review: "I build the app (Next.js, Supabase database) and deliver regular versions for you to test.",
          checkpoints: [
            "Development screen by screen",
            "Regular demos on a test link",
            "Migration of your existing data",
          ],
        },
        {
          number: 5,
          title: "Rollout and follow-up",
          shortTitle: "Live",
          review: "I put the app online, train the users and handle follow-up: fixes, adjustments and new features.",
          checkpoints: [
            "Secure go-live and automatic backups",
            "User training",
            "Follow-up and new features as needed",
          ],
        },
      ],
      faq: [
        {
          question: "How much does a custom management app cost?",
          answer: "From €3,000 excl. VAT. The price depends on the number of screens, roles, business rules and automations. A larger project can be split into phases to spread the investment.",
        },
        {
          question: "Why a custom app rather than off-the-shelf software?",
          answer: "Off-the-shelf software makes you adapt the way you work, and often costs a subscription per user. A custom app does exactly what you need, with no unnecessary features.",
        },
        {
          question: "Can you import my existing Excel files?",
          answer: "Yes. I migrate your existing data (spreadsheets, exports from old tools) into the app at rollout.",
        },
        {
          question: "Is my data safe?",
          answer: "Yes: role-based access, secure login, encrypted connections and automatic nightly backups. The data remains yours and can be exported at any time.",
        },
        {
          question: "Can the app evolve over time?",
          answer: "Yes. The code is structured so screens and features can be added as your needs grow, without rebuilding everything.",
        },
      ],
    },
  ],
};

export { services, serviceUi };

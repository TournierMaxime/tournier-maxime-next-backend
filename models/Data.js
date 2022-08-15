const Data = {
  0: [
    {
      nav: {
        link_1: "A propos",
        link_2: "Projets",
        link_3: "Parcours",
        link_4: "Contact",
      },
      intro: {
        name: "Tournier Maxime",
        job: "Développeur frontend",
        spec: "React et NodeJS",
        text: "Je vous souhaite la bienvenue sur mon portfolio !",
        btn: "Projets",
      },

      about: {
        aboutMe: "A Propos",
        socialNetworks: "Réseaux sociaux",
        intro:
          "Cette section vous permet de découvrir à la fois mes compétences et mes orientations professionnels",
        know: "Ce qu'il faut savoir",
        skill: "Mes compétences",
        skills: [
          {
            frontend: [
              {
                id: 1,
                name: "Javascript",
              },
              {
                id: 2,
                name: "React",
              },
              {
                id: 3,
                name: "Html",
              },
              {
                id: 4,
                name: "Css/Scss",
              },
              {
                id: 5,
                name: "Bulma",
              },
              {
                id: 4,
                name: "PrimeReact",
              },
            ],
          },
          {
            backend: [
              {
                id: 1,
                name: "NodeJS",
              },
              {
                id: 2,
                name: "ExpressJS",
              },
              {
                id: 3,
                name: "MySQL/MariaDB",
              },
              {
                id: 4,
                name: "MongoDB",
              },
              {
                id: 5,
                name: "Php",
              },
              {
                id: 6,
                name: "Sequelize",
              },
              {
                id: 7,
                name: "Mongoose",
              },
            ],
          },
        ],
        text: "Passionné par les nouvelles technologies. Mes premières expériences en tant que développeur remontent à 2008. Je me suis formé en autodidacte sur le \"site du zéro\" qui est devenu OpenClassRooms. D'abord en apprenant HTML et CSS. Puis c'est en 2016 que j'ai appris PHP et MySQL. Cet apprentissage m'a permis de créer mon premier site internet personnel. En 2021 j'ai décidé de me former pour devenir développeur/intégrateur web notamment sur Javascript, ReactJS et NodeJS.",
      },
      realisation: {
        title: "Projets",
        intro:
          "Cette section vous permet de découvrir mes projets de formation ainsi que des projets personnels",
        projects: [
          {
            id: 1,
            more: "En savoir plus",
            project: "Projet 1",
            name: "Reservia",
            image: "../public/assets/images/Reservia.png",
            width: 900,
            height: 500,
            description:
              "Création d'une page web avec HTML/CSS from scratch. Utilisation d'un système de versionning pour une application. Adaptabilité à tous supports.",
            btnDetails: "En savoir plus",
            plot: "Vous avez trouvé votre premier stage en tant que développeur web chez Booki, une petite entreprise proposant un outil de planification de vacances ! Son site permet aux usagers de trouver des hébergements et des activités dans la ville de leur choix. Les hébergements peuvent également être filtrés par thématique, par exemple leur budget ou leur ambiance. Un nouveau design basé sur les principes du Material Design vient d’être réalisé par Loïc, designer UI. Avant de valider définitivement le design, l’entreprise a décidé de réaliser un prototype. Vous êtes chargé de créer ce prototype en intégrant la maquette en HTML et CSS. Dans la matinée, Sarah, la CTO, vous envoie un e-mail pour vous donner les derniers détails sur le projet. Vous commencez par vous plonger dans l’étude des maquettes à l’aide d’un papier et d’un crayon. Cela vous permet de définir les grandes sections de la page avant de démarrer votre intégration.",
            skills: [
              "Utilisation d'un système de gestion de version",
              "Mettre en place son environnement Frontend",
              "Intégrer du contenu conformément à une maquette",
              "Intégration d'une version responsive",
            ],
            github: "https://github.com/Hoggy06/TournierMaxime_2_24052021",
            link: "reservia",
            website: "http://reservia.tourniermaxime.com",
            tech: [
              {
                name: "HTML",
                color: "html",
              },
              {
                name: "CSS",
                color: "css",
              },
            ],
          },
          {
            id: 2,
            more: "En savoir plus",
            project: "Projet 2",
            name: "OhMyFood",
            image: "../public/assets/images/OhMyFood.png",
            width: 900,
            height: 500,
            description:
              "Création d'un site statique avec des animations CSS avancées. Utilisation d'un modèle 7-1 avec une architecture SASS",
            btnDetails: "En savoir plus",
            skills: [
              "Assurer une cohérence graphique",
              "Utilisation d'un système de gestion de version en vue de mise à jour",
              "Intégration d'effets CSS avancées",
              "Intégration d'une version responsive",
              "Création d'un système de navigation moderne",
            ],
            github: "https://github.com/Hoggy06/TournierMaxime_3_14072021",
            link: "ohmyfood",
            website: "http://ohmyfood.tourniermaxime.com",
            tech: [
              {
                name: "SASS",
                color: "sass",
              },
            ],
          },
          {
            id: 3,
            more: "En savoir plus",
            project: "Projet 3",
            name: "La Chouette Agence",
            image: "../public/assets/images/LaChouetteAgence.png",
            width: 900,
            height: 500,
            description:
              "Optmisation d'un site web existant. Création d'un rapport d'analyse SEO et un rapport d'optimisation pour les différentes versions d'appareils. Utilisation de Lighthouse et GTmetrix. Respect des normes WCAG.",
            btnDetails: "En savoir plus",
            skills: [
              "Ecriture d'un code HTML/CSS maintenable",
              "Assurer l'accessibilité du site web",
              "Optimiser le référencement d'un site internet",
              "Utilisation des bonnes pratiques",
              "Optimiser la taille et la vitesse d'un site web",
            ],
            github: "https://github.com/Hoggy06/TournierMaxime_4_11092021",
            link: "la_chouette_agence",
            website: "http://lachouetteagence.tourniermaxime.com",
            tech: [
              {
                name: "WCAG",
                color: "wcag",
              },
              {
                name: "SEO",
                color: "seo",
              },
            ],
          },
          {
            id: 4,
            more: "En savoir plus",
            project: "Projet 4",
            name: "Kanap",
            image: "../public/assets/images/Kanap.png",
            width: 900,
            height: 500,
            description:
              "Création d'une plateforme e-commerce avec Javascript Vanilla. Utilisation d'évènements pour intéragir avec les différents éléments. Récupération de données grace à une API. Stocker des données dans le localstorage. Création d'un plan de test",
            btnDetails: "En savoir plus",
            skills: [
              "Intéragir avec un web service en utilisant Javascript",
              "Intéragir avec les évènements Javascript",
              "Valider des données avec une sources externes",
              "Création d'un plan de test",
            ],
            github: "https://github.com/Hoggy06/Tournier_Maxime_5_02112021",
            link: "kanap",
            tech: [
              {
                name: "Javascript",
                color: "javascript",
              },
            ],
          },
          {
            id: 5,
            more: "En savoir plus",
            project: "Projet 5",
            name: "Piquante",
            image: "../public/assets/images/Piquante.png",
            width: 900,
            height: 500,
            description:
              "Création d'une API sécurisée avec NodeJS et Express. Gérer une base de donée NoSQL avec MongoDB. Création d'une documentation avec Postman.",
            btnDetails: "En savoir plus",
            skills: [
              "Implémenter un modèle de donnée logique en adéquation avec les réglementations RGPD et OWASP",
              "Stocker des données de manière sécurisées",
              "Implémenter des opérations CRUD sécurisées",
            ],
            github: "https://github.com/Hoggy06/Tournier_Maxime_6_05012022",
            link: "piquante",
            tech: [
              {
                name: "NodeJS",
                color: "nodejs",
              },
              {
                name: "Express",
                color: "express",
              },
              {
                name: "MongoDB",
                color: "mongodb",
              },
            ],
          },
          {
            id: 6,
            more: "En savoir plus",
            project: "Projet 6",
            name: "Groupomania",
            image: "../public/assets/images/Groupomania.png",
            width: 900,
            height: 500,
            description:
              "Création d'une application complète avec NodeJS et Sequelize coté backend. Utilisation de la librairie React pour la partie frontend",
            btnDetails: "En savoir plus",
            skills: [
              "Authentifier des utilisateurs et maintenir leurs sessions",
              "Personnaliser du contenu pour un client",
              "Gérer une base de données SQL",
              "Intégrer du contenu via la base de données de manière sécurisée",
            ],
            github: "https://github.com/Hoggy06/Tournier_Maxime_7_25022022",
            link: "groupomania",
            website: "https://groupomania.tourniermaxime.com",
            tech: [
              {
                name: "NodeJS",
                color: "nodejs",
              },
              {
                name: "React",
                color: "react",
              },
              {
                name: "Sequelize",
                color: "sequelize",
              },
            ],
          },
          {
            id: 7,
            more: "En savoir plus",
            project: "Project 7",
            name: "Videotek",
            image: "../public/assets/images/Videotek.png",
            width: 900,
            height: 500,
            description:
              "Création d'un site d'information sur les films/séries. Les utilisateurs peuvent interagir en partageant des critiques, poster un sujet sur un forum, personnaliser leurs profils. Le site utilise l'API TMDB.",
            btnDetails: "En savoir plus",
            skills: [
              "Authentifier des utilisateurs et maintenir leurs sessions",
              "Gérer une base de données SQL",
              "Intégrer du contenu via la base de données de manière sécurisée",
              "Intéragir avec une API externe",
            ],
            link: "videotek",
            website: "https://videotek.xyz",
            tech: [
              {
                name: "NodeJS",
                color: "nodejs",
              },
              {
                name: "React",
                color: "react",
              },
              {
                name: "Sequelize",
                color: "sequelize",
              },
            ],
          },
        ],
      },

      career: {
        title: "Parcours",
        intro:
          "Cette section vous permet de découvrir mon parcours professionnel",
        jobs: [
          {
            id: 1,
            job: "Développeur Fullstack",
            period: "Mai 2021 - Avril 2022",
            location: "En ligne",
            company: "OpenClassRooms",
            description:
              "Intégration HTML et CSS à partir d'une maquette. Création d'animations CSS avancées avec SASS. Optimisation SEO d'un site web existant. Création d'un site e-commerce et d'une API sécurisée. Création d'un réseau social d'entreprise avec React.",
          },
          {
            id: 2,
            job: "Manutentionnaire",
            period: "Octobre 2019 - Juillet 2022",
            location: "Carros, France",
            company: "Pascal Coste Shopping",
            description:
              "Réceptions, stockages et réapprovisionnements de produits cosmétiques. Evolution dans l'entreprise en qualité de service clientèle. Remboursements, suivi de colis, litiges.",
          },
          {
            id: 3,
            job: "Auxiliaire sanitaire",
            period: "Octobre 2017 - Mai 2019",
            location: "La Valbonne, France",
            company: "Armée de Terre",
            description:
              "Secours militaire au combat. Prise en charge des victimes en milieu militaire comme civil. Participations aux opérations Sentinelle et Cuirasse",
          },
        ],
      },

      contact: {
        title: "Contact",
        intro:
          "Si vous voulez prendre contact, le formulaire ci-dessous est à disposition",
        labelName: "Nom",
        labelEmail: "Email",
        labelTextarea: "Message",
        inputName: "Votre nom",
        inputEmail: "Votre email",
        textarea: "Votre message",
        submit: "Envoyer",
      },
    },
  ],
  1: [
    {
      nav: {
        link_1: "About me",
        link_2: "Projects",
        link_3: "Career",
        link_4: "Contact",
      },
      intro: {
        name: "Tournier Maxime",
        job: "I'm FrontEnd Developer",
        spec: "React & NodeJS",
        text: "Young passionate about the web and new technologies. Welcome to my portfolio !",
        btn: "Projects",
      },

      about: {
        aboutMe: "About Me",
        socialNetworks: "Socials Networks",
        intro:
          "This section allows you to discover both my skills and my professional orientations",
        know: "What there is to know",
        skill: "Skills",
        skills: [
          {
            frontend: [
              {
                id: 1,
                name: "Javascript",
              },
              {
                id: 2,
                name: "React",
              },
              {
                id: 3,
                name: "Html",
              },
              {
                id: 4,
                name: "Css/Scss",
              },
              {
                id: 5,
                name: "Bulma",
              },
              {
                id: 4,
                name: "PrimeReact",
              },
            ],
          },
          {
            backend: [
              {
                id: 1,
                name: "NodeJS",
              },
              {
                id: 2,
                name: "ExpressJS",
              },
              {
                id: 3,
                name: "MySQL/MariaDB",
              },
              {
                id: 4,
                name: "MongoDB",
              },
              {
                id: 5,
                name: "Php",
              },
              {
                id: 6,
                name: "Sequelize",
              },
              {
                id: 7,
                name: "Mongoose",
              },
            ],
          },
        ],
        text: "Passionate about new technologies. My first experiences as a developer date back to 2008. I trained as an autodidact on the 'zero site' which became OpenClassRooms. First by learning HTML and CSS. Then it was in 2016 that I learned PHP and MySQL. This learning allowed me to create my first personal website. In 2021 I decided to train myself to become a frontend developer, particularly on Javascript, ReactJS and NodeJS.",
      },

      realisation: {
        title: "Projects",
        intro:
          "This section allows you to discover my training projects as well as personal projects",
        projects: [
          {
            id: 1,
            more: "More",
            project: "Project 1",
            name: "Reservia",
            image: "../public/assets/images/Reservia.png",
            width: 900,
            height: 500,
            description:
              "Building a webpage with HTML/CSS from scratch. Using Git to versioning the application. Adaptable website from all devices.",
            btnDetails: "View details",
            plot: "You found your first internship as a web developer at Booki, a small company offering a vacation planning tool! Its site allows users to find accommodation and activities in the city of their choice. The accommodations can also be filtered by theme, for example their budget or their atmosphere. A new design based on the principles of Material Design has just been created by Loïc, UI designer. Before definitively validating the design, the company decided to produce a prototype. You are responsible for creating this prototype by integrating the model in HTML and CSS. In the morning, Sarah, the CTO, sends you an e-mail to give you the latest details on the project. You start by immersing yourself in the study of the models using a paper and a pencil. This allows you to define the major sections of the page before starting your integration.",
            skills: [
              "Use a version control system for project monitoring and its accomodation",
              "Set up Front-End environment",
              "Integrate content according to a model",
              "Implement aresponsive interface",
            ],
            github: "https://github.com/Hoggy06/TournierMaxime_2_24052021",
            link: "reservia",
            website: "http://reservia.tourniermaxime.com",
            tech: [
              {
                name: "HTML",
                color: "html",
              },
              {
                name: "CSS",
                color: "css",
              },
            ],
          },
          {
            id: 2,
            more: "More",
            project: "Project 2",
            name: "OhMyFood",
            image: "../public/assets/images/OhMyFood.png",
            width: 900,
            height: 500,
            description:
              "Building static website who content animations and SASS. 7-1 model has been used for SASS architecture.",
            btnDetails: "View details",
            plot: "You have just been recruited at Ohmyfood!, as a junior developer. Congratulation ! Ohmyfood! is a young startup that would like to impose itself on the catering market. The goal is to develop a 100% mobile site that lists the menus of gourmet restaurants. In addition to traditional reservation systems, customers will be able to compose their meal menu so that the dishes are ready when they arrive. No more waiting times at the restaurant! You are one of the 4 lucky ones who have the chance to work on this beautiful project. The team is made up of: Paul, the CTO of the future site; Fanny, the UX designer recruited to put the site in the colors of Paris; Anissa, commercial in charge of canvassing restaurants; and you, responsible for the development of the site. Anissa is in full canvassing for this project, with restaurateurs. She calls out to you at the coffee machine: Don't you know the news? Do you remember the sales manager of your favorite restaurant? I managed to convince him, with 3 others, to deposit their cards online! I will send you the file with the 4 menus in the afternoon. Your turn now ! You then decide, with the team, that the site will initially contain 4 menus. Here is the brief you establish with the CTO, Paul. Back at your office, you find an email from Fanny who sends you the models of the site. For this project, you version all your code on Github with regular commits to follow its progress and publish the site online more easily. You now have all the elements to build this mobile site. You are embarking on this new adventure!",
            skills: [
              "Ensure the graphic consistency of a website",
              "Use a version control system for project tracking and hosting",
              "Implement advanced graphical CSS effects",
              "Implement aresponsive interface",
              "Set up a navigation structure for a website",
            ],
            github: "https://github.com/Hoggy06/TournierMaxime_3_14072021",
            link: "ohmyfood",
            website: "http://ohmyfood.tourniermaxime.com",
            tech: [
              {
                name: "SASS",
                color: "sass",
              },
            ],
          },
          {
            id: 3,
            more: "More",
            project: "Project 3",
            name: "La Chouette Agence",
            image: "../public/assets/images/LaChouetteAgence.png",
            width: 900,
            height: 500,
            description:
              "Optimizing an existant website. Creation of an SEO analyse report and an optimize report concerning desktop and mobile versions with tools like LightHouse, GTmetrix... Respect of WCAG standards",
            btnDetails: "View details",
            plot: "You work for the La Panthère agency, a large web design agency based in Lyon. The company's activity got off to a good start, but today it is losing momentum. Yes, the competition is fierce. The founder of the company, Sophie, is looking for a solution to restart the activity. By typing “Entreprise web design Lyon” on the Internet, she realizes that the agency’s site only appears on the second page of search engines. Luckily, one of your colleagues, Martin, told him that you were an SEO specialist.",
            skills: [
              "Write maintainable HTML and CSS",
              "Ensuring the accessibility of a website",
              "Optimize the SEO of a website",
              "Research best practices in web development",
              "Optimize website size and speed",
            ],
            github: "https://github.com/Hoggy06/TournierMaxime_4_11092021",
            link: "la_chouette_agence",
            website: "http://lachouetteagence.tourniermaxime.com",
            tech: [
              {
                name: "WCAG",
                color: "wcag",
              },
              {
                name: "SEO",
                color: "seo",
              },
            ],
          },
          {
            id: 4,
            more: "More",
            project: "Project 4",
            name: "Kanap",
            image: "../public/assets/images/Kanap.png",
            width: 900,
            height: 500,
            description:
              "Building an e-commerce website with Javascript Vanilla. Using events to interact with the different elements. Retrieve data from an backend API. Storing datas in the storage. Creation of test plan.",
            btnDetails: "View details",
            plot: "You've been working for a web development agency for a few weeks now. After successfully integrating a few websites (HTML/CSS), you are given a new mission. Your client is Kanap, a sofa brand that sells its products exclusively from its store. Today, she would like to have an e-commerce platform in addition to her physical store to sell her products on the Internet. As part of this mission, you work with a team made up of: Corinne, the CTO of the agency; Frank, the front-end developer who was responsible for integrating the static model of the site; Bilal, the back-end developer who implements the API to which the front-end is connected.",
            skills: [
              "Interact with a web service with Javascript",
              "Handle Javascript events",
              "Validate data from external sources",
              "Create a test plan for an application",
            ],
            github: "https://github.com/Hoggy06/Tournier_Maxime_5_02112021",
            link: "kanap",
            tech: [
              {
                name: "Javascript",
                color: "javascript",
              },
            ],
          },
          {
            id: 5,
            more: "More",
            project: "Project 5",
            name: "Piquante",
            image: "../public/assets/images/Piquante.png",
            width: 900,
            height: 500,
            description:
              "Building a secure API with NodeJS and Express. Managing a NoSQL database with MongoDB. Creation of documentation with Postman.",
            btnDetails: "View details",
            plot: 'You\'ve spent the past year as a freelance back-end developer working on multiple projects of varying sizes and difficulties. Last week, you received a message on your freelance platform asking for help with a new project. Hot sauces are growing in popularity, thanks in large part to the "Hot Ones" YouTube series. That\'s why this new client, the brand of chili-based condiments Piiquante, wants to develop a hot sauce review web application called "Hot Takes". If Piiquante\'s product manager wants to eventually turn the review app into an online store, she wants the first version to be a "sauce gallery" allowing users to upload their favorite hot sauces and like or dislike them. sauces that others share. The app\'s front-end was developed using Angular and was pre-compiled after internal testing, but Piiquante needs a back-end developer to build the API.',
            skills: [
              "Implement a logical data model in accordance with regulations (RGPD, OWASP)",
              "Store data securely",
              "Implement CRUD operations securely",
            ],
            github: "https://github.com/Hoggy06/Tournier_Maxime_6_05012022",
            link: "piquante",
            tech: [
              {
                name: "NodeJS",
                color: "nodejs",
              },
              {
                name: "Express",
                color: "express",
              },
              {
                name: "MongoDB",
                color: "mongodb",
              },
            ],
          },
          {
            id: 6,
            more: "More",
            project: "Project 6",
            name: "Groupomania",
            image: "../public/assets/images/Groupomania.png",
            width: 900,
            height: 500,
            description:
              "Creation of a full website with NodeJS and Sequelize (SQL Database) for the backend side. React was used for the frontend side.",
            btnDetails: "View details",
            plot: "You have been a developer for more than a year at CONNECT-E, a small web agency with a dozen employees. Your director, Stéphanie, invites the whole agency to have a drink to celebrate some good news! She has just signed a contract for an ambitious new project! The client in question is Groupomania, a group specializing in mass distribution and one of the agency's most loyal clients. The project consists of building an internal social network for Groupomania employees. The purpose of this tool is to facilitate interactions between colleagues. Groupomania's HR department gave free rein to its imagination for the network's functionalities and imagined several bricks to promote exchanges between colleagues.",
            skills: [
              "Authenticate a user and maintain their session",
              "Customize content sent to a web client",
              "Manage data storage using SQL",
              "Implement secure data storage using SQL",
            ],
            github: "https://github.com/Hoggy06/Tournier_Maxime_7_25022022",
            link: "groupomania",
            website: "https://groupomania.tourniermaxime.com",
            tech: [
              {
                name: "NodeJS",
                color: "nodejs",
              },
              {
                name: "React",
                color: "react",
              },
              {
                name: "Sequelize",
                color: "sequelize",
              },
            ],
          },
          {
            id: 7,
            more: "More",
            project: "Project 7",
            name: "Videotek",
            image: "../public/assets/images/Videotek.png",
            width: 900,
            height: 500,
            description:
              "Creation of a film/series news website. Users can interact by sharing critics, post a topic on a forum, customize their profiles. The site uses the TMDB API.",
            btnDetails: "View details",
            plot: "",
            skills: [
              "Authenticate a user and maintain their session",
              "Interact with an external API",
              "Manage data storage using SQL",
              "Implement secure data storage using SQL",
            ],
            link: "videotek",
            website: "https://videotek.xyz",
            tech: [
              {
                name: "NodeJS",
                color: "nodejs",
              },
              {
                name: "React",
                color: "react",
              },
              {
                name: "Sequelize",
                color: "sequelize",
              },
            ],
          },
        ],
      },

      career: {
        title: "Career",
        intro: "This section allows you to discover my professional background",
        jobs: [
          {
            id: 1,
            job: "Fullstack Developer",
            period: "May 2021 - April 2022",
            location: "Online",
            company: "OpenClassRooms",
            description:
              "HTML and CSS integration from a model. Creating advanced CSS animations with SASS. SEO optimization of an existing website. Creation of an e-commerce site and a secure API. Creation of a corporate social network with React.",
          },
          {
            id: 2,
            job: "Warehouseman",
            period: "October 2019 - July 2022",
            location: "Carros, France",
            company: "Pascal Coste Shopping",
            description:
              "Reception, storage and supply of cosmetic products. Evolution in the company in terms of customer service. Refunds, parcel tracking, disputes.",
          },
          {
            id: 3,
            job: "Health worker",
            period: "October 2017 - May 2019",
            location: "La Valbonne, France",
            company: "French Army",
            description:
              "Military combat relief. Support for victims in military and civilian environments. Participation in Sentinel and Cuirass operations.",
          },
        ],
      },
      contact: {
        title: "Contact",
        intro: "If you want to get in touch, the form below is available.",
        labelName: "Name",
        labelEmail: "Email",
        labelTextarea: "Message",
        inputName: "Your name",
        inputEmail: "Your email",
        textarea: "Your message",
        submit: "Send",
      },
    },
  ],
};

module.exports = { Data };

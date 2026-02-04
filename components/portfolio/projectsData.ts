export type ProjectCategory = "web" | "video" | "creation" | "design";

export interface Project {
    id: string;
    title: string;
    slug: string;
    subtitle: string;
    category: ProjectCategory;
    image: string;
    description: string;
    previewVideo?: string;


    // Sections optionnelles
    gallery?: string[];      // images

    cta?: {
        label: string; // texte du bouton
        href: string;  // lien (site, vidéo, pdf, etc.)
    };

    whatIDid?: string[];
    roleImages?: string[];


    tech?: string[];
    techImages?: string[];// pills

    takeaways?: string;
    takeawaysImages?: string[];


    website?: string;          // ex: "https://nollahealth.com"
    websiteLabel?: string;     // ex: "NOLLAHEALTH.COM"
    services?: string[];       // ex: ["DESIGN", "DEVELOPMENT"]
    year?: string | number;
}

export const projects: Project[] = [
    {
        id: "MMI-Benchmark",
        slug: "mmi-Benchmark",

        title: "MMI Benchmark",
        subtitle: "Plateforme de mini-jeux compétitifs orientée performance et progression",

        category: "web",
        image: "/images/portfolio/MMI-Benchmark/MMI-Benchmark_mockup.webp",

        year: 2024,
        services: ["DESIGN", "DEVELOPMENT"],

        description: `
Mini Games Platform est une plateforme web interactive dédiée à l’entraînement des capacités cognitives et réflexes à travers une série de mini-jeux compétitifs.

Inspiré par des références comme Human Benchmark, le projet propose plusieurs jeux chronométrés tels qu’un aim trainer, un test de calcul mental et un jeu de frappe rapide, pensés pour encourager la progression et la rejouabilité.

L’ensemble du système repose sur une logique de performance mesurable, avec une sauvegarde des scores, des classements dynamiques et un espace utilisateur personnalisé.
    `,
        previewVideo:"/videos/mmi-benchmark_video.mp4",
        gallery: [
            "/images/portfolio/MMI-Benchmark/MMI-Benchmark_accueil.jpg",
            "/images/portfolio/MMI-Benchmark/MMI-Benchmark_aimtrainer.jpg",
            "/images/portfolio/MMI-Benchmark/MMI-Benchmark_profil.jpg"



        ],



        whatIDid: [
            "Conception de l’architecture globale de la plateforme et des mini-jeux.",
            "Développement d’un système de score avec stockage en base de données.",
            "Création de leaderboards dynamiques avec tri et filtrage par jeu.",
            "Mise en place d’un système d’authentification et d’un espace membre.",
            "Développement front-end interactif avec animations et feedbacks visuels.",
            "Optimisation de l’expérience utilisateur pour favoriser la rejouabilité."
        ],


        roleImages: [
            "/images/portfolio/MMI-Benchmark/MMI-Benchmark_leaderboard.jpg",

            "/images/portfolio/MMI-Benchmark/MMI-Benchmark_typetest.webp",
            "/images/portfolio/MMI-Benchmark/MMI-Benchmark_calcul.webp",
        ],

        tech: [
            "PHP",
            "SQL",
            "JavaScript",
            "AJAX",
            "GSAP",
            "Base de données"
        ],

        takeaways: `
Ce projet m’a permis de consolider une approche fullstack complète, en reliant logique métier, structuration de base de 
données et interactions front-end avancées.

Il m’a également appris à concevoir des interfaces orientées performance et motivation utilisateur, en utilisant le 
feedback visuel, la compétition et la progression comme leviers d’engagement.
    `
    },
    {
        id: "multimedialpes",
        slug: "multimedialpes",

        title: "Multimédi’Alpes",
        subtitle: "Identité visuelle et stratégie de communication pour un festival étudiant",

        category: "creation",
        image: "/images/portfolio/multimedialpes/multimedialpes_affiche.webp",

        year: 2026,
        services: ["DIRECTION ARTISTIQUE", "GRAPHIC DESIGN"],

        description: `
Multimédi’Alpes est un festival étudiant mettant en valeur les productions en web, design, audiovisuel et communication réalisées par les étudiants MMI.

Dans le cadre d’un projet de groupe, nous avons imaginé l’édition 2026 du festival à travers la création d’une identité visuelle forte et d’une stratégie de communication cohérente, pensée pour fédérer les étudiants et renforcer la visibilité de l’événement.
    `,
        previewVideo:"/videos/multimedialpes_logo.mp4",

        /* IMAGES */
        gallery: [
            "/images/portfolio/multimedialpes/multimedialpes_affiche.webp",
            "/images/portfolio/multimedialpes/multimedialpes_presentation.webp"

        ],
        cta: {
            label: "Consulter le brand book",
            href: "/fichiers/Dossier_de_création_Multimedi'Alpes.pdf"
        },

        whatIDid: [
            "Définition de la direction artistique globale du projet.",
            "Création du logo et des éléments graphiques de l’identité visuelle.",
            "Choix des couleurs, typographies et principes graphiques.",
            "Assemblage et mise en page du dossier de création (brand book) sur InDesign.",
            "Structuration claire du document pour présenter la démarche et les livrables."
        ],

        roleImages: [
            "/images/portfolio/multimedialpes/multimedialpes_mockup_couverture.webp",
            "/images/portfolio/multimedialpes/multimedialpes_mockup_exemple.webp"
        ],

        tech: [
            "Illustrator",
            "InDesign",
            "Direction artistique",
            "Identité visuelle",
            "Mise en page"
        ],

        takeaways: `
Ce projet m’a permis de renforcer ma capacité à définir et défendre une direction artistique au sein d’un travail collaboratif.

Il m’a également appris à structurer un dossier de création clair et lisible, capable de valoriser une démarche créative complète.

Notre proposition a été sélectionnée parmi 3 projets retenus sur 17 groupes, ce qui a confirmé la pertinence de notre concept et de notre identité visuelle.
    `
    },
    {
        id: "evolv",
        slug: "evolv",

        title: "EVOLV",
        subtitle: "Explorer la structuration progressive de l’e-sport à travers le design et le motion",

        category: "web",
        image: "/images/portfolio/evolv/evolv_mockup_accueil.jpg",

        year: 2026,
        services: ["DIRECTION ARTISTIQUE", "DESIGN", "MOTION DESIGN"],
        website: "https://evolv.maxime-znamiec.fr",
        websiteLabel: "EVOLV.MAXIME-ZNAMIEC.FR",

        description: `
EVOLV est un site web narratif consacré à l’évolution de l’e-sport et à sa transformation progressive en discipline sportive structurée.

Le projet combine illustrations, animations et éléments de data visualisation pour proposer une lecture immersive du sujet. Les données viennent appuyer le discours à travers des formes graphiques et du motion design, afin de rendre l’ensemble plus lisible, dynamique et engageant.

Lottie est un format d’animation vectorielle destiné au web, issu d’After Effects, qui permet d’intégrer des animations légères, fluides et interactives directement sur le web. Utilisées ici pour accompagner les données et les messages, ces animations facilitent la compréhension du sujet tout en renforçant l’aspect immersif du site.
   `,

        cta: {
            label: "Voir le projet",
            href: "https://evolv.maxime-znamiec.fr"
        },

        /* IMAGES */
        gallery: [
            "/images/portfolio/evolv/evolv_mockup_exemple.webp"

        ],

        whatIDid: [
            "Définition du concept éditorial et du message autour de l’e-sport.",
            "Création de la direction artistique et de l’univers graphique.",
            "Conception d’illustrations servant de support aux données.",
            "Réalisation d'illustrations sur Illustrator, animées sur After Effect et ensuite importées en Lottie.",
            "Intégration des contenus dans un site one-page fluide et cohérent.",
            "Travail sur le rythme de lecture et la hiérarchie de l’information."
        ],

        roleImages: [
            "/images/portfolio/evolv/evolv_frequence.jpg",
            "/images/portfolio/evolv/evolv_recompense.jpg"
        ],

        tech: [
            "Illustration",
            "Datavisualisation",
            "Motion design",
            "Identité visuelle",
            "Lottie"
        ],

        takeaways: `
Ce projet m’a permis de renforcer ma capacité à traiter un sujet à travers une approche visuelle et narrative.

Il m’a appris à trouver un équilibre entre information, esthétique et lisibilité, en utilisant l’illustration et l’animation pour accompagner un discours.
    `
    }

    , {
        id: "acadomia",
        slug: "pub-acadomia",

        title: "Pub Acadomia",
        subtitle: "Spot publicitaire inspiré d'Acadomia, réalisé en équipe, de la production à la postproduction",

        category: "video",
        image: "/images/portfolio/acadomia/acadomia_antho.webp",

        year: 2025,
        services: ["AUDIOVISUEL", "POSTPRODUCTION"],

        website: "https://www.youtube.com/watch?v=fttRYuEB5mw",
        websiteLabel: "VOIR LA VIDÉO",

        description: `
Projet de vidéo publicitaire réalisé en équipe, inspiré d’une campagne de la marque Acadomia.

L’objectif était de concevoir un spot court, rythmé et narratif, en respectant une direction artistique précise tout en apportant une touche personnelle au montage.
    `,
        previewVideo:"/videos/acadomia_video.mp4",

        cta: {
            label: "Voir la publicité",
            href: "https://www.youtube.com/watch?v=fttRYuEB5mw"
        },

        /* IMAGES */
        gallery: [
            "/images/portfolio/acadomia/acadomia_antho.webp",
            "/images/portfolio/acadomia/acadomia_arthur.webp",
            "/images/portfolio/acadomia/acadomia_fin.webp"

        ],

        whatIDid: [
            "Participation au tournage en tant qu’assistant réalisateur.",
            "Gestion de l’éclairage et de l’ambiance visuelle sur le plateau.",
            "Montage complet de la vidéo sur Premiere Pro.",
            "Étalonnage colorimétrique pour renforcer l’atmosphère.",
            "Réalisation du sound design et du mixage audio.",
            "Organisation du workflow de postproduction."
        ],

        roleImages: [
            "/images/portfolio/acadomia/acadomia_montage.webp"

        ],

        tech: [

            "Adobe Premiere Pro",
            "Montage vidéo",
            "Étalonnage",
            "Sound design",
            "Prise de vue",
            "Gestion de plateau"

        ],

        takeaways: `
Ce projet m’a permis d’approfondir ma maîtrise de la postproduction et de mieux comprendre l’organisation d’un tournage en équipe.

Il m’a également appris à respecter un brief créatif précis tout en affirmant des choix de montage et de rythme.
    `
    }
    , {
        id: "leciel",
        slug: "leciel-refonte",

        title: "Le Ciel Refonte",
        subtitle: "Refonte du site d’un espace culturel grenoblois",

        category: "design",
        image: "/images/portfolio/leciel/leciel_mockup_accueil.webp",

        year: 2025,
        services: ["UX DESIGN", "UI DESIGN"],

        description: `
Projet de refonte UX/UI du site du Ciel, un espace culturel associatif situé à Grenoble, proposant des résidences artistiques, des salles de répétition et des événements.

Dans le cadre d’un projet de groupe, l’objectif était de repenser l’expérience utilisateur et l’interface du site existant à travers des maquettes figma poussées animées.
    `,

        /* IMAGES */
        gallery: [
            "/images/portfolio/leciel/leciel_couverture.webp",
            "/images/portfolio/leciel/leciel_mockup_detail.webp",

        ],

        whatIDid: [
            "Analyse du site existant et identification des points de friction.",
            "Définition de l’architecture de l’information et des parcours utilisateurs.",
            "Conception de wireframes pour structurer les écrans et les contenus.",
            "Réalisation de maquettes UI desktop (1440px) et mobile (320px).",
            "Création de composants réutilisables et gestion des styles sur Figma.",
            "Mise en place d’animations et de transitions entre les écrans.",
            "Travail en équipe avec une attention particulière à la cohérence graphique."
        ],

        roleImages: [
            "/images/portfolio/leciel/leciel_mockup_mobile.webp",
            "/images/portfolio/leciel/leciel_wireframes.webp"
        ],

        tech: [
            "Figma",
            "UX Design",
            "UI Design",
            "Prototypage interactif",
            "Responsive design",
            "Accessibilité"
        ],

        takeaways: `
Ce projet m’a permis de renforcer ma méthodologie UX/UI,
en travaillant sur des parcours concrets et des contraintes réelles.

Il m’a aussi appris à structurer un fichier Figma propre et maintenable,
en utilisant des composants, des styles et des auto-layouts,
tout en collaborant efficacement au sein d’un groupe.
    `
    },


    {
        id: "rive-lab",
        slug: "rive-lab",

        title: "Rive Lab",
        subtitle: "Boutons interactifs et micro-interactions animées avec Rive",

        category: "design",
        image: "/images/portfolio/rive-lab/rive-lab_main.webp",

        year: 2025,
        services: ["MOTION UI", "CREATIVE DEVELOPMENT"],

        website: "https://rive.app/",
        websiteLabel: "VISITER RIVE",

        description: `
Rive est un outil de création d’animations interactives pensé pour le web et les interfaces. Contrairement à une animation “figée”, les éléments réagissent en temps réel aux actions de l’utilisateur (hover, clic, états, transitions), avec un rendu fluide et facilement réutilisable.

J’ai appris à m’en servir pour concevoir des composants UI animés — notamment des boutons — en cherchant un niveau de réactivité et de finesse comparable à des interfaces produit. L’objectif : rendre l’interaction plus lisible, plus agréable, et plus “vivante”, sans sacrifier la cohérence graphique.
    `,

        previewVideo:"/videos/rive-lab_video.mp4",






        whatIDid: [
            "Prise en main de Rive (listeners, state machines, inputs et logique d’états).",
            "Création de boutons interactifs avec transitions fluides.",
            "Travail poussé sur la “fluidité” : timing, easing, micro-mouvements et feedback visuel.",
            "Conception de variations et d’états réutilisables pour un usage en interface réelle.",
            "Intégration côté web (React) et tests pour garantir une interaction stable et cohérente."
        ],

        roleImages: [
            "/images/portfolio/rive-lab/rive-lab_statemachine.jpg",
            "/images/portfolio/rive-lab/rive-lab_timeline.jpg",
            "/images/portfolio/rive-lab/rive-lab_timeline2.jpg"

        ],

        tech: [
            "Rive",
            "Motion Design",
            "State machines",
            "Micro-interactions",
            "React",
            "Animation UI"
        ],

        takeaways: `
Ce projet m’a permis de comprendre comment concevoir des animations réellement utiles en UI : pas juste “joli”, mais lisible, réactif, et au service de l’utilisateur.

J’ai aussi renforcé ma capacité à penser en états et en interactions, avec une attention particulière portée aux détails qui font la différence : le timing, la cohérence et la sensation de fluidité au survol et au clic.
    `
    }

    , {
        id: "affiche-tain",
        slug: "Affiche-Tain",

        title: "Affiche Tain",
        subtitle: "Affiche vectorielle inspirée de la ville de Tain-l'Hermitage",

        category: "creation",
        image:"/images/portfolio/affiche-tain/affiche-tain_mockup.jpg",



        year: 2025,
        services: ["DESIGN", "ILLUSTRATION"],

        description: `
L’objectif était de proposer une interprétation graphique stylisée de Tain-l'Hermitage, en y implémentant les symboles de la ville, jeux de plans et palette de couleurs cohérente, tout en conservant une forte lisibilité visuelle.
    `,

        /* IMAGES */
        gallery: [
            "/images/portfolio/affiche-tain/affiche-tain_accueil.webp",
            "/images/portfolio/affiche-tain/affiche-tain_moodboard.jpg",
        ],

        /* RÔLE / PROCESS */
        whatIDid: [
            "Recherche visuelle et analyse des éléments emblématiques du lieu.",
            "Création d’un moodboard et définition de l’ambiance graphique.",
            "Conception de formes vectorielles et composition de l’affiche.",
            "Travail sur la palette chromatique et les contrastes.",
            "Finalisation du visuel pour une diffusion numérique ou imprimée."
        ],

        roleImages: [
            "/images/portfolio/affiche-tain/affiche-tain_croquis.webp"
        ],

        tech: [
            "Illustrator",
            "Indesign",
            "Vectoriel"


        ],

        takeaways: `

Ce projet m'a permis d'pprofondir mes compétences techniques : Illustrator, vectorisation propre, création de formes complexes, travail des couleurs...

Il m'a également permis de structurer ma méthode de création à travers des moodboard et croquis préparatoires.
    `
    }

    , {
        id: "ancien-portfolio",
        slug: "ancien-portfolio",

        title: "Portfolio interactif",
        subtitle: "Site expérimental mêlant design, animation web et expérience sonore",

        category: "web",
        image: "/images/portfolio/ancien-portfolio/ancien-portfolio_mockup_accueil.webp",

        year: 2025,
        services: ["DESIGN", "FRONT-END", "CREATIVE DEVELOPMENT"],

        website: "https://ancien.maxime-znamiec.fr",
        websiteLabel: "ANCIEN.MAXIME-ZNAMIEC.FR",




        description: `
Projet de portfolio personnel conçu comme une expérience interactive plutôt qu’un simple site vitrine.

Ce site correspond à mon ancien portfolio et reflète mes premières expérimentations en front-end créatif, avec un fort accent mis sur les animations web, l’univers visuel et l’interaction sonore.

Si l’expérience se veut interactive, ce projet met aussi en évidence certaines erreurs de mes débuts, notamment en matière de responsive design et d’optimisation des performances, malgré les efforts apportés sur l’aspect visuel et l’interactivité.
    `,
        previewVideo:"/videos/ancien-portfolio_video.mp4",

        cta: {
            label: "Visiter le site",
            href: "https://ancien.maxime-znamiec.fr"
        },

        /* IMAGES */
        gallery: [
            "/images/portfolio/ancien-portfolio/ancien-portfolio_mockup_projets.jpg"

        ],

        whatIDid: [
            "Conception complète de la direction artistique du site.",
            "Développement front-end interactif avec animations avancées.",
            "Mise en place de transitions entre les pages.",
            "Création d’un curseur personnalisé et d’interactions sonores.",
            "Intégration d’effets visuels dynamiques (scroll, backgrounds animés).",
            "Travail approfondi sur l’expérience utilisateur pour proposer une navigation intuitive et engageante."

        ],

        roleImages: [
            "/images/portfolio/ancien-portfolio/ancien-portfolio_mockup_dark.jpg"
        ],

        tech: [
            "HTML",
            "CSS",
            "JavaScript",
            "GSAP",
            "VANTA.js",
            "Sound design",
            "Direction artistique"
        ],

        takeaways: `
Ce projet m’a permis d’assumer pleinement une démarche créative personnelle, en expérimentant de nouvelles interactions et animations.

Il m’a aussi aidé à structurer un projet front-end complexe, en portant une attention particulière aux détails et à la cohérence visuelle globale.
    `
    }

    , {
        id: "restaurateur",
        slug: "restaurateur",

        title: "Restaurateur",
        subtitle: "Film court sur le quotidien et la passion d’un restaurateur",

        category: "video",
        image:  "/images/portfolio/restaurateur/restaurateur_main.webp",

        year: 2024,
        services: ["AUDIOVISUEL", "POSTPRODUCTION"],

        website: "https://www.youtube.com/watch?v=UgWxv6v8hho",
        websiteLabel: "VOIR LE DOCUMENTAIRE",

        description: `
Film documentaire court centré sur le quotidien et la passion d’un restaurateur.

J’ai pris en charge la postproduction du projet, en travaillant le montage narratif, le rythme, l’étalonnage et le traitement sonore, afin de construire un récit cohérent et immersif.

L’objectif était de retranscrire l’humain derrière le métier, à travers une narration fluide et une ambiance soignée.
`,
        previewVideo:"/videos/restaurateur_video.mp4",

        cta: {
            label: "Voir le documentaire",
            href: "https://www.youtube.com/watch?v=UgWxv6v8hho"
        },

        /* IMAGES */
        gallery: [
            "/images/portfolio/restaurateur/restaurateur_main.webp",
            "/images/portfolio/restaurateur/restaurateur_autre.webp"

        ],

        whatIDid: [
            "Montage narratif du film à partir des rushs.",
            "Construction du rythme et de la progression émotionnelle.",
            "Étalonnage des images pour renforcer l’ambiance.",
            "Traitement et mixage sonore."

        ],

        roleImages: [
            "/images/portfolio/restaurateur/restaurateur_montage.jpg"

        ],

        tech: [
            "Adobe Premiere Pro",
            "Montage vidéo",
            "Étalonnage",
            "Sound design",
            "Narration audiovisuelle"
        ],

        takeaways: `
Ce projet m’a permis de gagner en confiance sur la gestion d’un montage long et structuré.

Il m’a aussi aidé à mieux comprendre les enjeux de narration, de rythme et d’émotion dans un format documentaire, tout en respectant des contraintes de durée.
    `
    }
    , {
        id: "echappe",
        slug: "echappee",

        title: "Échappée",
        subtitle: "Création artistique mêlant techniques traditionnelles et numériques",

        category: "creation",
        image: "/images/portfolio/echappee/echappee_mockup.webp",

        year: 2024,
        services: ["ILLUSTRATION"],

        description: `
Projet de composition graphique personnelle combinant arts plastiques traditionnels (peinture, fusain, craies) et outils numériques.

L’objectif était de traduire un thème imposé à travers un visuel poétique et expressif, en jouant sur les textures, les contrastes et la narration visuelle.
    `,

        /* IMAGES */
        gallery: [
            "/images/portfolio/echappee/echappee_mockup.webp"


        ],

        whatIDid: [
            "Recherche d’inspirations et création d’un moodboard.",
            "Réalisation d’esquisses et de dessins à la main.",
            "Photographie et numérisation des éléments plastiques.",
            "Détourage et retouches sur Photoshop.",
            "Assemblage des éléments et composition de l’image finale.",
            "Travail sur la colorimétrie et les contrastes."
        ],

        roleImages: [
            "/images/portfolio/echappee/echappee_peinture.jpg",
            "/images/portfolio/echappee/echappee_fusain.jpg",
        ],

        tech: [
            "Photoshop",
            "Photomontage",
            "Peinture",
            "Composition d’image"

        ],

        takeaways: `
Ce projet m’a permis de renforcer ma démarche créative, en passant d’une intention abstraite à un visuel concret.

Il m’a également donné confiance dans ma capacité à mêler différents médiums pour construire une image cohérente et porteuse de sens.
    `
    }

    , {
        id: "vinyl--website",
        slug: "Vinyl",

        title: "Vinyl",
        subtitle: "Site éditorial développé avec le CMS WordPress, centré sur la musique et la culture vinyle",

        category: "web",
        image: "/images/portfolio/vinyl/vinyl_mockup.webp",

        year: 2024,
        services: ["DESIGN", "CONTENT", "INTEGRATION"],

        website: "https://vinyl.maxime-znamiec.fr",
        websiteLabel: "VINYL.MAXIME-ZNAMIEC.FR",

        description: `
Vinyl est un site éditorial développé sous CMS WordPress, réalisé dans un cadre académique et conçu autour d’une passion personnelle pour la musique.

Ce projet avait pour objectif principal de découvrir l’écosystème WordPress et d’en comprendre les logiques fondamentales : gestion de contenu, structuration des pages, hiérarchisation de l’information et administration du site.

Il s’agit d’un projet d’initiation, marqué par une première prise en main d'un CMS. Certains aspects, notamment le responsive et certaines pages n’ont pas été approfondis, le projet s’inscrivant avant tout dans une démarche d’apprentissage et d’expérimentation.
    `,

        gallery: [
            "/images/portfolio/vinyl/vinyl_accueil.webp",
            "/images/portfolio/vinyl/vinyl_actus.webp"


        ],
        cta: {
            label: "Visiter le site",
            href: "https://vinyl.maxime-znamiec.fr"
        },

        whatIDid: [
            "Prise en main de WordPress et compréhension de la logique CMS.",
            "Conception de l’architecture du site et des différentes pages.",
            "Création d’une identité visuelle cohérente autour du thème musical.",
            "Intégration des pages avec Elementor et mise en page responsive.",
            "Mise en place d’un formulaire de contact fonctionnel."
        ],


        tech: [
            "WordPress",
            "Elementor",
            "HTML / CSS",
            "UI Design",
            "Gestion de contenu"
        ],

        takeaways: `
Ce projet m’a permis de découvrir le fonctionnement d’un CMS et de comprendre les enjeux liés à la gestion de contenu.

Il m’a également appris à m’adapter rapidement à un nouvel outil tout en conservant une approche structurée du design et de l’expérience utilisateur.
    `
    }

];

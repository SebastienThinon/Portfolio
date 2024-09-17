<script>
import AIALAB_card from "../assets/img/AIALAB.png";
import AIALAB_open from "../assets/img/AIALABopen.png";
import AIALAB_page from "../assets/img/AIALABpage.png";
import Bloolight_card from "../assets/img/bloolightcard.jpg";
import Bloolight from "../assets/img/bloolight.jpg";
import shopify_card from "../assets/img/shopifycard.png";
import shopify_home from "../assets/img/homeshopify.png";
import shopify_produits from "../assets/img/produitshopify.png";
import pedagogique_card from "../assets/img/wally.png";
import pedagogique_cours from "../assets/img/homepedago.png";
import pedagogique_rosy from "../assets/img/rosyCours.png";
import phos_card from "../assets/img/phosCard.png";
import phos_page from "../assets/img/phospage.png";
import supertronix_card from "../assets/img/supertronixlogo.png";
import supertronix from "../assets/img/supertronixAcceuil.jpg";
import iceshop_card from "../assets/img/iceshopcard.png";
import insectes_card from "../assets/img/insectesCard.png";
import microbit_card from "../assets/img/microbitCard.png";
import whitecollar_card from "../assets/img/WhiteCollarCard.png";
import science_card from "../assets/img/scienceCard.png";
import animation_card from "../assets/img/animeCard.png";
import aperture_card from "../assets/img/apertureCard.png";
import stopmotion_card from "../assets/img/stopMotionCard.png";
import silence from "../assets/img/silence.png";
import masque_card from "../assets/img/masqueCard.png";
import fightclub_card from "../assets/img/fightclub.png";
let id = 0;
export const ProjetsList = [
  {
    id: id++,
    name: "AIALAB",
    tag: ["IA", "ACF", "WORDPRESS", "INÉGRATION", "LMS"],
    descr:
      "AIALAB est un parcours pédagogique pour un jeune public sur l'art et l'intéligence artificile. J'ai participé à la création du contenu, à l'intégration et à la présentation du parcours.",
    theme: "dev-web",
    images: [AIALAB_open, AIALAB_page],
    imageCard: "background-image: url('" + AIALAB_card + "');",
    video: "",
    link: "",
    date: "2023",
  },
  {
    id: id++,
    name: "Bloolight",
    tag: ["IA", "UNITY", "EXPÉRIENCE INTÉRACTIVE", "SQL"],
    descr:
      "Expérience interactive où l'utilisateur est immergé dans un tableau disposé sur trois côtés. Il peut interagir avec celui-ci à l’aide de son portable. En dessinant des formes sur une application utilisant de l’intelligence artificielle, elles apparaissent devant lui. Mon rôle dans ce projet était de développer et intégrer l’interactivité et les scènes dans Unity.",
    theme: "dev",
    images: [Bloolight],
    imageCard: "background-image: url('" + Bloolight_card + "');",
    video: "https://www.youtube.com/embed/AVVM9EdwjK0?si=xoN1mSSqhga9H5Tl",
    link: "https://www.facebook.com/bloolight.artit/?locale=hi_IN&paipv=0&eav=AfZCA_kISTzFOKlm7tuVJMzHT1EhyUe1SECNpapQmq_vakJ20gyMKxsA7h-uFzUJfFM&_rdr",
    date: "2020",
  },
  {
    id: id++,
    name: "Génielab Shopify",
    tag: ["E-COMMERCE", "INTÉGRATION"],
    descr:
      "Création et implémentation d'une boutique E-commerce. Je me suis occupé de la création et de l'intégration des produits et de certains plugins",
    theme: "dev-web",
    images: [shopify_home, shopify_produits],
    imageCard: "background-image: url('" + shopify_card + "');",
    video: "",
    link: "https://boutique.genielab.co",
    date: "2023",
  },
  {
    id: id++,
    name: "Cours pédagogiques",
    tag: ["PHP", "HTML", "CSS", "JAVASCRIPT", "ACF", "SQL", "WORDPRESS", "LMS"],
    descr:
      "Création et mise à jour d'un template wordpress de cours en ligne. Le site devait etre accéssible en se rapprochant le plus possible de la norme WCAG 2.1. Le template devait acceuillir plusieurs cours en ligne pour un jeune public.",
    theme: "dev-web",
    images: [pedagogique_cours, pedagogique_rosy],
    imageCard: "background-image: url('" + pedagogique_card + "');",
    video: "https://www.youtube.com/embed/SzIgFGGhafI?si=YQ6hWjdcq4vGbmiY",
    link: "",
    date: "2022",
  },
  {
    id: id++,
    name: "PHOS 2019",
    tag: [
      "HTML",
      "CSS",
      "JAVASCRIPT",
      "PHP",
      "INTÉGRATION",
      "AFTER EFFECTS",
      "MOTION DESIGN",
    ],
    descr:
      "Intégration de la programmation pour l'evenement PHOS 2019. Mise à jour et amélioration du CMS personnalisé. Motion design pour la vidéo de présentation de l'évènement",
    theme: "dev-web",
    images: [phos_page],
    imageCard: "background-image: url('" + phos_card + "');",
    video: "https://www.youtube.com/embed/WDJvMSVwEjE?si=m-1XLCuFu6XxGZ_c",
    link: "https://www.espacephos.net/2019/",
    date: "2019",
  },
  {
    id: id++,
    name: "INSECTES CONNECTÉS",
    tag: ["UNITY", "DAVINCI RESOLVE", "MICRO:BIT"],
    descr:
      "Expérience intéractive disposé pendant le festival des butinerie de l'insectarium de montreal",
    theme: "dev",
    images: [],
    imageCard: "background-image: url('" + insectes_card + "');",
    video: "https://www.youtube.com/embed/OAVu2o-22R4?si=srf0abNOfnU1WwgM",
    link: "",
    date: "2022",
  },
  {
    id: id++,
    name: "SuperTronix",
    tag: [
      "PHP",
      "HTML",
      "CSS",
      "JAVASCRIPT",
      "ACF",
      "SQL",
      "WORDPRESS",
      "PROTOTYPE",
    ],
    descr:
      "Réalisation d'un template custom pour une association de robotique. Je me suis essentiellement occupé de l'intégration et d'une partie de la programmation du template.",
    theme: "dev-web",
    images: [supertronix],
    imageCard: "background-image: url('" + supertronix_card + "');",
    video: "",
    link: "",
    date: "2019",
  },
  {
    id: id++,
    name: "N'IceShop",
    tag: ["HTML", "CSS", "JAVASCRIPT", "PROTOTYPE"],
    descr:
      "Réalisation d'une borne d'achat de glace. Proposition de maquette et réalisation de celle-ci en pogrammation.",
    theme: "dev-web",
    images: [],
    imageCard: "background-image: url('" + iceshop_card + "');",
    video: "",
    link: "",
    date: "2018",
  },
  {
    id: id++,
    name: "Annimation logo science étonante",
    tag: ["AFTER EFFECTS", "MOTION DESIGN", "ILLUSTRATOR", "PROTOTYPE"],
    descr:
      "Réalisation d'une animation de logo pour un cours de motion design. Inspiré de la chaine youtube Science Étonante",
    theme: "motion",
    images: [],
    imageCard: "background-image: url('" + science_card + "');",
    video: "https://www.youtube.com/embed/Ffn3gmv-DqY?si=xm7LuMhwhQ5Zzeb0",
    link: "",
    date: "2018",
  },
  {
    id: id++,
    name: "Générique de série White Collar",
    tag: ["AFTER EFFECTS", "MOTION DESIGN", "ILLUSTRATOR", "PROTOTYPE"],
    descr:
      "Réalisation d'un générique de film ou série pour un cours de motion design. Inspiré de la série White Collar ou FBI duo très spécial",
    theme: "motion",
    images: [],
    imageCard: "background-image: url('" + whitecollar_card + "');",
    video: "https://www.youtube.com/embed/pf7umJcDCOo?si=8orUOeJ9JFR1VzTV",
    link: "",
    date: "2019",
  },
  {
    id: id++,
    name: "Animation supermarché",
    tag: ["AFTER EFFECTS", "MOTION DESIGN", "ILLUSTRATOR", "PROTOTYPE"],
    descr:
      "réalisation d'un cours métrage d'animation dans le cadres d'un cours d'animation. Je me suis inspiré du générique de fin de bob's burger pour le style. J'ai voulu créer une petite histoire où deux jeunnes personnes se rendent dans un magasin et y font quelques betises. J'ai pris le partie d'ajouter énormément de clin d'oeil à la pop culture.",
    theme: "motion",
    images: [],
    imageCard: "background-image: url('" + animation_card + "');",
    video: "https://www.youtube.com/embed/NnraHGi2JTA?si=JI2INgdODgHGBPSe",
    link: "",
    date: "2018",
  },
  {
    id: id++,
    name: "Animation Aperture Science",
    tag: ["AFTER EFFECTS", "MOTION DESIGN", "ILLUSTRATOR", "PROTOTYPE"],
    descr:
      "Animation du logo Aperture Science, issue de la saga Portale, saga que j'affectionne beaucoup. J'ai réalisé ce motion design dans le cadre d'un cours d'animation.",
    theme: "motion",
    images: [],
    imageCard: "background-image: url('" + aperture_card + "');",
    video: "https://www.youtube.com/embed/jja1gxy5ZqU?si=yuiT_r_o926YGXym",
    link: "",
    date: "2018",
  },
  {
    id: id++,
    name: "BODAWAY",
    tag: ["MONTAGE", "RÉALISATION", "STOP MOTION", "LUMIÈRE"],
    descr:
      "Animation en stop motion d'une petite histoire. Réalisé dans le cadre d'un cours d'animation, nous étions trois pour la création complete de cette animation.",
    theme: "motion",
    images: [],
    imageCard: "background-image: url('" + stopmotion_card + "');",
    video: "https://www.youtube.com/embed/e4-kDk6pMLU?si=OHcTvCv_e8qasjBZ",
    link: "",
    date: "2018",
  },
  {
    id: id++,
    name: "Silence ça tourne",
    tag: ["GRAPHISME", "ILLUSTRATOR", "PHOTOSHOP"],
    descr:
      "Affiche évènementiel pour la soirée de projection de court métrage. Réalisé dans le cadre d'un cours de design graphique, cette affiche à été selectionnée pour être utilisée pour l'évènement. ",
    theme: "design",
    images: {
      image1: {
        src: silence,
        alt: "affiche évènementiel",
      },
    },
    imageCard: "background-image: url('" + silence + "');",
    video: "",
    link: "",
    date: "2018",
  },
  {
    id: id++,
    name: "Smash cube extrem",
    tag: ["APLICATION MOBILE", "UNITY"],
    descr:
      "Application mobile réalisé dans le cadre d'un cours de programmation intéractive. Inspiré des clickers, le but est de tapoter les cubes pour les casser et ainsi augmenter sa puissance. Jeu détente qui permet de se déstresser en cassant des cubes.",
    theme: "",
    images: [],
    imageCard: "background-image: url('" + microbit_card + "');",
    video: "",
    link: "",
    date: "2018",
  },
  {
    id: id++,
    name: "Tutoriel micro:bit",
    tag: ["MICRO:BIT", "GITHUB"],
    descr:
      "tutoriel microbit pour enfant. Le but de ce tutoriel est de faire découvrir la programmation à un jeune public en développant un petit jeu intéractif qui peut etre joué 100% en ligne",
    theme: "",
    images: [],
    imageCard: "background-image: url('" + microbit_card + "');",
    video: "",
    link: "",
    date: "2024",
  },
  {
    id: id++,
    name: "Derrière le masque",
    tag: ["RÉALISATEUR", "ACTEUR", "MONTAGE", "HABILLAGE SONORE"],
    descr:
      "Court métrage réalisé dans le cadre d'un TP. La contrainte était que ce soit un film d'horreur. J'ai beaucoup aimé réaliser ce projet. J'ai découvert ainsi la passion du cinéma. ",
    theme: "autre",
    images: [],
    imageCard: "background-image: url('" + masque_card + "');",
    video: "https://www.youtube.com/embed/52Q2oOPaTL8?si=1XHcXGn0ETwq2Zb4",
    link: "",
    date: "2018",
  },
  {
    id: id++,
    name: "Fight club",
    tag: ["GRAPHISME", "ILLUSTRATOR", "PHOTOSHOP"],
    descr:
      "Reproduction d'une affiche de film, ici fight club. Réalisé dans le cadre d'un cours de design graphique",
    theme: "design",
    images: {
      image1: {
        src: fightclub_card,
        alt: "affiche de film fight club",
      },
    },
    imageCard: "background-image: url('" + fightclub_card + "');",
    video: "",
    link: "",
    date: "2018",
  },
];
</script>

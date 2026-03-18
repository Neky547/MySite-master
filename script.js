//ANIMATIONS

const profileCard = document.getElementById("profile-card");
const skillsSection = document.getElementById("skills-section");
const leftItems = document.querySelectorAll('.left-timeline-item');
const rightItems = document.querySelectorAll('.right-timeline-item');

//Photo de profil
profileCard.animate(
  [{ transform: "translateY(70px)" }, { transform: "translateY(0px)" }],
  { duration: 1000 },
);
//Compétences
skillsSection.animate(
  [{ transform: "translateX(70px)" }, { transform: "translateX(0px)" }],
  { duration: 1000 },
);
//Parcours scolaire
// Anime chaque élément individuellement
leftItems.forEach(item => {
  item.animate(
    [{ transform: "translateX(-200px)" }, { transform: "translateX(0px)" }],
    { duration: 5000, fill: 'forwards' }
  );
});

rightItems.forEach(item => {
  item.animate(
    [{ transform: "translateX(200px)" }, { transform: "translateX(0px)" }],
    { duration: 5000, fill: 'forwards' }
  );
});

//PARCOURS PRO - AFFICHAGE DES DETAILS DES STAGES
const modal = new bootstrap.Modal(document.getElementById("stageModal"));

const data = {
  stageBTS1: {
    title: "Rapport de Stage — SISMANI | Janvier – Février 2026",
    body: `
      <h5><i class="bi bi-building-fill"></i> Présentation de l'entreprise</h5>
      <p>
        <strong>SISMANI</strong> est une entreprise spécialisée dans les solutions numériques 
        appliquées à la <strong>supply chain</strong>. Elle développe et maintient 
        <strong>Wonkaa</strong>, une application web métier permettant la gestion des formats 
        d'échange, des fichiers protocoles et des configurations clients dans le domaine 
        de la logistique. L'entreprise accompagne ses clients dans la digitalisation et 
        l'optimisation de leurs flux opérationnels.
      </p>

      <h5><i class="bi bi-bullseye"></i> Objectifs du stage</h5>
      <p>
        Ce stage de deuxième année de BTS SIO option SLAM avait pour objectifs de :
      </p>
      <ul>
        <li>Contribuer activement au développement et à la maintenance de l'application Wonkaa</li>
        <li>Renforcer les compétences en développement backend (Symfony / PHP) et en gestion de bases de données</li>
        <li>Participer à la création d'un site vitrine WordPress pour la solution Wonkaa</li>
        <li>Développer l'autonomie et la rigueur en contexte professionnel réel</li>
      </ul>

      <h5><i class="bi bi-pc-display-horizontal"></i> Mission 1 — Développement et maintenance de l'application Wonkaa</h5>
      <p>
        L'essentiel de mon activité s'est concentré sur l'application <strong>Wonkaa</strong>, 
        développée en <strong>PHP / Symfony</strong> selon une architecture <strong>MVC</strong> 
        (Modèle – Vue – Contrôleur).
      </p>
      <ul>
        <li>
          <strong>Développement de fonctionnalités Filtre / Tri :</strong> conception et intégration 
          de systèmes de filtrage et de tri des données dans les tableaux de l'application, 
          permettant aux utilisateurs de naviguer efficacement parmi de grandes volumétries 
          de commandes logistiques.
        </li>
        <li>
          <strong>Correction d'anomalies Symfony :</strong> résolution de bugs identifiés en phase 
          de test, notamment l'erreur liée à la propriété <em>messageManagementUserIds</em> 
          non reconnue par le framework.
        </li>
        <li>
          <strong>Gestion des colonnes dynamiques :</strong> activation et correction des colonnes 
          configurables dans les vues de l'application, en assurant la cohérence entre 
          l'affichage et les données sous-jacentes.
        </li>
        <li>
          <strong>Gestion de bases de données :</strong> duplication et insertion de plus de 
          <strong>10 000 entrées</strong> de commandes logistiques dans la base de données, 
          avec vérification de l'intégrité des données après chaque opération.
        </li>
        <li>
          <strong>Traduction de l'application (FR / EN) :</strong> internationalisation de 
          l'interface utilisateur afin d'élargir le périmètre d'utilisation de l'application 
          à un public anglophone.
        </li>
        <li>
          <strong>Résolution de conflits Git :</strong> gestion des conflits de fusion sur le 
          dépôt partagé lors du travail en équipe sur des branches concurrentes.
        </li>
      </ul>

      <h5>🧪 Mission 2 — Tests et validation de l'application</h5>
      <p>
        Une part significative du stage a été consacrée à la <strong>phase de test</strong> 
        de l'application Wonkaa dans des conditions proches de la production :
      </p>
      <ul>
        <li>
          <strong>Tests fonctionnels :</strong> vérification des fonctionnalités existantes 
          et nouvellement développées (création, modification, suppression, import de fichiers, 
          gestion des utilisateurs et des clients).
        </li>
        <li>
          <strong>Tests de performance :</strong> simulation de charges élevées allant 
          jusqu'à <strong>20 000 commandes</strong> afin d'évaluer la robustesse et la 
          réactivité de l'application.
        </li>
        <li>
          <strong>Détection et remontée de bugs :</strong> identification et documentation 
          d'anomalies liées aux opérations de duplication, suppression et création de données, 
          avec transmission aux développeurs concernés.
        </li>
      </ul>

      <h5>🌐 Mission 3 — Création du site vitrine Wonkaa (WordPress)</h5>
      <p>
        En parallèle du développement applicatif, j'ai participé à la conception et à 
        la mise en ligne du <strong>site vitrine de la solution Wonkaa</strong> :
      </p>
      <ul>
        <li>
          <strong>Mise en place de l'environnement WordPress :</strong> installation, 
          configuration et personnalisation du thème à partir de <em>Template Kits</em> 
          (Themeforest).
        </li>
        <li>
          <strong>Intégration de plugins :</strong> installation et configuration d'extensions 
          telles que <em>TablePress</em> (affichage de tableaux de comparaison) et 
          <em>Essential Addons for Elementor</em> (enrichissement des composants visuels).
        </li>
        <li>
          <strong>Création des pages :</strong> conception et structuration des pages 
          <em>Accueil, Solutions, Packs, Intégration</em> et <em>Cas clients</em>, 
          en veillant à la cohérence de la charte graphique et à la clarté du message commercial.
        </li>
        <li>
          <strong>Tests UAT (User Acceptance Testing) :</strong> réalisation des tests 
          de recette avec validation client avant mise en production.
        </li>
      </ul>

      <h5>📋 Mission 4 — Support commercial</h5>
      <ul>
        <li>
          Rédaction d'un <strong>support commercial</strong> sous PowerPoint destiné à 
          présenter la solution Wonkaa à de nouveaux prospects.
        </li>
        <li>
          Création d'un <strong>site vitrine WordPress</strong> pour un client de SISMANI 
          (<em>IzyServices</em>) : conception graphique, création du logo, structuration 
          des pages et optimisation de l'expérience utilisateur.
        </li>
      </ul>

      <h5>🛠️ Compétences mobilisées (référentiel BTS SIO SLAM)</h5>
      <ul>
        <li>Développement backend structuré (Symfony / PHP, architecture MVC)</li>
        <li>Gestion et manipulation de bases de données (MySQL / MariaDB)</li>
        <li>Tests fonctionnels et de performance d'une application métier</li>
        <li>Gestion de version collaborative avec Git (branches, merge, résolution de conflits)</li>
        <li>Maintenance corrective et évolutive d'une application existante</li>
        <li>Création et administration d'un site WordPress (thème, plugins, pages)</li>
        <li>Internationalisation d'une application web (i18n FR / EN)</li>
      </ul>

      <h5>🎯 Bilan et apports professionnels</h5>
      <p>
        Ce stage m'a offert une immersion complète dans un environnement de développement 
        professionnel structuré. J'ai renforcé mes compétences techniques en développement 
        backend avec Symfony, en résolution de bugs complexes et en optimisation de 
        performances applicatives sous forte charge. La diversité des missions — du 
        développement backend à la création de contenu web en passant par les tests — 
        m'a permis d'adopter une vision globale du cycle de vie d'une application. 
        J'ai également développé mon <strong>autonomie</strong>, ma <strong>rigueur</strong> 
        en phase de recette et ma capacité à m'intégrer rapidement dans une équipe technique existante.
      </p>
    `,
  },

  stageBTS2: {
    title: "Rapport de Stage — SISMANI | 2025",
    body: `
      <h5><i class="bi bi-building-fill"></i> Présentation de l'entreprise</h5>
      <p>
        <strong>SISMANI</strong> est une entreprise spécialisée dans les solutions numériques 
        dédiées à la <strong>supply chain</strong>. Son produit phare, <strong>Wonkaa</strong>, 
        est une application web métier permettant la gestion des échanges de données, 
        le suivi des commandes et la configuration des flux logistiques pour le compte 
        de ses clients entreprises.
      </p>

      <h5><i class="bi bi-bullseye"></i> Objectifs du stage</h5>
      <p>
        Ce premier stage en entreprise avait pour objectifs de :
      </p>
      <ul>
        <li>Découvrir le fonctionnement d'une application web métier en environnement professionnel</li>
        <li>Contribuer au développement de nouvelles fonctionnalités sur l'application Wonkaa</li>
        <li>Acquérir une expérience concrète en gestion de bases de données en conditions réelles</li>
        <li>Développer une méthodologie de test rigoureuse sur une application de production</li>
      </ul>

      <h5>🗄️ Mission 1 — Gestion de bases de données</h5>
      <p>
        L'une de mes premières missions a consisté à intervenir directement sur la 
        <strong>base de données MariaDB</strong> de l'application Wonkaa :
      </p>
      <ul>
        <li>
          <strong>Insertion et modification de données :</strong> traitement de 
          <strong>1 500 enregistrements</strong> relatifs à des commandes logistiques, 
          en respectant les contraintes d'intégrité référentielle de la base (clés étrangères, 
          types de données, contraintes d'unicité).
        </li>
        <li>
          <strong>Vérification de la cohérence des données :</strong> contrôle systématique 
          des données insérées afin de garantir leur exactitude et leur exploitabilité 
          par l'application.
        </li>
        <li>
          Cette mission m'a permis de maîtriser les opérations SQL fondamentales 
          (<em>INSERT, UPDATE, SELECT</em>) dans un contexte de production réel, 
          avec des données sensibles.
        </li>
      </ul>

      <h5>💻 Mission 2 — Développement de fonctionnalités (PHP / JavaScript)</h5>
      <p>
        J'ai contribué à l'enrichissement fonctionnel de l'application Wonkaa en 
        développant de nouvelles fonctionnalités :
      </p>
      <ul>
        <li>
          <strong>Fonctionnalités de filtre :</strong> développement de filtres permettant 
          aux utilisateurs de restreindre l'affichage des données selon des critères 
          métier spécifiques (statut de commande, client, date, etc.), en combinant 
          du code <strong>PHP</strong> côté serveur et du <strong>JavaScript</strong> 
          côté client pour une interaction fluide.
        </li>
        <li>
          <strong>Fonctionnalités de tri :</strong> implémentation du tri multi-colonnes 
          dans les tableaux de données de l'application, permettant aux opérateurs 
          logistiques de prioriser et d'organiser rapidement leurs vues.
        </li>
        <li>
          Ces développements ont nécessité une bonne compréhension de 
          l'<strong>architecture existante</strong> de l'application afin d'intégrer 
          les nouvelles fonctionnalités sans régression.
        </li>
      </ul>

      <h5>🧪 Mission 3 — Tests et assurance qualité</h5>
      <p>
        Une part importante du stage a été dédiée à la <strong>phase de test</strong> 
        de l'application Wonkaa :
      </p>
      <ul>
        <li>
          <strong>Élaboration et exécution de scénarios de test :</strong> conception 
          de cas de test couvrant les fonctionnalités principales de l'application 
          (gestion des commandes, import de fichiers, navigation).
        </li>
        <li>
          <strong>Identification et résolution de problèmes :</strong> détection et 
          correction de <strong>30 anomalies</strong> identifiées lors des campagnes 
          de test, allant de dysfonctionnements d'affichage à des erreurs de traitement 
          de données.
        </li>
        <li>
          <strong>Documentation des résultats :</strong> rédaction de comptes rendus 
          de test permettant aux développeurs de prioriser les corrections à apporter.
        </li>
      </ul>

      <h5>🛠️ Compétences mobilisées (référentiel BTS SIO SLAM)</h5>
      <ul>
        <li>Développement web frontend et backend (PHP, JavaScript)</li>
        <li>Gestion et manipulation de bases de données relationnelles (MariaDB / SQL)</li>
        <li>Tests fonctionnels et remontée de bugs en environnement de production</li>
        <li>Lecture et compréhension d'une base de code existante</li>
        <li>Rigueur et méthode dans la documentation technique</li>
      </ul>

      <h5>🎯 Bilan et apports professionnels</h5>
      <p>
        Ce premier stage chez SISMANI a constitué une expérience fondatrice dans mon 
        parcours de développeuse web. Il m'a permis de confronter mes acquis théoriques 
        à la réalité d'un projet professionnel en production, avec des contraintes 
        de qualité et de délais. La gestion de bases de données à grande échelle, 
        le développement de fonctionnalités dans un code existant et la pratique 
        intensive des tests m'ont apporté une <strong>rigueur méthodologique</strong> 
        essentielle. Cette expérience a également confirmé mon intérêt pour le 
        développement web backend et la gestion des données, orientant naturellement 
        mon projet professionnel vers ces domaines.
      </p>
    `,
  },
};

document.querySelectorAll("button[id^='stage']").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.getElementById("modalTitle").innerHTML = data[btn.id].title;
    document.getElementById("modalBody").innerHTML = data[btn.id].body;
    modal.show();
  });
});
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
    title: "Stage - SISMANI | Janvier - Février 2026",
    body: `
      <h5>📍 Contexte</h5>
      <p>
        Stage réalisé chez <strong>SISMANI</strong> sur l'application web <strong>Wonkaa</strong>, 
        une solution liée à la supply chain permettant la gestion de formats d’échange, 
        fichiers protocoles et configurations clients.
      </p>

      <h5>💻 Missions principales sur l’application Wonkaa</h5>
      <ul>
        <li>Développement et correction des fonctions <strong>Filtre / Tri</strong> (Symfony)</li>
        <li>Correction d’erreurs Symfony (ex : messageManagementUserIds non reconnu)</li>
        <li>Gestion des colonnes dynamiques (activation / correction)</li>
        <li>Résolution de conflits Git</li>
        <li>Traduction de l’application FR / EN</li>
        <li>Tests fonctionnels, tests de performance (jusqu’à 20 000 commandes)</li>
        <li>Détection et remontée de bugs (duplication, suppression, création)</li>
      </ul>

      <h5>🌐 Projet Web - WordPress</h5>
      <ul>
        <li>Création et personnalisation du site vitrine Wonkaa</li>
        <li>Utilisation de Template Kits (Themeforest)</li>
        <li>Installation et configuration de plugins (TablePress, Essential Addons)</li>
        <li>Création de pages : Home, Solutions, Packs, Intégration, Cas clients</li>
        <li>Tests UAT et validation client</li>
      </ul>

      <h5>🛠️ Compétences mobilisées (BTS SIO SLAM)</h5>
      <ul>
        <li>Développement backend (Symfony / PHP)</li>
        <li>Structuration MVC (Model / View / Controller)</li>
        <li>Tests et validation d’une application</li>
        <li>Gestion de base de données</li>
        <li>Gestion de version avec Git</li>
        <li>Maintenance corrective et évolutive</li>
      </ul>

      <h5>🎯 Bilan</h5>
      <p>
        Ce stage m’a permis de renforcer mes compétences en développement web 
        structuré (architecture MVC), en résolution de bugs complexes et en 
        optimisation de performances. J’ai également développé mon autonomie, 
        ma rigueur en phase de test et ma capacité à comprendre une application existante.
      </p>
    `,
  },

  stageBTS2: {
    title: "Projet Commercial & Création Site Client",
    body: `
      <h5>📊 Dimension Gestion de Projet</h5>
      <ul>
        <li>Création d’une presse commerciale (PowerPoint)</li>
        <li>Analyse des besoins via Google Form</li>
        <li>Présentation client et validation</li>
      </ul>

      <h5>🎨 Création d’un site vitrine client (IzyServices)</h5>
      <ul>
        <li>Conception complète du site WordPress</li>
        <li>Création de logo</li>
        <li>Structuration des pages (À propos, Cas clients, Services)</li>
        <li>Optimisation mise en page et expérience utilisateur</li>
      </ul>

      <h5>🚀 Apports professionnels</h5>
      <p>
        Cette partie du stage m’a permis d’acquérir une vision plus globale 
        du métier : relation client, expression des besoins, proposition de solution 
        technique et validation finale.
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

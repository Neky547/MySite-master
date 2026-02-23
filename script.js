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
    title: "Stage de 1e année - Développeur Web",
    body: `
      <ul>
        <li>Participation à la création d'une application de supply chain</li>
        <li>Technologies utilisées : HTML, CSS, JS, PHP, MySQL, Excel, Bootstrap, Symfony</li>
      </ul>
      <p>Nous avons appris à collaborer en équipe et à gérer un projet de développement web.
      Nous avons participé à la création d'une application de supply chain qui sert à créer et gérer les jeux de tests.
      Dans cette application, nous avons géré la base de données et développé des fonctionnalités pour l'application.
      </p>
      <table>
        
      </table>
    `,
  },
  stageBTS2: {
    title: "Stage de 2e année - Développeur Web",
    body: `
      <ul>
        <li>Application de supply chain avancée</li>
        <li>Technos : PHP, JavaScript, WordPress Elementor</li>
      </ul>
      <p>Nous avons continué à travailler sur l'application de supply chain, en ajoutant de nouvelles fonctionnalités et en améliorant l'interface utilisateur.
      Nous avons également travaillé sur un projet de développement web pour un client, en utilisant WordPress et Elementor pour créer un site web personnalisé.
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

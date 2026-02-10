//PARCOURS PRO - AFFICHAGE DES DETAILS DES STAGES
const modal = new bootstrap.Modal(document.getElementById("stageModal"));

const data = {
  stageBTS1: {
    title: "Stage de 1e année - Développeur Web",
    body: `
      <ul>
        <li>Application de supply chain</li>
        <li>Technos : HTML, CSS, JS</li>
        <li>Durée : 6 semaines</li>
      </ul>
    `
  },
  stageBTS2: {
    title: "Stage de 2e année - Développeur Web",
    body: `
      <ul>
        <li>Application de supply chain avancée</li>
        <li>Technos : JS, API, Base de données</li>
        <li>Durée : 6 semaines</li>
      </ul>
    `
  }
};

document.querySelectorAll("button[id^='stage']").forEach(btn => {
  btn.addEventListener("click", () => {
    document.getElementById("modalTitle").innerHTML = data[btn.id].title;
    document.getElementById("modalBody").innerHTML = data[btn.id].body;
    modal.show();
  });
});



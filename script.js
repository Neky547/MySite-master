//ANIMATIONS

const profileCard = document.getElementById("profile-card");
const skillsSection = document.getElementById("skills-section");
const leftItems = document.querySelectorAll('.left-timeline-item');
const rightItems = document.querySelectorAll('.right-timeline-item');

profileCard.animate(
  [{ transform: "translateY(70px)" }, { transform: "translateY(0px)" }],
  { duration: 1000 },
);
skillsSection.animate(
  [{ transform: "translateX(70px)" }, { transform: "translateX(0px)" }],
  { duration: 1000 },
);
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


const reportStyles = `
  <style>
    .rapport-wrapper { font-family: Georgia, serif; color: #1a1a2e; background: #fff; }
    .rapport-couverture {
      background: linear-gradient(135deg, #0b1a5f 0%, #1a3a8f 60%, #2255cc 100%);
      color: white; padding: 3rem 2rem; text-align: center; position: relative; overflow: hidden;
    }
    .rapport-couverture::before {
      content: ''; position: absolute; top: -40px; right: -40px;
      width: 200px; height: 200px; border-radius: 50%; background: rgba(255,255,255,0.06);
    }
    .rapport-couverture .badge-annee {
      display: inline-block; background: rgba(255,255,255,0.15);
      border: 1px solid rgba(255,255,255,0.3); border-radius: 20px;
      padding: 0.3rem 1rem; font-size: 0.8rem; letter-spacing: 1px;
      text-transform: uppercase; margin-bottom: 1.5rem;
    }
    .rapport-couverture h1 { font-size: 1.6rem; font-weight: 700; margin-bottom: 0.5rem; letter-spacing: 1px; }
    .rapport-couverture .sous-titre { font-size: 1rem; opacity: 0.85; margin-bottom: 2rem; }
    .rapport-couverture .info-grid {
      display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;
      max-width: 500px; margin: 0 auto 2rem; text-align: left;
    }
    .rapport-couverture .info-item { background: rgba(255,255,255,0.1); border-radius: 8px; padding: 0.75rem 1rem; }
    .rapport-couverture .info-label { font-size: 0.7rem; opacity: 0.7; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 0.2rem; }
    .rapport-couverture .info-value { font-size: 0.9rem; font-weight: 600; }
    .rapport-toc { background: #f8f9fc; border-left: 4px solid #0b1a5f; padding: 1.5rem 2rem; margin: 0; }
    .rapport-toc h3 { font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px; color: #0b1a5f; margin-bottom: 1rem; }
    .rapport-toc ol { margin: 0; padding-left: 1.2rem; font-size: 0.9rem; color: #444; }
    .rapport-toc li { padding: 0.2rem 0; }
    .rapport-body { padding: 2rem; }
    .rapport-section { margin-bottom: 2.5rem; }
    .rapport-section h2 { font-size: 1.15rem; font-weight: 700; color: #0b1a5f; border-bottom: 2px solid #0b1a5f; padding-bottom: 0.4rem; margin-bottom: 1rem; }
    .rapport-section h3 { font-size: 1rem; font-weight: 700; color: #1a3a8f; margin: 1.2rem 0 0.6rem; }
    .rapport-section p { font-size: 0.92rem; line-height: 1.75; color: #333; margin-bottom: 0.75rem; }
    .rapport-section ul, .rapport-section ol { font-size: 0.92rem; line-height: 1.75; color: #333; padding-left: 1.4rem; }
    .rapport-section li { margin-bottom: 0.3rem; }
    .rapport-fiche { width: 100%; border-collapse: collapse; font-size: 0.9rem; margin: 1rem 0; }
    .rapport-fiche td { padding: 0.6rem 0.9rem; border: 1px solid #dde3f0; }
    .rapport-fiche td:first-child { background: #eef2ff; font-weight: 600; color: #0b1a5f; width: 40%; }
    .rapport-skills-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 0.5rem; }
    .rapport-skills-col { background: #f8f9fc; border-radius: 8px; padding: 1rem 1.2rem; }
    .rapport-skills-col h4 { font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.5px; color: #0b1a5f; margin-bottom: 0.7rem; font-weight: 700; }
    .rapport-skills-col ul { margin: 0; padding-left: 1.1rem; font-size: 0.85rem; color: #444; }
    .rapport-divider { border: none; border-top: 1px solid #e0e6f0; margin: 2rem 0; }
    .rapport-footer-note { background: #f0f4ff; border-radius: 8px; padding: 1rem 1.2rem; font-size: 0.85rem; color: #0b1a5f; font-style: italic; text-align: center; margin-top: 1rem; }
    code { background: #eef2ff; padding: 0.1rem 0.3rem; border-radius: 3px; font-size: 0.85rem; color: #0b1a5f; }
    @media (max-width: 600px) {
      .rapport-couverture .info-grid { grid-template-columns: 1fr; }
      .rapport-skills-grid { grid-template-columns: 1fr; }
      .rapport-body { padding: 1.2rem; }
    }
  </style>
`;


const stage1Body = reportStyles + `
<div class="rapport-wrapper">
  <div class="rapport-couverture">
    <div class="badge-annee">BTS SIO — Option SLAM — 1ère année</div>
    <h1>RAPPORT DE STAGE</h1>
    <div class="sous-titre">Ny Aina RABARISOA</div>
    <div class="info-grid">
      <div class="info-item"><div class="info-label">Entreprise</div><div class="info-value">SISMANI</div></div>
      <div class="info-item"><div class="info-label">Durée</div><div class="info-value">6 semaines</div></div>
      <div class="info-item"><div class="info-label">Période</div><div class="info-value">19 mai – 27 juin 2025</div></div>
      <div class="info-item"><div class="info-label">Maître de stage</div><div class="info-value">M. Karim Ayoub</div></div>
    </div>
    <div style="opacity:0.7;font-size:0.85rem;">Année scolaire 2024 – 2025</div>
  </div>
  <div class="rapport-toc">
    <h3>Table des matières</h3>
    <ol>
      <li>Remerciements</li><li>Introduction</li><li>Présentation de l'entreprise</li>
      <li>Contexte du stage</li>
      <li>Missions réalisées<ol><li>Tests fonctionnels de l'application Wonkaa</li><li>Développement web et intégration</li><li>Rédaction de la documentation fonctionnelle</li></ol></li>
      <li>Compétences développées</li><li>Bilan personnel</li>
    </ol>
  </div>
  <div class="rapport-body">
    <div class="rapport-section">
      <h2>1. Remerciements</h2>
      <p>Je souhaite adresser mes sincères remerciements à <strong>M. Karim Ayoub</strong>, mon maître de stage, pour son accueil chaleureux, sa disponibilité et la qualité de son encadrement tout au long de ces six semaines. Sa bienveillance et ses explications m'ont permis de progresser rapidement et de m'intégrer efficacement à l'équipe.</p>
      <p>Je remercie également <strong>M. Xayarath Sipra</strong>, dirigeant de l'entreprise SISMANI, pour m'avoir accordé cette opportunité de stage et fait confiance dans la réalisation de missions concrètes. Grâce à cet environnement stimulant, j'ai pu découvrir de nombreux aspects du métier de développeur et confirmer mon attrait pour ce domaine.</p>
    </div>
    <hr class="rapport-divider">
    <div class="rapport-section">
      <h2>2. Introduction</h2>
      <p>Dans le cadre de ma première année de BTS SIO option SLAM, j'ai effectué un stage de six semaines au sein de l'entreprise SISMANI, du <strong>19 mai au 27 juin 2025</strong>.</p>
      <p>Ce stage avait pour objectif de me confronter à des situations professionnelles réelles et de mettre en pratique les connaissances acquises lors de ma première année de formation, notamment dans les domaines du développement web, de la conception d'interfaces et de la rédaction technique.</p>
      <p>J'ai eu l'opportunité de travailler sur l'application métier <strong>Wonkaa</strong> — un logiciel de gestion et de simulation de processus logistiques — en contribuant à son amélioration à travers des tests, du développement et de la documentation.</p>
    </div>
    <hr class="rapport-divider">
    <div class="rapport-section">
      <h2>3. Présentation de l'entreprise</h2>
      <p><strong>SISMANI</strong> est une entreprise spécialisée dans le développement de solutions logicielles innovantes pour le domaine de la supply chain. Son produit central est l'application <strong>Wonkaa</strong>, qui permet de créer et gérer des jeux de tests afin de simuler des processus logistiques.</p>
      <table class="rapport-fiche">
        <tr><td>Nom</td><td>SISMANI</td></tr>
        <tr><td>Secteur</td><td>Supply Chain / Logiciel</td></tr>
        <tr><td>Produit</td><td>Application Wonkaa</td></tr>
        <tr><td>Dirigeant</td><td>M. Xayarath Sipra</td></tr>
        <tr><td>Maître de stage</td><td>M. Karim Ayoub</td></tr>
      </table>
    </div>
    <hr class="rapport-divider">
    <div class="rapport-section">
      <h2>4. Contexte du stage</h2>
      <p>Le stage s'est déroulé sur <strong>6 semaines</strong>, du 19 mai 2025 au 27 juin 2025, dans les locaux de l'entreprise SISMANI. Mes missions portaient sur trois axes principaux :</p>
      <ul>
        <li>Les tests fonctionnels de l'application Wonkaa et la remontée des anomalies détectées</li>
        <li>Le développement et l'intégration de nouvelles pages dans l'application</li>
        <li>La rédaction d'une documentation fonctionnelle destinée aux utilisateurs</li>
      </ul>
    </div>
    <hr class="rapport-divider">
    <div class="rapport-section">
      <h2>5. Missions réalisées</h2>
      <h3>5.1 Tests fonctionnels de l'application Wonkaa</h3>
      <p>Ma première mission a consisté à utiliser l'application Wonkaa en tant qu'utilisatrice finale, afin d'identifier d'éventuels bugs, anomalies d'affichage ou comportements inattendus.</p>
      <p><strong>Périmètre des tests :</strong></p>
      <ul>
        <li>Page Users (User Management) : création, édition, filtres, gestion des colonnes</li>
        <li>Page Customers : affichage, tri, filtres, duplication des informations client</li>
        <li>Page Protocols : création, édition, suppression, navigation</li>
        <li>Page File Configuration : création de configurations, filtres</li>
        <li>Page Format d'échange : création, duplication, suppression</li>
      </ul>
      <p>J'ai conçu un <strong>tableau de suivi Excel</strong> répertoriant pour chaque cas de test : la page concernée, la fonctionnalité testée, le résultat obtenu, la description du bug éventuel et une proposition de correction.</p>
      <p><strong>Exemples d'anomalies relevées :</strong></p>
      <ul>
        <li>Bouton d'importation/exportation inactif sur la page File Configuration</li>
        <li>Redirection incorrecte depuis la page Format d'échange</li>
        <li>Duplication d'un client existant provoquant un conflit de nom non signalé</li>
        <li>Gestion des colonnes non fonctionnelle sur certaines pages</li>
      </ul>
      <h3>5.2 Développement web et intégration dans l'application</h3>
      <p>J'ai participé au développement de nouvelles pages au sein de l'application Wonkaa, avec les technologies <strong>HTML, CSS, JavaScript</strong> et les templates <strong>Twig (.html.twig)</strong>.</p>
      <p><strong>Page d'aide utilisateur :</strong> J'ai conçu et intégré une page d'aide contextuelle guidant l'utilisateur dans la prise en main des fonctionnalités principales.</p>
      <p><strong>Section Assistance :</strong> Pour chaque page de cette nouvelle section, j'ai :</p>
      <ul>
        <li>Rédigé le contenu fonctionnel en lien avec les cas d'usage identifiés lors des tests</li>
        <li>Structuré la mise en page en HTML et CSS</li>
        <li>Ajouté des interactions dynamiques (affichage/masquage de sections) en JavaScript</li>
        <li>Intégré les pages dans la structure Symfony (routing et template hérité de base.html.twig)</li>
      </ul>
      <h3>5.3 Rédaction de la documentation fonctionnelle</h3>
      <p>J'ai rédigé une documentation fonctionnelle complète de l'application Wonkaa décrivant chaque page : son rôle, son contenu, les interactions disponibles et les règles de gestion associées.</p>
      <p><strong>Contenu de la documentation :</strong></p>
      <ul>
        <li>Description de chaque page : User Management, Customers, Protocols, File Config, Format d'échange</li>
        <li>Présentation des boutons génériques et de la barre supérieure d'en-tête</li>
        <li>Description des fonctionnalités de filtrage, tri et gestion des colonnes</li>
        <li>Explication des formulaires de création et d'édition</li>
        <li>Identification des cas particuliers et des règles métier spécifiques</li>
      </ul>
    </div>
    <hr class="rapport-divider">
    <div class="rapport-section">
      <h2>6. Compétences développées</h2>
      <div class="rapport-skills-grid">
        <div class="rapport-skills-col">
          <h4>🛠 Compétences techniques</h4>
          <ul>
            <li>HTML / CSS (intégration web)</li>
            <li>JavaScript (interactions dynamiques)</li>
            <li>Templates Twig (Symfony)</li>
            <li>Tests fonctionnels logiciels</li>
            <li>Rédaction de documentation technique</li>
            <li>Excel (tableau de suivi qualité)</li>
            <li>Git (gestion de versions)</li>
          </ul>
        </div>
        <div class="rapport-skills-col">
          <h4>💼 Compétences professionnelles</h4>
          <ul>
            <li>Autonomie dans l'organisation du travail</li>
            <li>Rigueur et méthode dans les tests</li>
            <li>Communication au sein d'une équipe</li>
            <li>Respect des conventions de code</li>
            <li>Analyse critique d'une application</li>
            <li>Synthèse et rédaction professionnelle</li>
            <li>Adaptation aux outils de l'entreprise</li>
          </ul>
        </div>
      </div>
    </div>
    <hr class="rapport-divider">
    <div class="rapport-section">
      <h2>7. Bilan personnel</h2>
      <p>Ce premier stage a été une expérience extrêmement enrichissante, tant sur le plan technique qu'humain. Intégrer une équipe professionnelle pour la première fois m'a appris à m'adapter rapidement, à poser les bonnes questions et à prendre des initiatives dans la réalisation de mes missions.</p>
      <p>Sur le plan technique, j'ai consolidé mes connaissances en développement web et découvert la réalité d'un projet logiciel en production. Travailler sur une application réelle est très différent des exercices scolaires, et cette confrontation m'a beaucoup apporté.</p>
      <p>La mission de rédaction de documentation m'a par ailleurs révélé l'importance de communiquer clairement ses analyses. Ce stage a confirmé mon envie de poursuivre dans le développement d'applications métiers.</p>
    </div>
    <div class="rapport-footer-note">Ny Aina RABARISOA — BTS SIO SLAM 1ère année — Stage SISMANI, mai–juin 2025</div>
  </div>
</div>
`;


const stage2Body = reportStyles + `
<div class="rapport-wrapper">
  <div class="rapport-couverture">
    <div class="badge-annee">BTS SIO — Option SLAM — 2ème année</div>
    <h1>RAPPORT DE STAGE</h1>
    <div class="sous-titre">Ny Aina RABARISOA</div>
    <div class="info-grid">
      <div class="info-item"><div class="info-label">Entreprise</div><div class="info-value">SISMANI</div></div>
      <div class="info-item"><div class="info-label">Durée</div><div class="info-value">6 semaines</div></div>
      <div class="info-item"><div class="info-label">Période</div><div class="info-value">5 janv. – 13 fév. 2026</div></div>
      <div class="info-item"><div class="info-label">Maître de stage</div><div class="info-value">M. Karim Ayoub</div></div>
    </div>
    <div style="opacity:0.7;font-size:0.85rem;">Année scolaire 2025 – 2026</div>
  </div>
  <div class="rapport-toc">
    <h3>Table des matières</h3>
    <ol>
      <li>Remerciements</li><li>Introduction</li><li>Présentation de l'entreprise</li>
      <li>Contexte du stage</li>
      <li>Missions réalisées<ol><li>Développement Wonkaa (Symfony)</li><li>Internationalisation</li><li>Site vitrine WordPress (IzyServices)</li><li>Tests et correction de bugs</li></ol></li>
      <li>Compétences développées</li><li>Bilan personnel</li>
    </ol>
  </div>
  <div class="rapport-body">
    <div class="rapport-section">
      <h2>1. Remerciements</h2>
      <p>Je tiens à exprimer ma profonde gratitude envers <strong>M. Karim Ayoub</strong>, mon maître de stage, pour son accompagnement bienveillant, sa disponibilité et la qualité de ses conseils techniques. Sa pédagogie m'a permis de progresser rapidement et de gagner en autonomie sur des technologies que je découvrais.</p>
      <p>Je remercie également <strong>M. Xayarath Sipra</strong>, dirigeant de l'entreprise SISMANI, pour m'avoir accueillie au sein de son équipe et accordé sa confiance pour réaliser des missions à fort enjeu, notamment la livraison d'un site web professionnel à un client réel.</p>
    </div>
    <hr class="rapport-divider">
    <div class="rapport-section">
      <h2>2. Introduction</h2>
      <p>Dans le cadre de ma deuxième année de BTS SIO option SLAM, j'ai effectué mon stage de fin d'études au sein de l'entreprise SISMANI, où j'avais déjà réalisé mon premier stage l'année précédente.</p>
      <p>Ce retour dans la même structure m'a permis d'aborder des missions bien plus ambitieuses dès les premiers jours, notamment la contribution à une application métier complexe développée sous <strong>Symfony</strong> et la création complète d'un site web vitrine pour un client de l'entreprise.</p>
    </div>
    <hr class="rapport-divider">
    <div class="rapport-section">
      <h2>3. Présentation de l'entreprise</h2>
      <p><strong>SISMANI</strong> est une société spécialisée dans le développement de solutions logicielles pour le domaine de la supply chain, notamment dans la gestion d'entrepôts (WMS). Son produit phare est l'application <strong>Wonkaa</strong>, permettant de simuler des processus logistiques et de configurer des formats d'échanges de fichiers (EDI, HL7, M50…).</p>
      <table class="rapport-fiche">
        <tr><td>Nom</td><td>SISMANI</td></tr>
        <tr><td>Secteur</td><td>Supply Chain / Développement logiciel</td></tr>
        <tr><td>Produit principal</td><td>Application Wonkaa</td></tr>
        <tr><td>Dirigeant</td><td>M. Xayarath Sipra</td></tr>
        <tr><td>Encadrant technique</td><td>M. Karim Ayoub</td></tr>
      </table>
    </div>
    <hr class="rapport-divider">
    <div class="rapport-section">
      <h2>4. Contexte du stage</h2>
      <p>Le stage s'est déroulé sur <strong>6 semaines</strong>, du 5 janvier 2026 au 13 février 2026. Mes missions couvraient quatre axes principaux :</p>
      <ul>
        <li>Le développement et l'amélioration de l'application métier Wonkaa sous Symfony (PHP)</li>
        <li>La création complète d'un site web vitrine sous WordPress pour un client externe</li>
        <li>L'internationalisation complète de l'application Wonkaa (français / anglais)</li>
        <li>La réalisation de tests fonctionnels et la correction de bugs</li>
      </ul>
    </div>
    <hr class="rapport-divider">
    <div class="rapport-section">
      <h2>5. Missions réalisées</h2>
      <h3>5.1 Développement de l'application Wonkaa (Symfony)</h3>
      <p>L'application Wonkaa est développée avec le framework <strong>Symfony</strong>, basé sur une architecture MVC. Mon rôle consistait à implémenter de nouvelles fonctionnalités et à corriger des comportements incorrects.</p>
      <p><strong>Architecture technique :</strong></p>
      <ul>
        <li><strong>Entities</strong> : représentation des tables en base de données (ORM Doctrine)</li>
        <li><strong>Repositories</strong> : gestion des requêtes SQL via QueryBuilder</li>
        <li><strong>Controllers</strong> : traitement des requêtes HTTP (GET/POST)</li>
        <li><strong>Templates Twig (.html.twig)</strong> : affichage dynamique des données</li>
      </ul>
      <p><strong>Implémentation des filtres et du tri :</strong> Mise en place d'un système de filtres dynamiques sur plusieurs pages (Messages reçus, Clients, Historique, Protocoles, Configuration de fichiers). Le filtre repose sur une modale HTML avec champs input, select et checkbox. Les paramètres sont traités dans le Controller et transmis au Repository via QueryBuilder.</p>
      <p>J'ai également implémenté la <strong>gestion des colonnes</strong> : l'utilisateur peut choisir les colonnes à afficher, ses préférences étant envoyées au contrôleur pour adapter dynamiquement le rendu.</p>
      <p><strong>Difficultés rencontrées :</strong></p>
      <ul>
        <li>Erreur Symfony : variable <code>messageManagementUserIds</code> non reconnue → débogage et résolution du conflit Git</li>
        <li>Comportement incorrect du filtre vide : correction pour ne renvoyer aucun résultat si le formulaire est vide</li>
        <li>Gestion des colonnes non activée sur certaines pages → activation et uniformisation page par page</li>
      </ul>
      <h3>5.2 Internationalisation de l'application</h3>
      <p>J'ai réalisé la <strong>traduction complète</strong> de l'application Wonkaa de l'anglais vers le français via le système de traduction YAML de Symfony.</p>
      <p><strong>Méthode utilisée :</strong></p>
      <ul>
        <li>Identification de toutes les chaînes en anglais dans les templates Twig et contrôleurs</li>
        <li>Remplacement par le filtre <code>|trans</code> dans les fichiers .html.twig</li>
        <li>Création et alimentation du fichier <code>messages.fr.yaml</code></li>
        <li>Vérification complète page par page : Users, Customers, Protocols, File Config, Format d'échange…</li>
      </ul>
      <h3>5.3 Création du site vitrine WordPress (IzyServices)</h3>
      <p>J'ai été chargée de créer un site web vitrine complet pour <strong>IzyServices</strong>, client externe de SISMANI spécialisé dans l'expertise IT/WMS.</p>
      <p><strong>Réalisation technique :</strong></p>
      <ul>
        <li>Création d'un logo original pour IzyServices (identité visuelle)</li>
        <li>Sélection et personnalisation d'un template kit sur Themeforest</li>
        <li>Installation et configuration de WordPress avec les plugins nécessaires</li>
        <li>Création des pages : Accueil, À propos, Contact, Nos services, Cas clients, Mentions légales…</li>
        <li>Installation de TablePress (tableaux de tarifs) et Essential Addons (filtrage galerie)</li>
        <li>Ajout d'un cercle interactif pour la présentation des objectifs</li>
        <li>Optimisation SEO et responsivité sur tous les écrans</li>
        <li>Création d'une fiche Google Business pour IzyServices</li>
      </ul>
      <p><strong>Gestion de projet :</strong> Relation client réelle avec réunions, collecte de feedback, suivi via <strong>Redmine</strong>, respect des délais et validation finale.</p>
      <h3>5.4 Tests et correction de bugs</h3>
      <p><strong>Tests réalisés :</strong></p>
      <ul>
        <li>Test de création de formats d'échange via import CSV et conversion vers M50</li>
        <li>Test de performance : génération d'un fichier avec 20 000 commandes</li>
        <li>Test de duplication : 1 000 fichiers générés</li>
        <li>Tests de création et suppression sur les pages Format d'échange, File Config et Protocol</li>
        <li>Configuration et vérification de variables pour le format HL7</li>
      </ul>
      <p><strong>Bugs identifiés :</strong></p>
      <ul>
        <li>Page Création Format d'échange : erreur lors de la création</li>
        <li>Page File Configuration : impossibilité de créer une configuration protocol</li>
        <li>Page Protocol : erreur Symfony lors de la suppression</li>
        <li>Page Format d'échange dupliqué : erreur Symfony lors d'une duplication</li>
        <li>Page Format d'échange : suppression possible alors qu'elle devrait être bloquée</li>
      </ul>
    </div>
    <hr class="rapport-divider">
    <div class="rapport-section">
      <h2>6. Compétences développées</h2>
      <div class="rapport-skills-grid">
        <div class="rapport-skills-col">
          <h4>🛠 Compétences techniques</h4>
          <ul>
            <li>Symfony (MVC, QueryBuilder, Twig)</li>
            <li>PHP orienté objet</li>
            <li>HTML / CSS (templates Twig)</li>
            <li>JavaScript (dynamisme des modales)</li>
            <li>WordPress (thèmes, plugins, SEO)</li>
            <li>YAML (traductions Symfony)</li>
            <li>Tests logiciels fonctionnels</li>
            <li>Gestion des conflits Git</li>
          </ul>
        </div>
        <div class="rapport-skills-col">
          <h4>💼 Compétences professionnelles</h4>
          <ul>
            <li>Autonomie dans la réalisation</li>
            <li>Communication avec un client réel</li>
            <li>Gestion de projet (Redmine)</li>
            <li>Respect des délais</li>
            <li>Travail en équipe</li>
            <li>Présentation commerciale (PowerPoint)</li>
            <li>Adaptation aux retours client</li>
          </ul>
        </div>
      </div>
    </div>
    <hr class="rapport-divider">
    <div class="rapport-section">
      <h2>7. Bilan personnel</h2>
      <p>Ce second stage au sein de SISMANI a représenté une étape charnière dans ma formation. Intervenir sur des projets à forte responsabilité — notamment la livraison d'un site web à un client réel — m'a permis de dépasser le cadre scolaire et de vivre pleinement les exigences du monde professionnel.</p>
      <p>Sur le plan technique, j'ai considérablement progressé dans ma maîtrise de Symfony (QueryBuilder, gestion des formulaires, système de traduction) et découvert WordPress en profondeur. Sur le plan professionnel, j'ai appris à gérer une relation client de bout en bout et à communiquer efficacement via des outils de suivi de projet comme Redmine.</p>
      <p>Ce stage a renforcé ma vocation pour le développement d'applications métiers et confirmé mon souhait de poursuivre vers des études supérieures en informatique.</p>
    </div>
    <div class="rapport-footer-note">Ny Aina RABARISOA — BTS SIO SLAM 2ème année — Stage SISMANI, janvier–février 2026</div>
  </div>
</div>
`;


//PARCOURS PRO - AFFICHAGE DES RAPPORTS DE STAGE COMPLETS
const modal = new bootstrap.Modal(document.getElementById("stageModal"));

const data = {
  stageBTS1: {
    title: "Rapport de Stage — 1ère année BTS SIO SLAM — SISMANI 2025",
    body: stage1Body,
  },
  stageBTS2: {
    title: "Rapport de Stage — 2ème année BTS SIO SLAM — SISMANI 2026",
    body: stage2Body,
  },
};

document.querySelectorAll("button[id^='stage']").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.getElementById("modalTitle").innerHTML = data[btn.id].title;
    document.getElementById("modalBody").innerHTML = data[btn.id].body;
    modal.show();
  });
});

// FLUX RSS
async function loadRSSFeed() {
  const feedUrl = "https://www.cert.ssi.gouv.fr/feed/";
  const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(feedUrl)}`;
  const container = document.getElementById("rss-feed");
  try {
    const res = await fetch(proxyUrl);
    const text = await res.text();
    const parser = new DOMParser();
    const xml = parser.parseFromString(text, "text/xml");
    const items = Array.from(xml.querySelectorAll("item")).slice(0, 6);
    if (items.length === 0) { container.innerHTML = `<p class="text-muted">Aucun article disponible pour le moment.</p>`; return; }
    const cards = items.map(item => {
      const title = item.querySelector("title")?.textContent || "Sans titre";
      const link  = item.querySelector("link")?.textContent || "#";
      const pubDate = item.querySelector("pubDate")?.textContent || "";
      const date = pubDate ? new Date(pubDate).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" }) : "";
      let badgeColor = "#0b1a5f"; let badgeLabel = "Info";
      const titre = title.toLowerCase();
      if (titre.includes("vulnérabilité") || titre.includes("critique")) { badgeColor = "#c0392b"; badgeLabel = "Vulnérabilité"; }
      else if (titre.includes("alerte")) { badgeColor = "#e67e22"; badgeLabel = "Alerte"; }
      else if (titre.includes("avis")) { badgeColor = "#2980b9"; badgeLabel = "Avis"; }
      return `<div class="col-md-6 col-lg-4"><a href="${link}" target="_blank" class="text-decoration-none"><div class="rss-card h-100"><div class="d-flex justify-content-between align-items-start mb-2"><span class="badge" style="background:${badgeColor};font-size:0.72rem;">${badgeLabel}</span><span class="rss-date">${date}</span></div><p class="rss-title">${title}</p><span class="rss-link">Lire l'article <i class="bi bi-arrow-right"></i></span></div></a></div>`;
    }).join("");
    container.innerHTML = `<div class="row g-3">${cards}</div>`;
  } catch (err) {
    console.error("Erreur RSS :", err);
    container.innerHTML = `<p class="text-muted"><i class="bi bi-exclamation-triangle"></i> Impossible de charger les articles. Consultez directement <a href="https://www.cert.ssi.gouv.fr" target="_blank">cert.ssi.gouv.fr</a>.</p>`;
  }
}
loadRSSFeed();
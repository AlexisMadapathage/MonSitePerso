// Gère les clics
document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Détecte le scroll
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);

// Appel initial pour éléments déjà visibles
revealOnScroll();

// Sélectionne toutes les cartes projet
const projectCards = document.querySelectorAll('.project');

projectCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.classList.add('hovered');
  });

  card.addEventListener('mouseleave', () => {
    card.classList.remove('hovered');
  });
});

// Chargement des projets
const projectContainer = document.getElementById("project-container");

projects.forEach(project => {
  const article = document.createElement("article");
  article.classList.add("project");

  article.innerHTML = `
    <div class="project-content">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <p class="used-tools">Outils utilisés : ${project.tools}</p>
      <a href="${project.github}" target="_blank" class="project-link">Voir le code</a>
    </div>
    <div class="project-image-container">
      <img src="${project.image}" alt="${project.title} Screenshot">
    </div>
  `;

  projectContainer.appendChild(article);
});

// Gestion de l'envoi du formulaire avec EmailJS
document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Empêche le rechargement de la page

  // Envoi du formulaire via EmailJS
  emailjs.sendForm(
    "service_ge54haf",   // Mon SERVICE_ID d'EmailJS
    "template_d70w9p9",  // Mon TEMPLATE_ID d'EmailJS
    this                // Le formulaire HTML lui-même
  )
  .then(function () {
    alert("Message envoyé avec succès !");
    // Optionnel : réinitialiser le formulaire
    document.getElementById("contact-form").reset();
  }, function (error) {
    alert("Une erreur est survenue : " + JSON.stringify(error));
  });
});
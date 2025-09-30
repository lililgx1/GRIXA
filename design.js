// Sélection du conteneur
const explosion = document.getElementById("explosion");
const content = document.getElementById("content");

// Créer des particules
for (let i = 0; i < 60; i++) {
  const particle = document.createElement("div");
  particle.classList.add("particle");

  // Position aléatoire de l'explosion
  const angle = Math.random() * 2 * Math.PI;
  const distance = Math.random() * 300 + 50;

  const x = Math.cos(angle) * distance + "px";
  const y = Math.sin(angle) * distance + "px";

  particle.style.setProperty("--x", x);
  particle.style.setProperty("--y", y);

  explosion.appendChild(particle);
}

// Retirer l’explosion après l’animation
setTimeout(() => {
  explosion.style.display = "none";
  content.classList.add("show");
}, 1500);

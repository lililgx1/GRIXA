const carousel = document.querySelector('.carousel');
const container = document.querySelector('.carousel-container');
let speed = 0.5; // pixels par frame
let paused = false;

// Dupliquer les images pour l'effet infini
carousel.innerHTML += carousel.innerHTML;
const imgs = Array.from(carousel.children);

function updateScale() {
  const containerCenter = container.getBoundingClientRect().left + container.offsetWidth / 2;

  imgs.forEach(img => {
    const imgCenter = img.getBoundingClientRect().left + img.offsetWidth / 2;
    const offset = Math.abs(containerCenter - imgCenter) / container.offsetWidth; // plus l'image est loin, plus le scale diminue
    const scale = 1 - Math.min(offset, 0.5); // scale entre 1 et 0.5
    img.style.transform = `scale(${scale})`;
  });
}


let offsetX = 0; // déplacement cumulé

function animate() {
  if (!paused) {
    offsetX += speed; // ajouter la vitesse à chaque frame
    const firstImg = carousel.children[0];

    carousel.style.transform = `translateX(-${offsetX}px)`;

    if (offsetX >= firstImg.offsetWidth + 20) { // si la première image a complètement quitté
      carousel.appendChild(firstImg);        // déplacer à la fin
      offsetX -= firstImg.offsetWidth + 20;  // réduire offsetX pour continuer le défilement
    }

    updateScale();
  }
  requestAnimationFrame(animate);
}

animate();

const video = document.querySelector('.background-video');
video.playbackRate = 0.5; // joue la vidéo à moitié vitesse pour effet ralenti

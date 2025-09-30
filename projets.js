// script.js
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.buy-btn');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      alert('Produit ajouté au panier !');
    });
  });
});

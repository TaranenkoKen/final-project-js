import { initHomePage } from './js/home.js';
import { initFavoritesPage } from './js/favorites.js';
import { subscribe } from './js/exercises.js';
import { notify } from './js/notify.js';
import './js/nav.js';

function setActiveNav() {
  const path = window.location.pathname;
  const navHome = document.getElementById('nav-home');
  const navFavorites = document.getElementById('nav-favorites');

  if (path.includes('favorites')) {
    navFavorites?.classList.add('active');
  } else {
    navHome?.classList.add('active');
  }
}

function setupSubscription() {
  const subForm = document.getElementById('subscription-form');
  if (subForm) {
    subForm.addEventListener('submit', async e => {
      e.preventDefault();
      const email = subForm.email.value;
      try {
        await subscribe(email);
        notify.success('Successfully subscribed!');
        subForm.reset();
      } catch (err) {}
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setActiveNav();
  setupSubscription();

  // Initialize page-specific functionality based on elements present
  if (document.getElementById('exercises-container')) {
    initHomePage();
  }

  if (document.getElementById('favorites-container')) {
    initFavoritesPage();
  }
});

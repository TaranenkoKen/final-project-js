export const openModal = modalId => {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.showModal();

    if (modal.dataset.backdropListener !== 'true') {
      modal.addEventListener('click', e => {
        if (e.target === modal) {
          modal.close();
        }
      });
      modal.dataset.backdropListener = 'true';
    }
  }
};

export const closeModal = modalId => {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.close();
  }
};

export const renderExerciseModal = exercise => {
  if (!exercise) return;

  const gifElement = document.getElementById('popup-exercise-gif');
  if (gifElement) {
    gifElement.src = exercise.gifUrl || '';
    gifElement.alt = exercise.name || 'Exercise';
  }

  const titleElement = document.getElementById('popup-exercise-title');
  if (titleElement) {
    titleElement.textContent = exercise.name || 'Exercise';
  }

  const ratingElement = document.getElementById('popup-exercise-rating');
  if (ratingElement) {
    const rating = exercise.rating || 0;
    const fullStars = Math.floor(rating);

    ratingElement.innerHTML = `
      <span class="rating-value">${rating.toFixed(1)}</span>
      <div class="rating-stars">
        ${Array.from({ length: 5 }, (_, i) => {
          const filled = i < fullStars ? 'filled' : '';
          return `<svg class="star ${filled}" width="18" height="18" aria-hidden="true">
            <use href="#icon-star"></use>
          </svg>`;
        }).join('')}
      </div>
    `;
  }

  const targetElement = document.getElementById('popup-target');
  if (targetElement) targetElement.textContent = exercise.target || 'N/A';

  const bodyPartElement = document.getElementById('popup-bodypart');
  if (bodyPartElement) bodyPartElement.textContent = exercise.bodyPart || 'N/A';

  const equipmentElement = document.getElementById('popup-equipment');
  if (equipmentElement)
    equipmentElement.textContent = exercise.equipment || 'N/A';

  const popularElement = document.getElementById('popup-popular');
  if (popularElement) popularElement.textContent = exercise.popularity || '0';

  const caloriesElement = document.getElementById('popup-calories');
  if (caloriesElement) {
    caloriesElement.textContent = `${exercise.burnedCalories || 0}/${exercise.time || 0} min`;
  }

  const descriptionElement = document.getElementById('popup-description');
  if (descriptionElement) {
    descriptionElement.textContent =
      exercise.description || 'No description available.';
  }

  const modal = document.getElementById('exercise-popup');
  if (modal) {
    modal.dataset.exerciseId = exercise._id;
  }
};

// Show rating modal
export const showRatingModal = () => {
  closeModal('exercise-popup');
  const ratingModal = document.getElementById('rating-popup');

  if (ratingModal && ratingModal.dataset.closeListener !== 'true') {
    ratingModal.addEventListener('close', resetRatingForm);
    ratingModal.dataset.closeListener = 'true';
  }

  openModal('rating-popup');
  resetRatingForm();
  initRatingStars();
};

export const hideRatingModal = () => {
  closeModal('rating-popup');
};

const resetRatingForm = () => {
  const ratingForm = document.getElementById('rating-popup');
  const ratingValue = document.getElementById('rating-display-value');

  if (ratingForm) ratingForm.reset();
  if (ratingValue) ratingValue.textContent = '0.0';
};

export const initRatingStars = () => {
  const starsContainer = document.getElementById('rating-stars');
  const ratingValue = document.getElementById('rating-display-value');

  if (!starsContainer) return;

  if (starsContainer.dataset.listenerAttached === 'true') return;
  starsContainer.dataset.listenerAttached = 'true';

  starsContainer.addEventListener('change', e => {
    if (e.target.type === 'radio') {
      const selectedRating = parseFloat(e.target.value);
      if (ratingValue) {
        ratingValue.textContent = selectedRating.toFixed(1);
      }
    }
  });
};

export const getCurrentRating = () => {
  const checkedRadio = document.querySelector(
    '#rating-stars input[name="rating"]:checked'
  );
  return checkedRadio ? parseFloat(checkedRadio.value) : 0;
};

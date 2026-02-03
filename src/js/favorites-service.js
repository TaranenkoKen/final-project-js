const STORAGE_KEYS = {
  FAVORITES: 'favoriteExercises',
  QUOTE: 'quote-of-the-day',
};

export function getFavoriteIds() {
  try {
    const favorites = localStorage.getItem(STORAGE_KEYS.FAVORITES);
    return favorites ? JSON.parse(favorites) : [];
  } catch (err) {
    console.error('Failed to get favorites:', err);
    return [];
  }
}

export function addFavorite(exerciseId) {
  try {
    const favorites = getFavoriteIds();

    if (favorites.includes(exerciseId)) {
      return false;
    }

    favorites.push(exerciseId);
    localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favorites));
    return true;
  } catch (err) {
    console.error('Failed to add favorite:', err);
    return false;
  }
}

export function removeFavorite(exerciseId) {
  try {
    const favorites = getFavoriteIds();
    const filtered = favorites.filter(id => id !== exerciseId);
    localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(filtered));
    return true;
  } catch (err) {
    console.error('Failed to remove favorite:', err);
    return false;
  }
}

export function isFavorite(exerciseId) {
  const favorites = getFavoriteIds();
  return favorites.includes(exerciseId);
}

export function toggleFavorite(exerciseId) {
  if (isFavorite(exerciseId)) {
    return removeFavorite(exerciseId);
  } else {
    return addFavorite(exerciseId);
  }
}

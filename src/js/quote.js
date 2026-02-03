const STORAGE_KEYS = {
  FAVORITES: 'favoriteExercises',
  QUOTE: 'quote-of-the-day',
};

function getTodayDate() {
  return new Date().toISOString().split('T')[0];
}

function getCachedQuote() {
  try {
    const cached = localStorage.getItem(STORAGE_KEYS.QUOTE);
    if (!cached) return null;

    const { quote, author, date } = JSON.parse(cached);

    if (date === getTodayDate()) {
      return { quote, author };
    }

    localStorage.removeItem(STORAGE_KEYS.QUOTE);
    return null;
  } catch (error) {
    console.error('Error reading cached quote:', error);
    return null;
  }
}

function cacheQuote(quote, author) {
  try {
    localStorage.setItem(
      STORAGE_KEYS.QUOTE,
      JSON.stringify({
        quote,
        author,
        date: getTodayDate(),
      })
    );
  } catch (error) {
    console.error('Error caching quote:', error);
  }
}

export async function initQuote() {
  try {
    let quoteData = getCachedQuote();

    if (!quoteData) {
      quoteData = await getQuote();
      cacheQuote(quoteData.quote, quoteData.author);
    }

    renderQuote(quoteData);
  } catch (err) {
    console.error('Failed to initialize quote:', err);
  }
}

import { loadTemplate } from './dom.js';

export const renderPagination = async (
  currentPage,
  totalPages,
  containerId = 'pager-container'
) => {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (totalPages <= 1) {
    container.innerHTML = '';
    return;
  }

  if (!container.querySelector('.pager-list')) {
    const template = await loadTemplate('pagination');
    container.innerHTML = template;
  }

  const firstLink = container.querySelector('.pager-first');
  const prevLink = container.querySelector('.pager-prev');
  const nextLink = container.querySelector('.pager-next');
  const lastLink = container.querySelector('.pager-last');
  const pagesContainer = container.querySelector('.pager-numbers');

  updateLinkState(firstLink, currentPage === 1, 1);
  updateLinkState(prevLink, currentPage === 1, currentPage - 1);
  updateLinkState(nextLink, currentPage === totalPages, currentPage + 1);
  updateLinkState(lastLink, currentPage === totalPages, totalPages);

  const pages = generatePageNumbers(currentPage, totalPages);

  const pagesHtml = pages
    .map(page => {
      if (page === '...') {
        return `<li aria-hidden="true"><span class="pager-dots">...</span></li>`;
      }
      const isActive = page === currentPage;
      if (isActive) {
        return `<li><a href="#" class="pagination-number current" aria-current="page">${page}</a></li>`;
      }
      return `<li><a href="#" class="pagination-number" data-page="${page}">${page}</a></li>`;
    })
    .join('');

  pagesContainer.innerHTML = pagesHtml;
};

function updateLinkState(link, isDisabled, page) {
  if (isDisabled) {
    link.classList.add('disabled');
    link.setAttribute('aria-disabled', 'true');
    link.removeAttribute('data-page');
  } else {
    link.classList.remove('disabled');
    link.removeAttribute('aria-disabled');
    link.dataset.page = page;
  }
}

function generatePageNumbers(currentPage, totalPages) {
  const pages = [];

  // If 3 or fewer pages, show all
  if (totalPages <= 3) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  // Determine which 3 numbers to show
  let start, end;

  if (currentPage === 1) {
    // Current is first: show 1, 2, 3
    start = 1;
    end = 3;
  } else if (currentPage === totalPages) {
    // Current is last: show (last-2), (last-1), last
    start = totalPages - 2;
    end = totalPages;
  } else {
    // Current in middle: show prev, current, next
    start = currentPage - 1;
    end = currentPage + 1;
  }

  // Add ellipsis before if needed
  if (start > 1) {
    pages.push('...');
  }

  // Add the 3 page numbers
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  // Add ellipsis after if needed
  if (end < totalPages) {
    pages.push('...');
  }

  return pages;
}

export function setupPagination(onPageChange, containerId = 'pager-container') {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Check if already has listener to prevent duplicates
  if (container.dataset.listenerAttached === 'true') return;
  container.dataset.listenerAttached = 'true';

  container.addEventListener('click', e => {
    const link = e.target.closest('.pager-number, .pager-btn');

    if (!link) return;
    if (
      link.classList.contains('disabled') ||
      link.classList.contains('current')
    )
      return;

    e.preventDefault();

    const newPage = Number(link.dataset.page);
    if (newPage && !isNaN(newPage)) {
      onPageChange(newPage);
    }
  });
}

export function scrollToTop(targetId = 'exercises-header') {
  const target = document.getElementById(targetId);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  } else {
    document
      .querySelector('.exercises-section')
      ?.scrollIntoView({ behavior: 'smooth' });
  }
}

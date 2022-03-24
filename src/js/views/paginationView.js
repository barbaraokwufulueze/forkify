import View from './view';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const gotoPage = +btn.dataset.goto; // Converting to number
      handler(gotoPage);
    });
  }

  _generateMarkupBtn(nextPage) {
    return `
    <button data-goto="${nextPage}" class="btn--inline pagination__btn--next">
      <span>Page ${nextPage}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button>
  `;
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    let nextPage;

    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      nextPage = curPage + 1;
      return this._generateMarkupBtn(nextPage);
    }

    // Last page
    if (curPage === numPages && numPages > 1) {
      nextPage = curPage - 1;
      return this._generateMarkupBtn(nextPage);
    }
    // Other pages
    if (curPage < numPages) {
      nextPage = curPage - 1;
      let prev = this._generateMarkupBtn(nextPage);
      nextPage = curPage + 1;
      let next = this._generateMarkupBtn(nextPage);
      return next + prev;
    }
    // Page 1, and there are no other pages
    return '';
  }
}

export default new PaginationView();

import View from './View.js';
import icons from 'url:../../img/icons.svg';

class ShoppingView extends View {
  _parentElement = document.querySelector('.shopping__list');
  _btnDeleteItem = document.querySelector('.item');
  _errorMessage = ' No ingredients yet. Add ingredients to shopping list :)';
  _message = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  addHandlerDeleteList(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.delete__btn');

      if (!btn) return;
      else handler();
    });
  }

  addHandlerDeleteItem(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.item__icon');

      if (!btn) return;
      else handler(btn.parentElement.textContent.trim());
    });
  }

  _generateMarkup() {
    return `
    ${this._data.map(ing => this._generateIngredientsMarkup(ing)).join('')}
    <div class="delete">
      <button class="btn delete__btn">
        <span>&times; Empty list</span>
      </button>
    </div>
    `;
  }

  _generateIngredientsMarkup(ing) {
    return `
    <li class="item">
      <div class="item__link">
        <div class="item__info">
          <span class="recipe__info-data"
            >${ing}</span
          >
          <svg class="item__icon">
            <use href="${icons}#icon-cross"></use>
          </svg>
        </div>
      </div>
    </li>
                  
  `;
  }
}

export default new ShoppingView();

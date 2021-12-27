import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { todoooSharedStyles } from '../../shared-styles/todoooSharedStyles.js';
import { todoooAddButtonStyles } from './todooo-add-button.styles.js';
import store from '../../store/store.js';
import { showNewListForm } from '../../store/slices/lists.slice.js';

export class TodoooAddButton extends LitElement {
  @property({ type: String }) view: String = 'list';

  static styles = [todoooSharedStyles, todoooAddButtonStyles];

  render() {
    return html`
      <button class="add-button__button" @click="${this._onButtonClick}">
        +
      </button>
    `;
  }

  _onButtonClick() {
    this.view === 'list' ? this._showAddNewList() : this._showAddNewTodo();
  }

  _showAddNewList() {
    store.dispatch(showNewListForm());
  }

  _showAddNewTodo() {
    console.log('ADD NEW TODO');
  }
}

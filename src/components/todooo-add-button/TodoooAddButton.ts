import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { todoooSharedStyles } from '../../shared-styles/todoooSharedStyles.js';
import { todoooAddButtonStyles } from './todooo-add-button.styles.js';
import store from '../../store/store.js';
import {
  showNewListForm,
  showNewTodoForm,
} from '../../store/slices/lists.slice.js';

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
    switch (this.view) {
      case 'main':
        this._showAddNewList();
        break;
      case 'list':
        this._showAddNewTodo();
        break;
      default:
        break;
    }
  }

  _showAddNewList() {
    store.dispatch(showNewListForm());
  }

  _showAddNewTodo() {
    store.dispatch(showNewTodoForm());
  }
}

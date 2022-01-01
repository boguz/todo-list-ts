import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import store from '../../store/store.js';
import { todoooSharedStyles } from '../../shared-styles/todoooSharedStyles.js';
import { todoooTodoStyles } from './todooo-todo.styles.js';
import { startListsLoading } from '../../store/slices/lists.slice.js';
import { firestoreDeleteTodo } from '../../firestore/firestoreDeleteTodo.js';
import { firestoreToggleTodo } from '../../firestore/firestoreToggleTodo.js';

export class TodoooTodo extends LitElement {
  @property({ type: Object }) todo = {
    name: null,
    checked: false,
    id: null,
  };

  static styles = [...todoooSharedStyles, todoooTodoStyles];

  constructor() {
    super();

    this._confirmTodoDelete = this._confirmTodoDelete.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', this._onClickEvent);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('click', this._onClickEvent);
  }

  /**
   * Toggle a todo checked state on click
   */
  _onClickEvent() {
    firestoreToggleTodo(this.todo.id);
  }

  /**
   * Show confirmation dialog when delete button is clicked
   */
  _onDeleteButtonClick() {
    this.dispatchEvent(
      new CustomEvent('todooo-dialog-show', {
        bubbles: true,
        composed: true,
        detail: {
          question: `Do you really want to delete the "${this.todo.name}" todo?`,
          confirmCallback: this._confirmTodoDelete,
        },
      })
    );
  }

  /**
   * After delete confirmation:
   *  - delete todo from list
   *  - hide confirmation dialog
   */
  async _confirmTodoDelete() {
    store.dispatch(startListsLoading());
    await firestoreDeleteTodo(this.todo.id);
    this.dispatchEvent(
      new CustomEvent('todooo-dialog-hide', {
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <input
        id="checkbox-${this.todo.id}"
        type="checkbox"
        class="checkbox"
        ?checked="${this.todo.checked}"
      />
      <p class="name">${this.todo.name}</p>
      <button class="delete" @click="${this._onDeleteButtonClick}"></button>
    `;
  }
}

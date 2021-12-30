import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { todoooSharedStyles } from '../../shared-styles/todoooSharedStyles.js';
import { todoooTodoStyles } from './todooo-todo.styles.js';
import { firestoreDeleteTodo } from '../../firestore/firestoreDeleteTodo.js';
import { firestoreToggleTodo } from '../../firestore/firestoreToggleTodo.js';
import store from '../../store/store.js';
import { startListsLoading } from '../../store/slices/lists.slice.js';

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

  _onClickEvent() {
    firestoreToggleTodo(this.todo.id);
  }

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

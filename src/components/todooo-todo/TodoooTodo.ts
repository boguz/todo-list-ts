import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { todoooSharedStyles } from '../../shared-styles/todoooSharedStyles.js';
import { todoooTodoStyles } from './todooo-todo.styles.js';
import { firestoreDeleteTodo } from '../../firestore/firestoreDeleteTodo.js';
import { firestoreToggleTodo } from '../../firestore/firestoreToggleTodo.js';

export class TodoooTodo extends LitElement {
  @property({ type: Object }) todo = {
    name: null,
    checked: false,
    id: null,
  };

  static styles = [...todoooSharedStyles, todoooTodoStyles];

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

  _onDeleteButtonClick(event: MouseEvent) {
    event.stopPropagation();
    if (
      window.confirm(`Do you really want to delete todo "${this.todo.name}"?`)
    ) {
      firestoreDeleteTodo(this.todo.id);
    }
  }
}

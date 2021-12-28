import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { todoooSharedStyles } from '../../shared-styles/todoooSharedStyles.js';
import { todoooTodoStyles } from './todooo-todo.styles.js';

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
    console.log('CLICK');
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
    `;
  }
}

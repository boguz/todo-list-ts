import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import '../todooo-todo/todooo-todo.js';
import { todoooSharedStyles } from '../../shared-styles/todoooSharedStyles.js';
import { todoooListStyles } from './todooo-list.styles.js';
import { TodoInterface } from '../../types/interfaces.js';

export class TodoooList extends LitElement {
  @property({ type: Boolean, reflect: true }) collapsed = false;

  @property({ type: Object }) selectedList = {
    id: '',
    todos: [],
    name: '',
  };

  static styles = [...todoooSharedStyles, todoooListStyles];

  /**
   * Get the correct todos
   *  - reverse to show the new todos at the bottom
   *  - show the checked todos after the unchecked todos
   */
  get sortedTodos() {
    const todos = [...this.selectedList.todos];
    const sortedTodos = todos
      .reverse()
      .reduce(
        (acc: TodoInterface[], todo: TodoInterface) =>
          todo.checked ? [...acc, todo] : [todo, ...acc],
        []
      );
    return sortedTodos;
  }

  render() {
    return html`
      <div
        class="header"
        @click="${this._toggleCollapseState}"
        @keydown="${this._onHeaderKeyDown}"
      >
        <h2 class="header__title">${this.selectedList.name}</h2>
        <span class="header__chevron"></span>
      </div>
      <div class="todos">
        ${this.sortedTodos.map(
          (todo: TodoInterface) =>
            html`<todooo-todo
              .todo="${todo}"
              ?checked="${todo.checked}"
            ></todooo-todo>`
        )}
      </div>
    `;
  }

  /**
   * Toggle list collapse state (show / hide list's content)
   */
  _toggleCollapseState() {
    this.collapsed = !this.collapsed;
  }

  /**
   * Toggle the list collapse state also on Enter Key press
   * @param event
   */
  _onHeaderKeyDown(event: KeyboardEvent) {
    if (event.code === 'Enter') {
      this._toggleCollapseState();
    }
  }
}

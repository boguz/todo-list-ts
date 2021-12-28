import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';

import { todoooSharedStyles } from '../../shared-styles/todoooSharedStyles.js';
import { todoooListStyles } from './todooo-list.styles.js';

import '../todooo-todo/todooo-todo.js';

export class TodoooList extends LitElement {
  @property({ type: Boolean, reflect: true }) collapsed = false;

  @property({ type: Object }) selectedList = {
    id: '',
    todos: [],
    name: '',
  };

  static styles = [...todoooSharedStyles, todoooListStyles];

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
        ${this.selectedList.todos.map(
          todo =>
            // @ts-ignore
            html`<todooo-todo
              .todo="${todo}"
              ?checked="${todo.checked}"
            ></todooo-todo>`
        )}
      </div>
    `;
  }

  _toggleCollapseState() {
    this.collapsed = !this.collapsed;
  }

  _onHeaderKeyDown(event: KeyboardEvent) {
    if (event.code === 'Enter') {
      this._toggleCollapseState();
    }
  }
}

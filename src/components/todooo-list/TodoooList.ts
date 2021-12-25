import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { todoooSharedStyles } from '../../shared-styles/todoooSharedStyles.js';
import { todoooListStyles } from './todooo-list.styles.js';
import { getRandomItemFromArray } from '../../utils/utils.js';

import '../todooo-list-item/todooo-list-item.js';

import { emptyListMessages } from '../../utils/emptyListMessages.js';

export class TodoooList extends LitElement {
  @property({ type: Boolean, reflect: true }) collapsed = false;

  @property({ type: String }) title = '';

  @property({ type: Array }) listItems = [];

  static styles = [todoooSharedStyles, todoooListStyles];

  render() {
    return html`
      <div
        class="header"
        @click="${this._toggleCollapseState}"
        @keydown="${this._onHeaderKeyDown}"
      >
        <h2 class="header__title">${this.title}</h2>
        <span class="header__chevron"></span>
      </div>
      <div class="list">
        ${this.listItems.length > 0
          ? html`
              <todooo-list-item></todooo-list-item>
              <todooo-list-item></todooo-list-item>
              <todooo-list-item></todooo-list-item>
            `
          : html`
              <p class="no-items">
                ${getRandomItemFromArray(emptyListMessages)}
              </p>
            `}
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

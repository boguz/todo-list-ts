import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { todoooSharedStyles } from '../../shared-styles/todoooSharedStyles.js';
import { todoooListStyles } from './todooo-list.styles.js';

import '../todooo-list-item/todooo-list-item.js';

export class TodoooList extends LitElement {
  @property({ type: Boolean }) isOpen = true;

  @property({ type: String }) title = 'ddd';

  static styles = [todoooSharedStyles, todoooListStyles];

  render() {
    return html`
      <div class="header">
        <h2 class="header__title">${this.title}</h2>
        <span class="header__chevron"></span>
      </div>
      <div class="list">
        <todooo-list-item></todooo-list-item>
        <todooo-list-item></todooo-list-item>
        <todooo-list-item></todooo-list-item>
      </div>
    `;
  }
}

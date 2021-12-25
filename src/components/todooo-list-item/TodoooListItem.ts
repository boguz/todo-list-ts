import { LitElement, html } from 'lit';
import { todoooSharedStyles } from '../../shared-styles/todoooSharedStyles.js';
import { todoooListItemStyles } from './todooo-list-item.styles.js';

export class TodoooListItem extends LitElement {
  static styles = [todoooSharedStyles, todoooListItemStyles];

  render() {
    return html`
      <div class="content">
        <h3 class="content__title">Movies to watch</h3>
        <p class="content__amount">12 items</p>
      </div>
      <div class="progress">
        <span class="progress__percentage">75</span>
      </div>
    `;
  }
}

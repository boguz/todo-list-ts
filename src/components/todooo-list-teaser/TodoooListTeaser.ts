import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { todoooSharedStyles } from '../../shared-styles/todoooSharedStyles.js';
import { todoooListTeaserStyles } from './todooo-list-teaser.styles.js';
import { ListInterface } from '../../types/interfaces.js';
import { calculatePercentage } from '../../utils/utils.js';

export class TodoooListTeaser extends LitElement {
  @property({ type: Object }) list: ListInterface = {
    authorId: '',
    authorName: '',
    creationDate: 0,
    id: '',
    items: [],
    name: '',
  };

  @property({ type: Number }) percentage = 0;

  static styles = [todoooSharedStyles, todoooListTeaserStyles];

  get amountOfCheckedItems() {
    return this.list.items.filter(item => item.checked === false).length;
  }

  connectedCallback() {
    super.connectedCallback();

    this.percentage = calculatePercentage(
      this.amountOfCheckedItems,
      this.list.items.length
    );
    this.style.setProperty(
      '--list-item-progress-percentage',
      this.percentage.toString()
    );
  }

  render() {
    return html`
      <div class="content">
        <h3 class="content__title">${this.list.name}</h3>
        <p class="content__amount">${this.list.items.length} items</p>
      </div>
      <div class="progress">
        <span class="progress__percentage">${this.percentage}</span>
      </div>
    `;
  }
}

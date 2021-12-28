import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { todoooSharedStyles } from '../../shared-styles/todoooSharedStyles.js';
import { todoooListTeaserStyles } from './todooo-list-teaser.styles.js';
import { ListInterface } from '../../types/interfaces.js';
import { calculatePercentage } from '../../utils/utils.js';
import store from '../../store/store.js';
import { setViewList } from '../../store/slices/view.slice.js';

export class TodoooListTeaser extends LitElement {
  @property({ type: Object }) list: ListInterface = {
    id: null,
    todos: null,
    name: null,
  };

  @property({ type: Number }) percentage = 0;

  static styles = [todoooSharedStyles, todoooListTeaserStyles];

  get amountOfCheckedItems() {
    return this.list.todos!.filter(todo => todo.checked === false).length;
  }

  connectedCallback() {
    super.connectedCallback();

    this.percentage = calculatePercentage(
      this.amountOfCheckedItems,
      this.list.todos!.length
    );
    this.style.setProperty(
      '--list-item-progress-percentage',
      this.percentage.toString()
    );

    this.addEventListener('click', this._onTeaserClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('click', this._onTeaserClick);
  }

  _onTeaserClick() {
    store.dispatch(setViewList(this.list.id));
  }

  render() {
    return html`
      <div class="content">
        <h3 class="content__title">${this.list.name}</h3>
        <p class="content__amount">${this.list.todos!.length} items</p>
      </div>
      <div class="progress">
        <span class="progress__percentage">${this.percentage}</span>
      </div>
    `;
  }
}

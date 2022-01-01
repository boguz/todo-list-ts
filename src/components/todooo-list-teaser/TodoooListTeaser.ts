import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { calculatePercentage } from '../../utils/utils.js';
import { firestoreDeleteList } from '../../firestore/firestoreDeleteList.js';
import store from '../../store/store.js';
import { todoooSharedStyles } from '../../shared-styles/todoooSharedStyles.js';
import { todoooListTeaserStyles } from './todooo-list-teaser.styles.js';
import { setViewList } from '../../store/slices/view.slice.js';
import { startListsLoading } from '../../store/slices/lists.slice.js';
import { ListInterface } from '../../types/interfaces.js';

export class TodoooListTeaser extends LitElement {
  @property({ type: Object }) list: ListInterface = {
    id: null,
    todos: null,
    name: null,
  };

  static styles = [todoooSharedStyles, todoooListTeaserStyles];

  /**
   * Get number of checked todos on a list
   */
  get amountOfCheckedItems() {
    return this.list.todos!.filter(todo => todo.checked).length;
  }

  /**
   * Get percentage of checked todos and update the progress element
   */
  get percentage() {
    const newPercentage = calculatePercentage(
      this.amountOfCheckedItems,
      this.list.todos!.length
    );
    this.style.setProperty(
      '--list-item-teaser-progress-percentage',
      newPercentage.toString()
    );
    return newPercentage;
  }

  constructor() {
    super();
    this._confirmListDelete = this._confirmListDelete.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', this._onTeaserClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('click', this._onTeaserClick);
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
      <button class="delete" @click="${this._onDeleteClick}"></button>
    `;
  }

  /**
   * Change to list view when a teaser is clicked
   */
  _onTeaserClick() {
    store.dispatch(setViewList(this.list.id));
  }

  /**
   * When the delete button is clicked
   *  - show delete dialog with correct data
   *
   * @param event
   */
  _onDeleteClick(event: MouseEvent) {
    event.stopPropagation();
    this.dispatchEvent(
      new CustomEvent('todooo-dialog-show', {
        bubbles: true,
        composed: true,
        detail: {
          question: `Do you really want to delete the "${this.list.name}" list?`,
          confirmCallback: this._confirmListDelete,
        },
      })
    );
  }

  /**
   * After the user confirms list delete
   *  - hide dialog
   *  - delete list
   */
  async _confirmListDelete() {
    store.dispatch(startListsLoading());
    this.dispatchEvent(
      new CustomEvent('todooo-dialog-hide', {
        bubbles: true,
        composed: true,
      })
    );
    await firestoreDeleteList(this.list.id);
  }
}

import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { getRandomItemFromArray } from '../../utils/utils.js';
import { todoooSharedStyles } from '../../shared-styles/todoooSharedStyles.js';
import { emptyListMessages } from '../../utils/emptyListMessages.js';
import { todoooListTeaserGroupStyles } from './todooo-list-teaser-group.styles.js';
import '../todooo-list-teaser/todooo-list-teaser.js';

export class TodoooListTeaserGroup extends LitElement {
  @property({ type: Boolean, reflect: true }) collapsed = false;

  @property({ type: String }) title = '';

  @property({ type: Array }) lists = [];

  static styles = [todoooSharedStyles, todoooListTeaserGroupStyles];

  private _isInsideOtherListGroup: boolean;

  constructor() {
    super();

    this._isInsideOtherListGroup = this.hasAttribute('other-list-group');
  }

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
        ${this.lists.length > 0
          ? this.lists.map(
              list =>
                html`<todooo-list-teaser
                  .list="${list}"
                  ?other-list-teaser="${!!this._isInsideOtherListGroup}"
                ></todooo-list-teaser>`
            )
          : html`
              <p class="no-items">
                ${getRandomItemFromArray(emptyListMessages)}
              </p>
            `}
      </div>
    `;
  }

  /**
   * Toggle the lists collapse state (show / hide the list's content)
   */
  _toggleCollapseState() {
    this.collapsed = !this.collapsed;
  }

  /**
   * Toggle the list's collapse state also on Enter key press
   * @param event
   */
  _onHeaderKeyDown(event: KeyboardEvent) {
    if (event.code === 'Enter') {
      this._toggleCollapseState();
    }
  }
}

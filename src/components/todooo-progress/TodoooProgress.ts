import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';

import { todoooSharedStyles } from '../../shared-styles/todoooSharedStyles.js';
import { todoooProgressStyles } from './todooo-progress.styles.js';
import { calculatePercentage } from '../../utils/utils.js';

export class TodoooProgress extends LitElement {
  @property({ type: Number }) nonActiveListsAmount = 0;

  @property({ type: Number }) totalListsAmount = 0;

  static styles = [...todoooSharedStyles, todoooProgressStyles];

  setPercentage() {
    this.style.setProperty(
      '--progress-width',
      calculatePercentage(
        this.nonActiveListsAmount,
        this.totalListsAmount
      ).toString()
    );
  }

  render() {
    this.setPercentage();

    return html`
      <div class="progress__header">
        <p class="progress__text">
          <span class="progress__partial">${this.nonActiveListsAmount}</span>
          /
          <span class="progress__partial">${this.totalListsAmount}</span>
          completed
        </p>
        <p class="progress__percentage">
          ${calculatePercentage(
            this.nonActiveListsAmount,
            this.totalListsAmount
          )}%
        </p>
      </div>
      <div class="progress__progress-background">
        <div class="progress__progress-bar"></div>
      </div>
    `;
  }
}

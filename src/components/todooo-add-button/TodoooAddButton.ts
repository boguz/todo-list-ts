import { LitElement, html } from 'lit';
import { todoooSharedStyles } from '../../shared-styles/todoooSharedStyles.js';
import { todoooAddButtonStyles } from './todooo-add-button.styles.js';

export class TodoooAddButton extends LitElement {
  static styles = [todoooSharedStyles, todoooAddButtonStyles];

  render() {
    return html` <button class="add-button__button">+</button> `;
  }
}

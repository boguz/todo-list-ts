import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import '../todooo-topbar/todooo-topbar.js';
import '../todooo-stage/todooo-stage.js';
import '../todooo-add-button/todooo-add-button.js';
import '../todooo-loader/todooo-loader.js';
import { todoooSharedStyles } from '../../shared-styles/todoooSharedStyles.js';
import { todoooMainStyles } from './todooo-main.styles.js';

export class TodoooMain extends LitElement {
  @property({ type: Object }) user = {
    id: null,
    displayName: null,
    avatarURL: null,
  };

  static styles = [todoooSharedStyles, todoooMainStyles];

  render() {
    return html`
      <todooo-topbar .user="${this.user}"></todooo-topbar>
      <todooo-loader></todooo-loader>
      <todooo-stage></todooo-stage>
      <todooo-add-button></todooo-add-button>
    `;
  }
}

import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

import '../todooo-login/todooo-login.js';

export class TodoooApp extends LitElement {
  @property({ type: String }) title = 'My home';

  @property({ type: Object }) user = null;

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--todooo-app-background-color);
    }
  `;

  render() {
    return this.user
      ? html`<h1>HAS USER</h1>`
      : html`<todooo-login></todooo-login>`;
  }
}

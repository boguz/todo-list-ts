import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export class TodoooTest extends LitElement {
  @property({ type: String }) title = 'My test';

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
    return html`
      <main>
        <h1>Test AAAA</h1>
        <p>${this.title}</p>
        <p><a href="/">Home</a></p>
      </main>
    `;
  }
}

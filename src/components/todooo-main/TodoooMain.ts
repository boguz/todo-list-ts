import { LitElement, html, css } from 'lit';
import '../todooo-topbar/todooo-topbar.js';

export class TodoooMain extends LitElement {
  static styles = css`
    :host {
    }
  `;

  render() {
    return html`
      <h1>MAIN</h1>
      <todooo-topbar></todooo-topbar>
    `;
  }
}

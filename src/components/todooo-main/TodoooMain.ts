import { LitElement, html, css } from 'lit';
import '../todooo-topbar/todooo-topbar.js';
import '../todooo-stage/todooo-stage.js';
import '../todooo-add-button/todooo-add-button.js';

export class TodoooMain extends LitElement {
  static styles = css`
    :host {
    }
  `;

  render() {
    return html`
      <h1>MAIN</h1>
      <todooo-topbar></todooo-topbar>
      <todooo-stage></todooo-stage>
      <todooo-add-button></todooo-add-button>
    `;
  }
}

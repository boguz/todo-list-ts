import { LitElement, html, css } from 'lit';
import { connect } from 'pwa-helpers';
import { property } from 'lit/decorators.js';

import '../../firestore/firestore.js';
import '../todooo-login/todooo-login.js';

import store from '../../store/store.js';

export class TodoooApp extends connect(store)(LitElement) {
  @property({ type: String }) title = 'My home';

  @property({ type: Object }) user = null;

  @property({ type: Object }) state = {};

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      margin: 0 auto;
    }
  `;

  stateChanged(state: any) {
    console.log('################', state);
    this.user = state.user?.user || null;
  }

  render() {
    return this.user
      ? html`<h1>HAS USER</h1>`
      : html`<todooo-login></todooo-login>`;
  }
}

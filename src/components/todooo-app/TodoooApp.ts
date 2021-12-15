import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

import store from '../../store/store.js';
import '../../firestore/firestore.js';

import '../todooo-login/todooo-login.js';
import '../todooo-main/todooo-main.js';

export class TodoooApp extends LitElement {
  @property({ type: Object }) user = {
    id: null,
    displayName: null,
    avatarURL: null,
  };

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

  constructor() {
    super();

    store.subscribe(() => {
      this._onStateChange(store.getState());
    });
  }

  _onStateChange(state: any) {
    this.user = state.user;
  }

  render() {
    return this.user.displayName
      ? html`<todooo-main .user="${this.user}"></todooo-main>`
      : html`<todooo-login></todooo-login>`;
  }
}

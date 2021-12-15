import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

import store from '../../store/store.js';

import '../../firestore/firestore.js';
import '../todooo-login/todooo-login.js';

import { UserInterface } from '../../types.js';

export class TodoooApp extends LitElement {
  @property({ type: Object }) user: UserInterface = {
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

    store.subscribe(this._onStateChange);
  }

  _onStateChange() {
    console.log('111111', store.getState());
    const state = store.getState();
    const { user } = state;
    console.log('STATE', state);
    console.log('USER', user);
  }

  render() {
    return this.user.displayName
      ? html`<h1>HAS USER</h1>`
      : html`<todooo-login></todooo-login>`;
  }
}

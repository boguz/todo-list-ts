import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { todoooSharedStyles } from '../../shared-styles/todoooSharedStyles.js';
import { todoooUserSettingsStyles } from './todooo-user-settings.styles.js';
import store from '../../store/store.js';
import { hideUserSettings } from '../../store/slices/userSettings.slice.js';

import '../todooo-scrim/todooo-scrim.js';
import { firebaseAuth } from '../../firestore/firestoreAuth.js';

export class TodoooUserSettings extends LitElement {
  @property({ type: Boolean }) visible = false;

  @property({ type: Object }) user = {
    id: null,
    displayName: null,
    avatarURL: null,
  };

  static styles = [todoooSharedStyles, todoooUserSettingsStyles];

  render() {
    return html`
      <todooo-scrim @click="${this._onScrimClick}"></todooo-scrim>
      <section class="user-settings__content">
        <p class="user-settings__user-name">${this.user.displayName}</p>
        <button
          class="button button--small button--align-right"
          @click="${this._onLogoutClick}"
        >
          logout
        </button>
      </section>
    `;
  }

  _onScrimClick() {
    store.dispatch(hideUserSettings());
  }

  _onLogoutClick() {
    firebaseAuth.signOut();
  }
}

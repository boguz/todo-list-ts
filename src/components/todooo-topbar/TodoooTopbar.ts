import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import store from '../../store/store.js';

import { todoooTopbarStyles } from './todooo-topbar.styles.js';
import { todoooSharedStyles } from '../../shared-styles/todoooSharedStyles.js';
import { showUserSettings } from '../../store/slices/userSettings.slice.js';

export class TodoooTopbar extends LitElement {
  @property({ type: Object }) user = {
    id: null,
    displayName: null,
    avatarURL: null,
  };

  static styles = [todoooSharedStyles, todoooTopbarStyles];

  render() {
    return html`
      <img
        src="./assets/images/logo-grey.svg"
        alt="Todooo app logo"
        class="topbar__logo"
      />
      <button class="topbar__avatar" @click="${this._onAvatarClick}">
        ${this.user.avatarURL
          ? html`
              <img
                src="${this.user.avatarURL}"
                referrerpolicy="no-referrer"
                class="topbar__avatar-image"
                alt="User avatar"
              />
            `
          : ''}
      </button>
    `;
  }

  _onAvatarClick() {
    store.dispatch(showUserSettings());
  }
}

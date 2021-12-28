import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import store from '../../store/store.js';
import { todoooTopbarStyles } from './todooo-topbar.styles.js';
import { todoooSharedStyles } from '../../shared-styles/todoooSharedStyles.js';
import {
  hideUserSettings,
  showUserSettings,
} from '../../store/slices/userSettings.slice.js';
import { setViewMain } from '../../store/slices/view.slice.js';

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
        @click="${this._onLogoClick}"
        @keydown="${this._onHeaderKeyDown}"
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

  _onLogoClick() {
    store.dispatch(setViewMain());
  }

  _onAvatarClick() {
    this.hasAttribute('usersettingsvisible')
      ? store.dispatch(hideUserSettings())
      : store.dispatch(showUserSettings());
  }

  _onHeaderKeyDown(event: KeyboardEvent) {
    if (event.code === 'Enter') {
      this._onLogoClick();
    }
  }
}

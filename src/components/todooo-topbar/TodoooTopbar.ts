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
import { hideAllFormOverlays } from '../../store/slices/lists.slice.js';

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
        @keydown="${this._onHeaderLogoKeyDown}"
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

  /**
   * On logo click:
   *  - go back to Main view
   *  - hide all overlays
   */
  _onLogoClick() {
    store.dispatch(setViewMain());
    store.dispatch(hideAllFormOverlays());
  }

  /**
   * Toggle user settings visibility on avatar click
   */
  _onAvatarClick() {
    if (this.hasAttribute('usersettingsvisible')) {
      store.dispatch(hideUserSettings());
    } else {
      store.dispatch(showUserSettings());
      store.dispatch(hideAllFormOverlays());
    }
  }

  /**
   * When logo is selected, on Enter key press trigger a logo click:
   *  - move to Main view
   *
   * @param event
   */
  _onHeaderLogoKeyDown(event: KeyboardEvent) {
    if (event.code === 'Enter') {
      this._onLogoClick();
    }
  }
}

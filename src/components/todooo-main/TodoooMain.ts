import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import '../todooo-topbar/todooo-topbar.js';
import '../todooo-stage/todooo-stage.js';
import '../todooo-add-button/todooo-add-button.js';
import '../todooo-loader/todooo-loader.js';
import '../todooo-user-settings/todooo-user-settings.js';
import { todoooSharedStyles } from '../../shared-styles/todoooSharedStyles.js';
import { todoooMainStyles } from './todooo-main.styles.js';

export class TodoooMain extends LitElement {
  @property({ type: Object }) user = {
    id: null,
    displayName: null,
    avatarURL: null,
  };

  @property({ type: Object })
  userSettings = {
    visible: false,
  };

  static styles = [todoooSharedStyles, todoooMainStyles];

  render() {
    console.log('TTT', this.userSettings.visible);
    return html`
      <todooo-topbar
        .user="${this.user}"
        ?userSettingsVisible="${this.userSettings.visible}"
      ></todooo-topbar>
      <todooo-loader></todooo-loader>
      <todooo-stage></todooo-stage>
      <todooo-add-button></todooo-add-button>
      <todooo-user-settings
        ?visible="${this.userSettings.visible}"
      ></todooo-user-settings>
    `;
  }
}

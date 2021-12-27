import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import '../todooo-topbar/todooo-topbar.js';
import '../todooo-stage/todooo-stage.js';
import '../todooo-add-button/todooo-add-button.js';
import '../todooo-loader/todooo-loader.js';
import '../todooo-user-settings/todooo-user-settings.js';
import '../todooo-new-list/todooo-new-list.js';
import { todoooSharedStyles } from '../../shared-styles/todoooSharedStyles.js';
import { todoooMainStyles } from './todooo-main.styles.js';
import { ListsInterface } from '../../types/interfaces.js';

export class TodoooMain extends LitElement {
  @property({ type: Object }) user = {
    id: null,
    displayName: null,
    avatarURL: null,
  };

  @property({ type: Object }) userSettings = {
    visible: false,
  };

  @property({ type: Object }) view = {
    viewName: 'list',
  };

  @property({ type: Object }) lists: ListsInterface = {
    lists: [],
    newListFormVisible: false,
  };

  static styles = [todoooSharedStyles, todoooMainStyles];

  render() {
    return html`
      <todooo-topbar
        .user="${this.user}"
        ?userSettingsVisible="${this.userSettings.visible}"
      ></todooo-topbar>
      <todooo-loader></todooo-loader>
      <todooo-stage .lists="${this.lists.lists}"></todooo-stage>
      <todooo-add-button .view="${this.view.viewName}"></todooo-add-button>
      <todooo-user-settings
        .user="${this.user}"
        ?visible="${this.userSettings.visible}"
      ></todooo-user-settings>
      ${this.lists.newListFormVisible
        ? html` <todooo-new-list .user="${this.user}"></todooo-new-list> `
        : ''}
    `;
  }
}

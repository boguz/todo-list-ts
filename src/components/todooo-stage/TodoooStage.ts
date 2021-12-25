import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { todoooSharedStyles } from '../../shared-styles/todoooSharedStyles.js';
import { todoooStageStyles } from './todooo-stage.styles.js';

import '../todooo-list/todooo-list.js';

export class TodoooStage extends LitElement {
  @property({ type: String }) view = {
    viewName: 'list',
  };

  static styles = [todoooSharedStyles, todoooStageStyles];

  render() {
    switch (this.view.viewName) {
      case 'list':
      default:
        return this._renderList();
    }
  }

  _renderList() {
    return html`
      <todooo-list title="Active lists"></todooo-list>
      <todooo-list title="Other lists"></todooo-list>
    `;
  }
}

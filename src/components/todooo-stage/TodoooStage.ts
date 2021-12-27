import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { ListInterface } from '../../types/interfaces.js';
import { todoooSharedStyles } from '../../shared-styles/todoooSharedStyles.js';
import { todoooStageStyles } from './todooo-stage.styles.js';

import '../todooo-progress/todooo-progress.js';
import '../todooo-list-teaser-group/todooo-list-teaser-group.js';

export class TodoooStage extends LitElement {
  @property({ type: String }) view = {
    viewName: 'list',
  };

  @property({ type: Object }) lists: ListInterface[] = [];

  static styles = [todoooSharedStyles, todoooStageStyles];

  get activeLists() {
    return this.lists.filter(list => {
      const checkedItems = list.items.filter(item => item.checked);
      return checkedItems.length !== list.items.length;
    });
  }

  get otherLists() {
    return this.lists.filter(list => {
      const checkedItems = list.items.filter(item => item.checked);
      return checkedItems.length === list.items.length;
    });
  }

  render() {
    switch (this.view.viewName) {
      case 'list':
      default:
        return this._renderLists();
    }
  }

  _renderLists() {
    return html`
      <todooo-progress
        .nonActiveListsAmount="${this.otherLists.length}"
        .totalListsAmount="${this.lists.length}"
      >
      </todooo-progress>
      <todooo-list-teaser-group
        title="Active lists"
        .lists="${this.activeLists}"
      ></todooo-list-teaser-group>
      <todooo-list-teaser-group
        title="Other lists"
        .lists="${this.otherLists}"
      ></todooo-list-teaser-group>
    `;
  }
}

import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { ListInterface } from '../../types/interfaces.js';
import { todoooSharedStyles } from '../../shared-styles/todoooSharedStyles.js';
import { todoooStageStyles } from './todooo-stage.styles.js';
import '../todooo-progress/todooo-progress.js';
import '../todooo-list-teaser-group/todooo-list-teaser-group.js';
import '../todooo-list/todooo-list.js';

export class TodoooStage extends LitElement {
  @property({ type: String }) view = {
    viewName: 'main',
    viewListId: null,
  };

  @property({ type: Object }) lists: ListInterface[] = [];

  static styles = [todoooSharedStyles, todoooStageStyles];

  get activeLists() {
    return this.lists.filter(list => {
      const checkedItems = list.todos!.filter(todo => todo.checked);
      return checkedItems.length !== list.todos!.length;
    });
  }

  get otherLists() {
    return this.lists.filter(list => {
      const checkedItems = list.todos!.filter(todo => todo.checked);
      return checkedItems.length === list.todos!.length;
    });
  }

  get selectedList() {
    return this.lists.find(list => list.id === this.view.viewListId);
  }

  get checkedSelectedListItems() {
    return this.selectedList!.todos!.filter(todo => todo.checked);
  }

  render() {
    switch (this.view.viewName) {
      case 'list':
        return this._renderList();
      case 'main':
      default:
        return this._renderMain();
    }
  }

  _renderList() {
    return html`
      <todooo-progress
        .nonActiveListsAmount="${this.checkedSelectedListItems.length}"
        .totalListsAmount="${this.selectedList!.todos!.length}"
      >
      </todooo-progress>
      <todooo-list .selectedList="${this.selectedList}"></todooo-list>
    `;
  }

  _renderMain() {
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
        other-list-group
      ></todooo-list-teaser-group>
    `;
  }
}

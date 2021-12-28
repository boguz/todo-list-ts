import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { todoooSharedStyles } from '../../shared-styles/todoooSharedStyles.js';
import { createNewList } from '../../utils/createNewList.js';
import { firestoreAddList } from '../../firestore/firestoreAddList.js';
import store from '../../store/store.js';
import { hideNewListForm } from '../../store/slices/lists.slice.js';

export class TodoooNewList extends LitElement {
  @property({ type: Object }) user = {
    id: null,
    displayName: null,
    avatarURL: null,
  };

  static styles = [todoooSharedStyles];

  render() {
    return html`
      <todooo-scrim @click="${this._onScrimClick}"></todooo-scrim>
      <section class="form-section">
        <form class="form" @submit="${this._onNewListFormSubmit}">
          <input class="form__input" placeholder="New list" />
          <button class="form__button" type="submit">Create</button>
        </form>
      </section>
    `;
  }

  _onScrimClick() {
    console.log('SCRIM CLICK');
  }

  async _onNewListFormSubmit(event: SubmitEvent) {
    event.preventDefault();
    // @ts-ignore
    const newListName = this.shadowRoot.querySelector('.form__input').value;
    if (newListName) {
      const newList = createNewList(newListName);
      try {
        await firestoreAddList(newList);
        store.dispatch(hideNewListForm());
      } catch (error) {
        console.error('Could not create list', error);
      }
    }
  }
}

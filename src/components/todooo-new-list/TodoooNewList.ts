import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { todoooSharedStyles } from '../../shared-styles/todoooSharedStyles.js';
import { createNewList } from '../../utils/createNewList.js';
import { addListToUser } from '../../firestore/firestoreUpdateUserLists.js';
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
    if (newListName && this.user.id && this.user.displayName) {
      const newList = createNewList(
        newListName,
        this.user.id,
        this.user.displayName
      );
      try {
        await addListToUser(newList);
        store.dispatch(hideNewListForm());
      } catch (error) {
        console.error('Could not create list', error);
      }
    }
  }
}

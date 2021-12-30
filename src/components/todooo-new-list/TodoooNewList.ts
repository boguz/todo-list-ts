import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { todoooSharedStyles } from '../../shared-styles/todoooSharedStyles.js';
import { createNewList } from '../../utils/createNewList.js';
import { firestoreAddList } from '../../firestore/firestoreAddList.js';
import store from '../../store/store.js';
import {
  endListsLoading,
  hideNewListForm,
  startListsLoading,
} from '../../store/slices/lists.slice.js';

export class TodoooNewList extends LitElement {
  @property({ type: Object }) user = {
    id: null,
    displayName: null,
    avatarURL: null,
  };

  static styles = [todoooSharedStyles];

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('keydown', this._onEscPress);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('keydown', this._onEscPress);
  }

  _onEscPress(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      store.dispatch(hideNewListForm());
    }
  }

  firstUpdated() {
    if (this.shadowRoot!.querySelector('.form__input')) {
      const newListInput: HTMLInputElement =
        this.shadowRoot!.querySelector('.form__input')!;
      newListInput.focus();
    }
  }

  _onScrimClick() {
    store.dispatch(hideNewListForm());
  }

  async _onNewListFormSubmit(event: SubmitEvent) {
    event.preventDefault();
    // @ts-ignore
    const newListName = this.shadowRoot.querySelector('.form__input').value;
    if (newListName) {
      const newList = createNewList(newListName);
      try {
        store.dispatch(startListsLoading());
        await firestoreAddList(newList);
        store.dispatch(hideNewListForm());
        store.dispatch(endListsLoading());
      } catch (error) {
        console.error('Could not create list', error);
      }
    }
  }

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
}

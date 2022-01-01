import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { createNewList } from '../../utils/createNewList.js';
import { firestoreAddList } from '../../firestore/firestoreAddList.js';
import store from '../../store/store.js';
import { todoooSharedStyles } from '../../shared-styles/todoooSharedStyles.js';
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

  /**
   * Hide form on Esc key press
   *
   * @param event
   */
  _onEscPress(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      store.dispatch(hideNewListForm());
    }
  }

  /**
   * When element is shown, set focus on input
   */
  firstUpdated() {
    if (this.shadowRoot!.querySelector('.form__input')) {
      const newListInput: HTMLInputElement =
        this.shadowRoot!.querySelector('.form__input')!;
      newListInput.focus();
    }
  }

  /**
   * Hide the form when the scrim is clicked
   */
  _onScrimClick() {
    store.dispatch(hideNewListForm());
  }

  /**
   * When the new list form is submited:
   *  - Get the input value (show error message if empty)
   *  - Create new list
   *  - After list creation hide form
   *
   * @param event
   */
  async _onNewListFormSubmit(event: SubmitEvent) {
    event.preventDefault();
    // @ts-ignore
    const newListName = this.shadowRoot.querySelector('.form__input').value;
    if (newListName === '') {
      this.style.setProperty('--form-error', 'block');
      return;
    }

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

  /**
   * Check if form has content to remove error messoge
   */
  _onFormInput() {
    // @ts-ignore
    const newListName = this.shadowRoot.querySelector('.form__input').value;
    if (newListName !== '') {
      this.style.setProperty('--form-error', 'none');
    }
  }

  render() {
    return html`
      <todooo-scrim @click="${this._onScrimClick}"></todooo-scrim>
      <section class="form-section">
        <form class="form" @submit="${this._onNewListFormSubmit}">
          <p class="form-error">List name is still empty!</p>
          <input
            class="form__input"
            placeholder="New list"
            @input="${this._onFormInput}"
          />
          <button class="form__button" type="submit">Create</button>
        </form>
      </section>
    `;
  }
}

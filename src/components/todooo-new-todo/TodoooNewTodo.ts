import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { todoooSharedStyles } from '../../shared-styles/todoooSharedStyles.js';
import { createNewTodo } from '../../utils/createNewTodo.js';
import { firestoreAddTodo } from '../../firestore/firestoreAddTodo.js';
import store from '../../store/store.js';
import {
  endListsLoading,
  hideNewTodoForm,
  startListsLoading,
} from '../../store/slices/lists.slice.js';

export class TodoooNewTodo extends LitElement {
  @property({ type: Object }) user = {
    id: null,
    displayName: null,
    avatarURL: null,
  };

  static styles = [...todoooSharedStyles];

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
      store.dispatch(hideNewTodoForm());
    }
  }

  firstUpdated() {
    if (this.shadowRoot!.querySelector('.form__input')) {
      const newTodoInput: HTMLInputElement =
        this.shadowRoot!.querySelector('.form__input')!;
      newTodoInput.focus();
    }
  }

  _onScrimClick() {
    store.dispatch(hideNewTodoForm());
  }

  async _onNewListFormSubmit(event: SubmitEvent) {
    event.preventDefault();
    // @ts-ignore
    const newTodoName = this.shadowRoot.querySelector('.form__input').value;
    const selectedListId = store.getState().view.viewListId;
    if (newTodoName && selectedListId) {
      const newTodo = createNewTodo(newTodoName);
      try {
        store.dispatch(startListsLoading());
        await firestoreAddTodo(newTodo, selectedListId);
        store.dispatch(hideNewTodoForm());
        store.dispatch(endListsLoading());
      } catch (error) {
        console.error('Could not create todo', error);
      }
    }
  }

  render() {
    return html`
      <todooo-scrim @click="${this._onScrimClick}"></todooo-scrim>
      <section class="form-section">
        <form class="form" @submit="${this._onNewListFormSubmit}">
          <input class="form__input" placeholder="New Item" />
          <button class="form__button" type="submit">Add</button>
        </form>
      </section>
    `;
  }
}

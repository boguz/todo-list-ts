import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { createNewTodo } from '../../utils/createNewTodo.js';
import { firestoreAddTodo } from '../../firestore/firestoreAddTodo.js';
import store from '../../store/store.js';
import { todoooSharedStyles } from '../../shared-styles/todoooSharedStyles.js';
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

  /**
   * Hide form when Esc key is pressed
   *
   * @param event
   */
  _onEscPress(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      store.dispatch(hideNewTodoForm());
    }
  }

  /**
   * Focus on the input when form is shown
   */
  firstUpdated() {
    if (this.shadowRoot!.querySelector('.form__input')) {
      const newTodoInput: HTMLInputElement =
        this.shadowRoot!.querySelector('.form__input')!;
      newTodoInput.focus();
    }
  }

  /**
   * Hide form on scrim click
   */
  _onScrimClick() {
    store.dispatch(hideNewTodoForm());
  }

  /**
   * When the new todo form is submited:
   *  - get input's value (and show error message if empty)
   *  - Add new todo to correct list
   *  - Hide form after todo is added
   *
   * @param event
   */
  async _onNewTodoFormSubmit(event: SubmitEvent) {
    event.preventDefault();
    // @ts-ignore
    const newTodoName = this.shadowRoot.querySelector('.form__input').value;

    if (newTodoName === '') {
      this.style.setProperty('--form-error', 'block');
      return;
    }

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

  /**
   * Check of input has content to hide the error message
   */
  _onFormInput() {
    // @ts-ignore
    const newTodoName = this.shadowRoot.querySelector('.form__input').value;
    if (newTodoName !== '') {
      this.style.setProperty('--form-error', 'none');
    }
  }

  render() {
    return html`
      <todooo-scrim @click="${this._onScrimClick}"></todooo-scrim>
      <section class="form-section">
        <form class="form" @submit="${this._onNewTodoFormSubmit}">
          <p class="form-error">Item name is still empty!</p>
          <input
            class="form__input"
            placeholder="New Item"
            @input="${this._onFormInput}"
          />
          <button class="form__button" type="submit">Add</button>
        </form>
      </section>
    `;
  }
}

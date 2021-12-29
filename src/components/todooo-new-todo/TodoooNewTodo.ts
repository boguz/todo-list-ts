import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { todoooSharedStyles } from '../../shared-styles/todoooSharedStyles.js';
import { createNewTodo } from '../../utils/createNewTodo.js';
import { firestoreAddTodo } from '../../firestore/firestoreAddTodo.js';
import store from '../../store/store.js';
import { hideNewTodoForm } from '../../store/slices/lists.slice.js';

export class TodoooNewTodo extends LitElement {
  @property({ type: Object }) user = {
    id: null,
    displayName: null,
    avatarURL: null,
  };

  static styles = [...todoooSharedStyles];

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
        await firestoreAddTodo(newTodo, selectedListId);
        store.dispatch(hideNewTodoForm());
      } catch (error) {
        console.error('Could not create todo', error);
      }
    }
  }
}

import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { todoooSharedStyles } from '../../shared-styles/todoooSharedStyles.js';

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

  _onNewListFormSubmit(event: SubmitEvent) {
    event.preventDefault();
    // @ts-ignore
    const newListName = this.shadowRoot.querySelector('.form__input').value;
    if (newListName) {
      console.log({
        name: newListName,
        authorId: this.user.id,
        authorName: this.user.displayName,
      });
    }
  }
}

import { LitElement, html } from 'lit';
import { todoooSharedStyles } from '../../shared-styles/todoooSharedStyles.js';
import { todoooLoginStyles } from './todooo-login.styles.js';

export class TodoooLogin extends LitElement {
  static styles = [todoooSharedStyles, todoooLoginStyles];

  render() {
    return html`
      <img
        src="./assets/images/logo-primary.svg"
        alt="Todooo app logo"
        class="login__logo"
      />
      <button class="button login__button">login</button>
    `;
  }
}

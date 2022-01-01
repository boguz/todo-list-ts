import { LitElement, html } from 'lit';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { todoooSharedStyles } from '../../shared-styles/todoooSharedStyles.js';
import { todoooLoginStyles } from './todooo-login.styles.js';
import { firebaseAuth } from '../../firestore/firestoreAuth.js';

export class TodoooLogin extends LitElement {
  static styles = [todoooSharedStyles, todoooLoginStyles];

  render() {
    return html`
      <img
        src="./assets/images/logo-primary.svg"
        alt="Todooo app logo"
        class="login__logo"
      />
      <button class="button login__button" @click="${this._onLoginButtonClick}">
        login
      </button>
    `;
  }

  /**
   * Sign-in user using the Google Provider in a Popup window
   */
  async _onLoginButtonClick() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(firebaseAuth, provider).catch(error => {
      console.error(error.code, error.message);
    });
  }
}

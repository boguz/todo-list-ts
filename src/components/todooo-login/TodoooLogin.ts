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

  async _onLoginButtonClick() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(firebaseAuth, provider).catch(error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
    });
  }
}

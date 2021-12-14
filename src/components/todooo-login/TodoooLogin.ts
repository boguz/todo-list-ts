import { LitElement, html } from 'lit';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { todoooSharedStyles } from '../../shared-styles/todoooSharedStyles.js';
import { todoooLoginStyles } from './todooo-login.styles.js';
import { firebaseAuth } from '../../firestore/firestoreConfig.js';

import { loginUser } from '../../store/slices/user.slice.js';
import store from '../../store/store.js';

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
    console.log('aaaaaaaa');
    const provider = new GoogleAuthProvider();
    signInWithPopup(firebaseAuth, provider)
      .then(result => {
        const { user } = result;
        const userData = {
          displayName: user.displayName,
          id: user.uid,
          avatarURL: user.photoURL,
        };
        console.log('user', userData);
        store.dispatch(loginUser(userData));
      })
      .catch(error => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
  }
}

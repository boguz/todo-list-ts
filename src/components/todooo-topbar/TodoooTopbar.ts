import { LitElement, html, css } from 'lit';
import { firebaseAuth } from '../../firestore/firestoreConfig.js';
import { logoutUser } from '../../store/slices/user.slice';
import store from '../../store/store.js';

export class TodoooTopbar extends LitElement {
  static styles = css`
    :host {
    }
  `;

  render() {
    return html`
      <h1>TOPBAR</h1>
      <button @click="${this._onLogoutClick}">Logout</button>
    `;
  }

  _onLogoutClick() {
    firebaseAuth.signOut().then(
      () => {
        store.dispatch(logoutUser());
      },
      error => {
        console.error('Signout Failed', error);
      }
    );
  }
}

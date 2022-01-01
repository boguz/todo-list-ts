import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { todoooSharedStyles } from '../../shared-styles/todoooSharedStyles.js';
import { todoooDialogStyles } from './todooo-dialog.styles.js';
import '../todooo-scrim/todooo-scrim.js';
import { CallbackInterface } from '../../types/interfaces.js';

export class TodoooDialog extends LitElement {
  @property({ type: String }) question: string | null = null;

  @property({ type: Function }) confirmCallback: CallbackInterface = () => null;

  static styles = [todoooSharedStyles, todoooDialogStyles];

  render() {
    return html`
      <todooo-scrim></todooo-scrim>
      <p class="question">${this.question}</p>
      <div class="buttons">
        <button class="button button-cancel" @click="${this._hideDialog}">
          No
        </button>
        <button class="button button-confirm" @click="${this.confirmCallback}">
          Yes
        </button>
      </div>
    `;
  }

  constructor() {
    super();

    this._onDialogShow = this._onDialogShow.bind(this);
    this._hideDialog = this._hideDialog.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();

    // @ts-ignore
    document.addEventListener('todooo-dialog-show', this._onDialogShow);
    document.addEventListener('todooo-dialog-hide', this._hideDialog);
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    // @ts-ignore
    document.removeEventListener('todooo-dialog-show', this._onDialogShow);
    document.removeEventListener('todooo-dialog-hide', this._hideDialog);
  }

  /**
   * Show the dialog with correct information:
   *  - change display variable value to show dialog
   *  - show correct question
   *  - set correct confirmation callback
   *
   * @param event
   */
  _onDialogShow(event: CustomEvent) {
    this.style.setProperty('--dialog-display', 'flex');
    this.question = event.detail.question;
    this.confirmCallback = event.detail.confirmCallback;
  }

  /**
   * Hide the dialog:
   *  - reset question
   *  - set display variable value to hide dialog
   */
  _hideDialog() {
    this.question = null;
    this.style.setProperty('--dialog-display', 'none');
  }
}

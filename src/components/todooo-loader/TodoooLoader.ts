import { LitElement, html } from 'lit';
import { todoooSharedStyles } from '../../shared-styles/todoooSharedStyles.js';
import { todoooLoaderStyles } from './todooo-loader.styles.js';

export class TodoooLoader extends LitElement {
  static styles = [todoooSharedStyles, todoooLoaderStyles];

  render() {
    return html` <span class="loader"></span> `;
  }
}

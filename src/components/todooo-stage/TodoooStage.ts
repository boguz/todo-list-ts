import { LitElement, html } from 'lit';
import { todoooSharedStyles } from '../../shared-styles/todoooSharedStyles.js';
import { todoooStageStyles } from './todooo-stage.styles.js';

export class TodoooStage extends LitElement {
  static styles = [todoooSharedStyles, todoooStageStyles];

  render() {
    return html` <h1>STAGE</h1> `;
  }
}

import { css } from 'lit';
import { todoooSharedVariables } from './todoooStylesVariables.js';

export const todoooSharedStyles = [
  todoooSharedVariables,
  css`
    :host {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      font-family: var(--font-family-text);
    }

    h1,
    h2,
    h3,
    h4 {
      font-family: var(--font-family-headline);
    }

    .button {
      text-transform: uppercase;
      border: none;
      outline: none;
      background-color: transparent;
      cursor: pointer;
      color: var(--color-text-secondary);
      font-family: var(--font-family-headline);
      font-size: var(--font-size-bigger);
    }

    @media (hover: hover) {
      .button:hover {
        color: var(--color-highlight);
      }
    }
  `,
];

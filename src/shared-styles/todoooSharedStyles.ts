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
      padding: 0;
    }

    .button--small {
      font-size: var(--font-size-normal);
    }

    .button--align-right {
      display: block;
      margin-left: auto;
      margin-right: 0;
    }

    @media (hover: hover) {
      .button:hover {
        color: var(--color-highlight);
      }
    }
  `,
];

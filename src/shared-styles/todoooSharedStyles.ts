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

    .form-section {
      position: fixed;
      bottom: var(--spacing-normal);
      left: var(--spacing-normal);
      width: calc(
        100vw - calc(var(--spacing-normal) * 3 + var(--add-button-size))
      );
      height: var(--add-button-size);
      z-index: 2;
      border-radius: var(--border-radius-normal);
    }

    .form {
      height: 100%;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr auto;
      overflow: hidden;
    }

    .form__input {
      box-sizing: border-box;
      border: none;
      width: 100%;
      height: var(--add-button-size);
      padding: 0 var(--spacing-small);
    }

    .form__input:focus {
      outline: 1px solid var(--color-highlight);
    }

    .form__button {
      box-sizing: border-box;
      outline: none;
      border: none;
      background-color: var(--color-highlight);
      color: var(--color-bg-base);
      height: var(--add-button-size);
      width: auto;
      padding: 0 var(--spacing-small);
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      font-family: var(--font-family-headline);
      font-size: var(--font-size-smaller);
      cursor: pointer;
    }

    @media (hover: hover) {
      .button:hover {
        color: var(--color-highlight);
      }

      .form__button:hover {
        background-color: var(--color-highlight-hover);
      }
    }
  `,
];

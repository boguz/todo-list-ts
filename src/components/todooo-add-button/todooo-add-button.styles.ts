import { css } from 'lit';

export const todoooAddButtonStyles = css`
  :host {
    position: fixed;
    height: var(--add-button-size);
    width: var(--add-button-size);
    bottom: var(--spacing-normal);
    right: var(--spacing-normal);
    z-index: 2;
  }

  :host([userSettingsVisible]) {
    z-index: 0;
  }

  .add-button__button {
    height: var(--add-button-size);
    width: var(--add-button-size);
    background-color: var(--color-highlight);
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: var(--font-size-big);
    color: var(--color-bg-base);
    cursor: pointer;
  }

  @media (hover: hover) {
    .add-button__button:hover {
      background-color: var(--color-highlight-hover);
      outline: 2px solid var(--color-highlight-hover);
      outline-offset: 2px;
    }
  }
`;

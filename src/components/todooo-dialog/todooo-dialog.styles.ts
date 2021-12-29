import { css } from 'lit';

export const todoooDialogStyles = css`
  :host {
    display: var(--dialog-display, none);
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .question {
    width: calc(100% - 4rem);
    max-width: 60rem;
    color: var(--color-highlight);
    font-size: var(--font-size-normal);
    margin: 0 auto var(--spacing-large);
    z-index: 1;
    text-align: center;
    line-height: var(--line-height);
  }

  .buttons {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: var(--spacing-extra-large);
    z-index: 1;
  }
`;

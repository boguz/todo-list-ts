import { css } from 'lit';

export const todoooStageStyles = css`
  :host {
    display: block;
    background-color: var(--color-bg-base);
    min-height: calc(100vh - var(--topbar-height));
    width: 100%;
    padding: var(--spacing-large) var(--spacing-normal) var(--spacing-normal);
  }

  :host * {
    margin: 0;
  }
`;

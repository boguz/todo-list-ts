import { css } from 'lit';

export const todoooProgressStyles = css`
  :host {
    display: flex;
    flex-direction: column;
    margin-bottom: var(--spacing-large);
  }

  .progress__header {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--spacing-extra-small);
  }

  .progress__text,
  .progress__percentage {
    color: var(--color-text-secondary);
    font-size: var(--font-size-smaller);
    margin: 0;
  }

  .progress__progress-background {
    width: 100%;
    height: var(--progress-height);
    background-color: var(--color-bg-surface);
    position: relative;
    border-radius: var(--border-radius-normal);
    overflow: hidden;
  }

  .progress__progress-bar {
    height: var(--progress-height);
    width: calc(var(--progress-width) * 1%);
    background-color: var(--color-highlight);
    position: absolute;
    left: 0;
    top: 0;
    border-radius: var(--border-radius-normal);
    transition: width var(--transition-speed) ease-in-out;
  }
`;

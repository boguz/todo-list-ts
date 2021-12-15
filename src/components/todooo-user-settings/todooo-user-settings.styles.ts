import { css } from 'lit';

export const todoooUserSettingsStyles = css`
  :host {
    pointer-events: none;
    opacity: 0;
    transition: opacity var(--transition-speed) ease-in-out;
  }

  :host([visible]) {
    pointer-events: all;
    opacity: 1;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .user-settings__content {
    background-color: var(--color-bg-surface);
    padding: var(--spacing-normal);
    position: fixed;
    top: var(--topbar-height);
    right: var(--spacing-normal);
    border-radius: var(--border-radius-normal);
  }

  .user-settings__content::before {
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 var(--spacing-small) var(--spacing-small)
      var(--spacing-small);
    border-color: transparent transparent var(--color-bg-surface) transparent;
    position: absolute;
    top: 0;
    right: var(--spacing-small);
    transform: translateY(-100%);
  }

  .user-settings__user-name {
    margin-top: 0;
    font-family: var(--font-family-headline);
    color: var(--color-text-primary);
  }
`;

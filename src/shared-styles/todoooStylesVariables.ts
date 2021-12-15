import { css } from 'lit';

export const todoooSharedVariables = css`
  :host {
    --color-bg-base: #26282c;
    --color-bg-surface: #30343a;
    --color-text-primary: #f4f2ed;
    --color-text-secondary: #777779;
    --color-highlight: #f7d254;

    --spacing-normal: 1rem;
    --spacing-small: calc(var(--spacing-normal) / 2);
    --spacing-extra-small: calc(var(--spacing-normal) / 4);
    --spacing-large: calc(var(--spacing-normal) * 2);
    --spacing-extra-large: calc(var(--spacing-normal) * 4);

    --font-family-headline: 'Montserrat', sans-serif;
    --font-family-text: 'Roboto', sans-serif;
    --font-size-normal: 1rem;
    --font-size-small: 0.875rem;
    --font-size-bigger: 1.25rem;

    /* TOPBAR */
    --topbar-height: 64px;
    --topbar-logo-height: 20px;
    --topbar-avatar-size: 32px;
  }
`;

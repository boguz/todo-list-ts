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
    --font-size-big: 2rem;

    /* TOPBAR */
    --topbar-height: 4rem;
    --topbar-logo-height: 1.25rem;
    --topbar-avatar-size: 2rem;

    /* LOADER */
    --loader-height: 0.25rem;
    --loader-animation-duration: 1s;

    /* ADD BUTTON */
    --add-button-size: 2rem;
  }
`;

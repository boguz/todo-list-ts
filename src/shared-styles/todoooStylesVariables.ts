import { css } from 'lit';

export const todoooSharedVariables = css`
  :host {
    --color-bg-base: #26282c;
    --color-bg-surface: #30343a;
    --color-text-primary: #f4f2ed;
    --color-text-secondary: #777779;
    --color-highlight: #f7d254;
    --color-highlight-hover: #ffbe01;
    --color-warning: #ce6880;
    --color-warning-hover: #fe6488;

    --spacing-normal: 1rem;
    --spacing-small: calc(var(--spacing-normal) / 2);
    --spacing-extra-small: calc(var(--spacing-normal) / 4);
    --spacing-large: calc(var(--spacing-normal) * 2);
    --spacing-extra-large: calc(var(--spacing-normal) * 4);

    --transition-speed: 0.25s;

    --border-radius-normal: 0.125rem;

    --font-family-headline: 'Montserrat', sans-serif;
    --font-family-text: 'Roboto', sans-serif;
    --font-size-normal: 1rem;
    --font-size-small: 0.875rem;
    --font-size-smaller: 0.75rem;
    --font-size-bigger: 1.25rem;
    --font-size-big: 2rem;

    /* ICONS */
    --todooo-icon-chevron: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTcuNDEsOC41OEwxMiwxMy4xN0wxNi41OSw4LjU4TDE4LDEwTDEyLDE2TDYsMTBMNy40MSw4LjU4WiIgLz48L3N2Zz4=');
    --todooo-icon-checkbox: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEwLDE3TDUsMTJMNi40MSwxMC41OEwxMCwxNC4xN0wxNy41OSw2LjU4TDE5LDhNMTIsMkExMCwxMCAwIDAsMCAyLDEyQTEwLDEwIDAgMCwwIDEyLDIyQTEwLDEwIDAgMCwwIDIyLDEyQTEwLDEwIDAgMCwwIDEyLDJaIiAvPjwvc3ZnPg==');
    --todooo-icon-delete: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTksM1Y0SDRWNkg1VjE5QTIsMiAwIDAsMCA3LDIxSDE3QTIsMiAwIDAsMCAxOSwxOVY2SDIwVjRIMTVWM0g5TTcsNkgxN1YxOUg3VjZNOSw4VjE3SDExVjhIOU0xMyw4VjE3SDE1VjhIMTNaIiAvPjwvc3ZnPg==');

    /* TOPBAR */
    --topbar-height: 4rem;
    --topbar-logo-height: 1.25rem;
    --topbar-avatar-size: 2rem;

    /* LOADER */
    --loader-height: 0.25rem;
    --loader-animation-duration: 1s;

    /* ADD BUTTON */
    --add-button-size: 2rem;

    /* LIST */
    --list-chevron-size: 2rem;

    /* LIST ITEM TEASER */
    --list-item-teaser-progress-size: 2rem;
    --list-item-teaser-progress-thickness: 3px;
    --list-item-teaser-progress-percentage: 62;
    --list-item-teaser-delete-icon-size: 1.25rem;

    /* PROGRESS */
    --progress-height: 6px;

    /* TODOS */
    --todo-checkbox-size: 1rem;
    --todo-delete-button-size: 1.25rem;
  }
`;

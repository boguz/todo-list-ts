import { css } from 'lit';

export const todoooLoginStyles = css`
  :host {
    position: relative;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-bg-base);
  }

  .login__logo {
    width: 160px;
  }

  .login__button {
    position: absolute;
    bottom: var(--spacing-extra-large);
    left: 50%;
    transform: translateX(-50%);
  }
`;

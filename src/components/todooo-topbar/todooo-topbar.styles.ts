import { css } from 'lit';

export const todoooTopbarStyles = css`
  :host {
    width: 100%;
    height: var(--topbar-height);
    background-color: var(--color-bg-base);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 var(--spacing-normal);
  }

  .topbar__logo {
    width: auto;
    height: var(--topbar-logo-height);
  }

  .topbar__avatar {
    position: relative;
    height: var(--topbar-avatar-size);
    width: var(--topbar-avatar-size);
    display: block;
    border-radius: 50%;
    border: 2px solid var(--color-highlight);
    background-color: var(--color-bg-surface);
    overflow: hidden;
    cursor: pointer;
  }

  .topbar__avatar-image {
    height: var(--topbar-avatar-size);
    width: var(--topbar-avatar-size);
    position: absolute;
    top: 0;
    left: 0;
  }

  @media (hover: hover) {
    .topbar__avatar:hover {
      outline: 1px solid var(--color-highlight);
    }
  }
`;

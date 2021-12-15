import { css } from 'lit';

export const todoooScrimStyles = css`
  :host {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(0, 0, 0, 0.25);
    backdrop-filter: blur(0.5rem);
    transition: opacity var(--transition-speed) ease-in-out;
  }
`;

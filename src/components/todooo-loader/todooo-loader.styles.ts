import { css } from 'lit';

export const todoooLoaderStyles = css`
  :host {
    display: block;
    width: 100%;
    height: var(--loader-height);
    position: relative;
    pointer-events: none;
    background-color: var(--color-bg-base);
  }

  .loader {
    height: 100%;
    position: absolute;
    background-color: var(--color-highlight);
  }

  :host([visible]) .loader {
    animation: loaderAnimation var(--loader-animation-duration) ease-in-out
      infinite;
  }

  @keyframes loaderAnimation {
    0% {
      left: 0;
      width: 0;
    }
    50% {
      left: 0;
      width: 100%;
    }
    100% {
      left: 100%;
      width: 0;
    }
  }
`;

import { css } from 'lit';

export const todoooListTeaserStyles = css`
  :host {
    position: relative;
    display: grid;
    grid-template-columns: 1fr calc(
        var(--list-item-progress-size) +
          calc(var(--list-item-progress-thickness) * 2)
      );
    grid-gap: var(--spacing-small);
    background-color: var(--color-bg-surface);
    padding: var(--spacing-small);
    border-radius: var(--border-radius-normal);
    align-items: center;
    cursor: pointer;
    border: 1px solid var(--color-bg-base);
  }

  .content__title {
    margin: 0;
    color: var(--color-text-primary);
    text-transform: uppercase;
    font-size: var(--font-size-normal);
  }

  .content__amount {
    margin: 0;
    color: var(--color-text-secondary);
    font-size: var(--font-size-small);
  }

  .progress {
    position: relative;
    height: var(--list-item-progress-size);
    width: var(--list-item-progress-size);
    border-radius: 50%;
    border: var(--list-item-progress-thickness) solid
      var(--color-text-secondary);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .progress::before {
    content: '';
    display: block;
    position: absolute;
    top: calc(var(--list-item-progress-thickness) * -1);
    left: calc(var(--list-item-progress-thickness) * -1);
    height: calc(100% + calc(var(--list-item-progress-thickness) * 2));
    width: calc(100% + calc(var(--list-item-progress-thickness) * 2));
    border-radius: 50%;
    background: radial-gradient(
        closest-side,
        var(--color-bg-surface) calc(100% - var(--list-item-progress-thickness)),
        transparent 0 99.9%,
        white 0
      ),
      conic-gradient(
        var(--color-highlight) calc(var(--list-item-progress-percentage) * 1%),
        var(--color-text-secondary) 0
      );
  }

  .progress__percentage {
    font-size: var(--font-size-smaller);
    color: var(--color-text-secondary);
    z-index: 1;
  }

  .progress__percentage::after {
    content: '%';
  }

  @media (hover: hover) {
    :host(:hover) {
      border: 1px solid var(--color-highlight);
    }

    :host(:hover) .content__title {
      color: var(--color-highlight);
    }
  }
`;

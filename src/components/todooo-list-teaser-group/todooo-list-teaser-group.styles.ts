import { css } from 'lit';

export const todoooListTeaserGroupStyles = css`
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: block;
  }

  :host(:not(:last-child)) {
    margin-bottom: var(--spacing-large) !important;
  }

  .header {
    display: grid;
    grid-template-columns: 1fr var(--list-chevron-size);
    margin: 0 0 var(--spacing-extra-small);
    cursor: pointer;
  }

  .header__title {
    color: var(--color-text-secondary);
    text-transform: uppercase;
    font-size: var(--font-size-bigger);
    margin: 0;
    display: flex;
    align-items: center;
  }

  .header__chevron {
    height: var(--list-chevron-size);
    width: var(--list-chevron-size);
    mask-position: center;
    -webkit-mask-position: center;
    mask-repeat: no-repeat;
    -webkit-mask-repeat: no-repeat;
    mask-size: contain;
    -webkit-mask-size: contain;
    mask-image: var(--todooo-icon-chevron);
    -webkit-mask-image: var(--todooo-icon-chevron);
    background-color: var(--color-text-secondary);
    transition: transform var(--transition-speed) ease-in-out;
  }

  :host([collapsed]) .header__chevron {
    transform: rotate(-180deg);
  }

  .list {
    overflow: hidden;
    max-height: 1000px;
    // transition: max-height var(--transition-speed) ease-in-out;
  }

  :host([collapsed]) .list {
    max-height: 0;
  }

  .no-items {
    color: var(--color-text-secondary);
    margin: 0;
    opacity: 0.35;
    font-size: var(--font-size-small);
  }

  @media (hover: hover) {
    :host(:hover) .header__title {
      color: var(--color-highlight);
    }

    :host(:hover) .header__chevron {
      background-color: var(--color-highlight);
    }
  }
`;

import type { HazelinkItem } from "../data/links";
import { IconSymbol } from "./IconSymbol";

type NavigationCardProps = {
  item: HazelinkItem;
};

export function NavigationCard({ item }: NavigationCardProps) {
  return (
    <a
      className={`nav-card nav-card--${item.variant} nav-card--${item.id}`}
      href={item.href}
      target="_blank"
      rel="noreferrer"
      aria-label={item.ariaLabel}
    >
      <span className="nav-card__icon" aria-hidden="true">
        <IconSymbol id={item.id} />
      </span>
      <span className="nav-card__text">
        <strong>{item.title}</strong>
        <span>{item.description}</span>
      </span>
      <span className="nav-card__arrow" aria-hidden="true">
        <svg viewBox="0 0 24 24" role="img">
          <path
            d="m9 5 7 7-7 7"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  );
}

import { quickLinks } from "../data/links";
import { IconSymbol } from "./IconSymbol";

export function QuickLinks() {
  return (
    <nav className="quick-links" aria-label="Acessos rápidos">
      {quickLinks.map((item) => (
        <a
          className={`quick-button quick-button--${item.id}`}
          href={item.href}
          key={item.id}
          target="_blank"
          rel="noreferrer"
          aria-label={item.ariaLabel}
          title={item.title}
        >
          <IconSymbol id={item.id} />
        </a>
      ))}
    </nav>
  );
}

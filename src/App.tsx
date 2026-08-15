import { HeroSection } from "./components/HeroSection";
import { NavigationCard } from "./components/NavigationCard";
import { navigationCards } from "./data/links";

export default function App() {
  return (
    <main className="page-shell" aria-label="Hazelink do curso Vanessa Muniz">
      <article className="hazelink-card">
        <HeroSection />
        <section className="navigation-list" aria-label="Links principais do curso Vanessa Muniz">
          {navigationCards.map((item) => (
            <NavigationCard key={item.id} item={item} />
          ))}
        </section>
        <footer className="brand-footer">
          <p>
            FEITO COM HAZELINK PARA <strong>VM COSTURA</strong>
          </p>
        </footer>
      </article>
    </main>
  );
}

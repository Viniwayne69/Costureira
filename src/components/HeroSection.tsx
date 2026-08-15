import logo from "../assets/vm-logo.png";
import { QuickLinks } from "./QuickLinks";

const courseHighlights = ["Do zero", "Método prático", "Comunidade"];

export function HeroSection() {
  return (
    <header className="hero-section">
      <div className="hero-content">
        <img className="vm-logo" src={logo} alt="Vanessa Muniz Atelier" loading="eager" decoding="sync" />
        <p className="brand-name">Curso Vanessa Muniz</p>
        <h1>
          <span>Aprenda corte</span>
          <span>e costura</span>
          <span>com método</span>
        </h1>
        <span className="title-rule" aria-hidden="true" />
        <p className="intro-copy">
          Do primeiro molde ao acabamento, aulas práticas para criar peças com <strong>confiança</strong>
        </p>
        <div className="course-highlights" aria-label="Destaques do curso">
          {courseHighlights.map((item) => (
            <span className="course-chip" key={item}>{item}</span>
          ))}
        </div>
        <QuickLinks />
      </div>
    </header>
  );
}
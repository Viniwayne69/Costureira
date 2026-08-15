import logo from "../assets/vm-logo.png";
import { QuickLinks } from "./QuickLinks";

export function HeroSection() {
  return (
    <header className="hero-section">
      <div className="hero-content">
        <img className="vm-logo" src={logo} alt="Vanessa Muniz Atelier" loading="eager" decoding="sync" />
        <p className="brand-name">Vanessa Muniz Atelier</p>
        <h1>
          <span>Transformando</span>
          <span>talento com</span>
          <span>costura</span>
        </h1>
        <span className="title-rule" aria-hidden="true" />
        <p className="intro-copy">
          Curso, comunidade e atendimento da <strong>VM</strong> em um só lugar
        </p>
        <QuickLinks />
      </div>
    </header>
  );
}

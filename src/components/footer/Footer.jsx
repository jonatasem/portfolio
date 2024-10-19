import "./Footer.scss";

import RevealOnScroll from '../RevealOnScroll/RevealOnScroll'

export default function Footer() {
  return (
    <RevealOnScroll>
      <footer className="container-footer">
        <p>
          &copy; {new Date().getFullYear()} Jonatas Elieser Moreira. Todos os direitos
          reservados!
        </p>
    </footer>
    </RevealOnScroll>
  );
}

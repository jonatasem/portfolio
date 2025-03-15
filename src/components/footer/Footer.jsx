import "./Footer.css";

const Footer = ({ name = "Jonatas Moreira" }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container-footer" role="contentinfo">
      <p>
        <a href="https://www.linkedin.com/in/jonatas-elieser-moreira-948632270/">
          {name}
        </a>{" "}
        © {currentYear} Todos os Direitos Reservados
      </p>
    </footer>
  );
};

export default Footer;

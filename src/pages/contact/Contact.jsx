import "./Contact.scss";
import imgFace from "../../assets/img/svg/facebook.svg";
import imgInsta from "../../assets/img/svg/instagram.svg";
import imgLinkedIn from "../../assets/img/svg/linkedin.svg";
import imgWhats from "../../assets/img/svg/whatsapp.svg";

export default function Contact() {
  return (
    <section className="container-contact visible" id="contact">
      <article className="title-contact">
        <h1>Contate-Nos</h1>
        <p>Nosso endereço de correspondência é:</p>
        <p>Keiko Yamashiro, 60</p>
        <p>Lucélia, São Paulo</p>
        <p>Telefone: 18 99193-7096</p>
        <div className="rede-sociais-contact visible">
          <li>
            <a href="https://www.facebook.com/profile.php?id=100079143820691">
              <img src={imgFace} alt="facebook" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/jonatasemoreira01/">
              <img src={imgInsta} alt="instagram" />
            </a>
          </li>
          <li>
            <a href="https://wa.me/5518991937096?text=Ol%C3%A1%20Jonatas">
              <img src={imgWhats} alt="whatsapp" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jonatas-elieser-moreira-948632270/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <img src={imgLinkedIn} alt="linkedin" />
            </a>
          </li>
        </div>
      </article>
      <article className="container-contact-form visible">
        <h3>Grande visão sem ótimas pessoas é irrelevante.</h3>
        <p>Vamos trabalhar juntos.</p>
        <form className="form-contact visible">
          <article className="form-group visible">
            <input
              type="text"
              placeholder="Enter your Name"
              id="name"
              name="name"
              required
            />
          </article>
          <article className="form-group visible">
            <input
              type="email"
              placeholder="Enter a valid email address"
              id="email"
              name="email"
              required
            />
          </article>
          <article className="form-group visible">
            <textarea
              id="message"
              placeholder="Enter your message"
              name="message"
              rows="4"
              required
            ></textarea>
          </article>
          <button className="btn-contact visible" type="submit">
            <a href="">
              <span>Enviar</span>
            </a>
          </button>
        </form>
      </article>
    </section>
  );
}

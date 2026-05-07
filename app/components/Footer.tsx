import { Icon } from "./Icons";

export function Footer() {
  return (
    <footer className="footer" id="contacto">
      <div className="container">
        <div className="top">
          <div>
            <div className="brand">
              <span className="logomark">a</span>
              <span>alfa</span>
            </div>
            <p className="blurb">
              Fábrica de publicidad exterior. Vallas, pantallas LED,
              gigantografías y mobiliario urbano. Caracas, Venezuela.
            </p>
            <div className="socials">
              <a href="https://www.instagram.com/alfapubli/" aria-label="Instagram" target="_blank" rel="noreferrer"><Icon.ig width="18" height="18" /></a>
              <a href="https://www.facebook.com/profile.php?id=100086876265052" aria-label="Facebook" target="_blank" rel="noreferrer"><Icon.fb width="18" height="18" /></a>
              <a href="https://tr.ee/NkqP5ieoTZ" aria-label="TikTok" target="_blank" rel="noreferrer"><Icon.tiktok width="18" height="18" /></a>
              <a href="https://tr.ee/UaDi3xVGnQ" aria-label="WhatsApp" target="_blank" rel="noreferrer"><Icon.whatsapp width="18" height="18" /></a>
              <a href="https://tr.ee/NkqP5ieoTZ" aria-label="Linktree" target="_blank" rel="noreferrer"><Icon.link width="18" height="18" /></a>
            </div>
          </div>
          <div>
            <h4>Servicios</h4>
            <ul>
              <li><a href="#servicios">Vallas</a></li>
              <li><a href="#servicios">Pantallas LED</a></li>
              <li><a href="#servicios">Gigantografías</a></li>
              <li><a href="#servicios">Mobiliario urbano</a></li>
              <li><a href="#servicios">Mantenimiento</a></li>
            </ul>
          </div>
          <div>
            <h4>Compañía</h4>
            <ul>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#portafolio">Portafolio</a></li>
              <li><a href="#proceso">Proceso</a></li>
              <li><a href="#cotiza">Cotizar</a></li>
            </ul>
          </div>
          <div>
            <h4>Contacto</h4>
            <ul className="contactlist">
              <li className="contactrow">
                <span className="ic"><Icon.phone width="16" height="16" /></span>
                <span>
                  +58 212 000 0000
                  <br />
                  <span style={{ color: "rgba(255,255,255,.5)", fontSize: 12 }}>L–V · 8:00 a 17:00</span>
                </span>
              </li>
              <li className="contactrow">
                <span className="ic"><Icon.mail width="16" height="16" /></span>
                <span>contacto@alfapublicidad.com</span>
              </li>
              <li className="contactrow">
                <span className="ic"><Icon.pin width="16" height="16" /></span>
                <span>Caracas, Venezuela</span>
              </li>
              <li className="contactrow">
                <span className="ic"><Icon.ig width="16" height="16" /></span>
                <a href="https://www.instagram.com/alfapubli/" target="_blank" rel="noreferrer">@alfapubli</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          <span>© 2026 Alfa Publicidad y Mantenimiento C.A. — Todos los derechos reservados</span>
          <span><a href="#">Aviso legal</a> · <a href="#">Privacidad</a></span>
        </div>
      </div>
    </footer>
  );
}

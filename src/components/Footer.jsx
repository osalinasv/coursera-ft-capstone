import "../styles/components/Footer.css";
import logo from "../assets/logo-solid-vertical.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container mx-auto px-gutter">
        <div className="footer-logo-cont">
          <img
            src={logo}
            alt="Little Lemon"
            className="footer-logo"
            height={240}
            width={136}
          />
        </div>

        <div className="footer-content">
          <section>
            <h3 className="font-lg font-bold mb-4">Sitemap</h3>

            <nav className="footer-nav">
              <ul className="list-none" role="list">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/#about">About</a>
                </li>
                <li>
                  <a href="/#menu">Menu</a>
                </li>
                <li>
                  <a href="/reserve">Reservations</a>
                </li>
                <li>
                  <a href="/order">Order Online</a>
                </li>
              </ul>
            </nav>
          </section>

          <section>
            <h3 className="font-lg font-bold mb-4">Contact</h3>

            <p className="mb-2">3011 S Harlem Ave, Chicago, IL 60453</p>
            <p className="mb-2">
              <a href="tel:312-593-2744">(312) 593 2744</a>
            </p>
            <p>
              <a href="mailto:contact@littlelemon.com">
                contact@littlelemon.com
              </a>
            </p>
          </section>

          <section>
            <h3 className="font-lg font-bold mb-4">Social Media</h3>
            <div></div>
          </section>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

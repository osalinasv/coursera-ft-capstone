import { SiFacebook, SiInstagram, SiTwitter } from "react-icons/si";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo-solid-vertical.svg";
import "./styles.css";

export function Footer() {
  return (
    <footer className="footer bg-primary text-inverse py-16">
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
                <li className="mb-2">
                  <Link to="/">Home</Link>
                </li>
                <li className="mb-2">
                  <Link to="/#about">About</Link>
                </li>
                <li className="mb-2">
                  <Link to="/menu">Menu</Link>
                </li>
                <li className="mb-2">
                  <Link to="/booking">Reservations</Link>
                </li>
                <li className="mb-2">
                  <Link to="/order">Order Online</Link>
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
            <div className="footer-socials">
              <a
                href="https://facebook.com/"
                rel="noopener noreferrer"
                target="_blank"
                title="Facebook"
              >
                <SiFacebook aria-hidden="true" />
              </a>
              <a
                href="https://twitter.com/"
                rel="noopener noreferrer"
                target="_blank"
                title="Twitter"
              >
                <SiTwitter aria-hidden="true" />
              </a>
              <a
                href="https://instagram.com/"
                rel="noopener noreferrer"
                target="_blank"
                title="Instagram"
              >
                <SiInstagram aria-hidden="true" />
              </a>
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
}

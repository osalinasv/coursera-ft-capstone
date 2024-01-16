import "../styles/components/Header.css";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const navigationMenu = [
  { label: "Home", to: "/" },
  { label: "About", to: "/#about" },
  { label: "Menu", to: "/#menu" },
  { label: "Reservations", to: "/reserve" },
  { label: "Order Online", to: "/order" },
];

function Header() {
  return (
    <header className="header">
      <div className="header-container container mx-auto px-gutter">
        <Link to="/">
          <img
            src={logo}
            alt="Little Lemon"
            className="header-logo"
            width={200}
            height={56}
          />
        </Link>

        <nav className="navigation">
          <ul className="navigation-lg list-none" role="list">
            {navigationMenu.map(({ label, ...rest }) => (
              <li key={label}>
                <Link {...rest} className="navigation-item font-lg font-bold">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

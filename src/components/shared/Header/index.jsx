import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import "./styles.css";

const navigationMenu = [
  { label: "Home", to: "/" },
  { label: "About", to: "/#about" },
  { label: "Menu", to: "/menu" },
  { label: "Reservations", to: "/booking" },
  { label: "Order Online", to: "/order" },
];

export function Header() {
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

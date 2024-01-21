import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { Button } from "../../ui/Button";
import "./styles.css";

const navigationMenu = [
  { label: "Home", to: "/" },
  { label: "About", to: "/#about" },
  { label: "Menu", to: "/menu" },
  { label: "Reservations", to: "/booking" },
  { label: "Order Online", to: "/order" },
];

function NavigationLarge() {
  return (
    <nav className="navigation navigation-lg navigation-inline">
      <ul className="list-none" role="list">
        {navigationMenu.map(({ label, ...rest }) => (
          <li key={label}>
            <Link {...rest} className="navigation-item font-lg font-bold">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function NavigationSmall() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="navigation navigation-sm">
      <Button
        size="icon"
        aria-haspopup="menu"
        aria-expanded={expanded}
        onClick={() => setExpanded(!expanded)}
      >
        <FaBars />
      </Button>

      <nav
        role="menu"
        className="navigation-dropdown"
        data-expanded={expanded}
        inert={!expanded ? "" : null}
      >
        <ul className="list-none" role="list">
          {navigationMenu.map(({ label, ...rest }) => (
            <li key={label}>
              <Link
                {...rest}
                className="navigation-item font-lg font-bold"
                onClick={() => setExpanded(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

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

        <NavigationLarge />
        <NavigationSmall />
      </div>
    </header>
  );
}

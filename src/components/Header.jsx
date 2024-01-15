import "../styles/components/Header.css";
import logo from "../assets/logo-light.svg";

const navigationMenu = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Menu", href: "/#menu" },
  { label: "Reservations", href: "/reserve" },
  { label: "Order Online", href: "/order" },
];

function Header() {
  return (
    <header className="header">
      <div className="header-container container mx-auto px-gutter">
        <a href="/">
          <img
            src={logo}
            alt="Little Lemon"
            className="header-logo"
            width={200}
            height={56}
          />
        </a>

        <nav className="navigation">
          <ul className="navigation-lg">
            {navigationMenu.map(({ label, ...rest }) => (
              <li key={label}>
                <a {...rest} className="navigation-item">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

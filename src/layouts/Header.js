import { Link } from "react-router-dom"

import { header, link } from "./Header.module.scss";

const Header = () => {
  return (
    <header className={header}>
      <Link
        className={link}
        to="/"
      >
        <h1>React Hooks</h1>
      </Link>
    </header>
  );
}

export default Header;
import { useState } from "react";
import ModeToggle from "./ModeToToggle";

function Header({ data }) {
  return (
    <header>
      <span>{data}</span>
      <nav className="nav-link">
        <ul className="nav-link-items">
          <li>
            <a href="/">Book</a>
          </li>
          <li>
            <a href="/quote">Quote</a>
          </li>
        </ul>
        <ModeToggle />
      </nav>
    </header>
  );
}

export default Header;

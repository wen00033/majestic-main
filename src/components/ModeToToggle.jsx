import * as React from "react";
import { Moon, Sun } from "lucide-react";

export function ModeToggle() {
  const [theme, setThemeState] = React.useState(true);

  const toggle = function () {
    setThemeState((el) => !el);
    const isDark = document.querySelector("html");
    if (theme) {
      isDark.classList.add("dark");
      isDark.classList.remove("light");
    } else {
      isDark.classList.remove("dark");
      isDark.classList.add("light");
    }
  };

  return (
    <button className="buttonToggle" onClick={toggle}>
      {theme ? <Moon /> : <Sun />}
      <span>{theme ? "dark mode" : "light mode"}</span>
    </button>
  );
}

export default ModeToggle;

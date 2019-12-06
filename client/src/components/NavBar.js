import React from "react";
import useDarkMode from "./hooks/useDarkMode";
import Button from "@material-ui/core/Button";

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode("change", false);

  const toggleDarkMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav data-testid="nav_display" className="navbar">
      <h1>WORLD CUP PLAYERS BRUH</h1>
      <Button variant="contained" color="primary" onClick={toggleDarkMode}>
        Dark Mode
      </Button>
    </nav>
  );
};

export default Navbar;

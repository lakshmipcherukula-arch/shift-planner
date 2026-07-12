import React from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import "../styles/Layout.css";

function Layout({ children }) {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "My Schedule", path: "/schedule" },
    { name: "Find Shifts", path: "/find-shifts" },
    { name: "My Profile", path: "/profile" },
    { name: "Contact us", path: "/contact" },
  ];

  return (
    <div className="app-container">
      <Header />
      <nav>
        {navLinks.map((link) => (
          <NavLink key={link.name} to={link.path}>
            {link.name}
          </NavLink>
        ))}
      </nav>
      <main>{children}</main>
    </div>
  );
}

export default Layout;

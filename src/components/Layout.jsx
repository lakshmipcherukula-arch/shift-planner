import React from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header";

function Layout({ children }) {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "My Schedule", path: "/schedule" },
    { name: "Find Shifts", path: "/find-shifts" },
    { name: "My Profile", path: "/profile" },
    { name: "Contact us", path: "/contact" },
  ];

  return (
    <div className="app-container" style={{fontFamily: "sans-serif"}}>
      <Header/>
      <nav>
        {navLinks.map((link) => (
          <NavLink key={link.name} to={link.path} style={{ marginRight: "1rem" }}>
            {link.name}
          </NavLink>
        ))}
      </nav>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
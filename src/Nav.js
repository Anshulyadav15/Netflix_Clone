import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const eventHandler = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    };
    window.addEventListener("scroll", eventHandler);
    return () => {
      window.removeEventListener("scroll", eventHandler);
    };
  }, []);

  return (
    <nav className={`navbar ${show && "navbar-dark"}`}>
      <img
        className="netflix-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1200px-Logonetflix.png"
        alt="Netflix Logo"
      />

      <img
        className="netflix-avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Netflix-avatar.png/800px-Netflix-avatar.png"
        alt="Netflix Avatar"
      />
    </nav>
  );
}

export default Nav;

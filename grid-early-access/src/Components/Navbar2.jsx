import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

function Navbar2({ scrollToContactForm }) {
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [menu, setMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const [selected, setSelected] = useState(false);

  const toggle = () => {
    if (selected === true) {
      return setSelected(false);
    }
    setSelected(true);
  };

  const toggleMenu = () => {
    setMenu(!menu);
    setSelected(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setIsSticky(true) : setIsSticky(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`navbar ${isSticky ? "sticky" : ""}  `}>
        <div className="nav-items">
          <Link href="/">
            <img alt="" className="navbar-logo" src="/LogoAlpha.svg" />
          </Link>
          <div className="login-register">
            <Link target="_blank" href="https://discord.gg/6MVnyBG3">
              <button className="boton-landing1">JOIN DISCORD</button>
            </Link>
            {/* <Link href="register">
              <button className="boton-landing">Register</button>
            </Link> */}
          </div>
        </div>
      </nav>
      {menu ? <MenuMobile /> : ""}
    </>
  );
}

export default Navbar2;
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer2 = ({ scrollToContactForm }) => {
  const openIntercom = () => {
    window.Intercom("show");
  };
  return (
    <div className="fondo-footer">
      <section className="container-footer">
        <div className="columnas">
          <div className="columna-principal">
            <div className="footer-titulo-principal">GRID CLOUD</div>
            <div className="footer-parrafo">
              Grid Cloud is a decentralized Web3 cloud infrastructure comprised
              of user-operated, scalable and globally distributed computational
              nodes.
            </div>
          </div>

          <div className="segunda-columna">
            <Image alt="" src="/LogoAlpha.svg" height={180} width={180} />
            <div className="redes-footer">
              <a
                target="_blank"
                href="https://www.linkedin.com/company/ongridrun"
              >
                <img className="icon-redes" src={"/linkedin.png"} />
              </a>

              <a target="_blank" href="https://discord.gg/6MVnyBG3">
                <img className="icon-redes" src={"/discord (1).png"} />
              </a>

              <a target="_blank" href="https://x.com/OnGridRun">
                <img className="icon-redes" src={"/twitter.png"} />
              </a>
            </div>
          </div>
        </div>
        <div className="licencias-footer">
          <span>
            {" "}
            <a href="#"> © 2025 Grid Cloud </a>{" "}
          </span>
        </div>
      </section>
    </div>
  );
};

export default Footer2;

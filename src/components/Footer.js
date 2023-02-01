import React from "react";
import Logo from "../assets/logoBlanc.jpg";
import "../style/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logos">
        <img src={Logo} alt="Logo Kasa"></img>
      </div>
      <div className="reserved">
        <p>© 2020 Kasa All rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;

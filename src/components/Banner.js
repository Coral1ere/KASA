import React from "react";
import Banniere from "../assets/banniere.jpg";
import "../style/banner.css";
import BanniereMob from "../assets/bannieremob.jpg";

const Banner = () => {
  return (
    <div className="banniere">
      <img
        className="banniereImg"
        src={Banniere}
        alt="Bannière : chez vous, partout et ailleurs"
      ></img>
      <img
        className="banniereImgMob"
        src={BanniereMob}
        alt="Bannière pour mobile"
      ></img>
      <p>
        Chez vous,
        <br /> partout et ailleurs
      </p>
    </div>
  );
};

export default Banner;

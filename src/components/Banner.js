import React from "react";
import Banniere from "../assets/banniere.jpg";
import "../style/banner.css";

const Banner = () => {
  return (
    <div className="banniere">
      <p>Chez vous, partout et ailleurs</p>
      <img
        className="banniereImg"
        src={Banniere}
        alt="Bannière : chezvous, partout et ailleurs"
      ></img>
    </div>
  );
};

export default Banner;

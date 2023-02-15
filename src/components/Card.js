import React from "react";
import Logements from "../data/logements.json";
import { Link } from "react-router-dom";
import "../style/card.css";

const Card = () => {
  return (
    <div className="LogementsCard">
      {Logements.map((item) => {
        const { cover, title, id } = item;
        return (
          <div key={id} className="card">
            <Link to={`./FicheLogement/${id} `} className="imgCard">
              <img className="cardImg" src={cover} alt={"images Hôtels"} />
              <div className="cardImgImg">
                <p className="cardImgP">{title}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Card;

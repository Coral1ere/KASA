import React from "react";
import Logements from "../data/logements.json";
import { Link } from "react-router-dom";
import "../style/card.css";

const Card = () => {
  return (
    <div className="LogementsCard">
      {Logements.map((item) => {
        const { title, id } = item;
        console.log(item.cover);
        return (
          <Link to={`./FicheLogement/${id}`} className="imgCard">
            <div
              key={id}
              className="card"
              style={{
                backgroundImage: "url(" + item.cover + ")",
              }}
            >
              <div className="forGradient">
                <p className="cardImgP">{title}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Card;

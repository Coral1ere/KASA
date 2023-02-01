import React from "react";
import Logements from "../data/logements.json";
import { NavLink } from "react-router-dom";
import "../style/card.css";

const Card = (Logement) => {
  return (
    <div className="LogementsCard">
      {Logements.map((item) => {
        const { cover, title, id } = item;
        return (
          <div key={id} className="card">
            <NavLink to={"logements/" + id} className="img-link">
              <img className="img-cover" src={cover} alt={"images Hôtels"} />
              <p className="loc-card">{title}</p>
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default Card;

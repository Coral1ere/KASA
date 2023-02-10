import { useState } from "react";
import vectorUp from "../assets/vectorUp.png";
import "../style/menuDeroulant.css";

export default function MenuDeroulant(props) {
  const [isOpen, setIsOpen] = useState(false);
  const isOpenChange = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="menuDeroulant">
        <div className="menuDeroulantTitre" onClick={isOpenChange}>
          <h3>{props.title}</h3>
          <img
            className={isOpen ? "flecheHaute" : "flecheBasse"}
            src={vectorUp}
            alt="Fleche vers le haut"
          />
        </div>

        {isOpen && (
          <div
            className={
              isOpen ? "menuDeroulantisOpen slide" : "menuDeroulantisOpen"
            }
          >
            <div className="menuDeroulantDescription">
              <p>{props.description}</p>
            </div>
            <div className="menuDeroulantEquipements">
              <p>{props.equipement}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

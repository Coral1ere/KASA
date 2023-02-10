import EtoilesVides from "../assets/EtoileVide.png";
import EtoilesPleines from "../assets/EtoilePleine.png";
import "../style/rating.css";
import "../data/logements.json";

export default function Rating({ rating }) {
  const ratingValue = [];

  for (let i = 0; i < rating; i++) {
    ratingValue.push(
      <img
        key={"EtoilesPleines" + i}
        className="noteEtoilePleine"
        src={EtoilesPleines}
        alt="Etoiles pleines"
      />
    );
  }

  for (let x = ratingValue.length; x < 5; x++) {
    ratingValue.push(
      <img
        key={"EtoilesVides" + x}
        className="noteEtoileVide"
        src={EtoilesVides}
        alt="Etoiles vides"
      />
    );

    return (
      <div className="notes">
        <span key={rating}>{ratingValue}</span>
      </div>
    );
  }
}

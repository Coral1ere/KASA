import EtoilesVides from "../assets/EtoileVide.png";
import EtoilesPleines from "../assets/EtoilePleine.png";

export default function Notes({ notes }) {
  const notesValeur = [];

  for (let i = 0; i < notes; i++) {
    notesValeur.push(
      <img
        key={"etoilePleine" + i}
        className="noteEtoilePleine"
        src={EtoilesPleines}
        alt="Etoiles pleines"
      />
    );
  }

  for (let x = notesValeur.length; x < 5; x++) {
    notesValeur.push(
      <img
        key={"etoileVide" + x}
        className="noteEtoileVide"
        src={EtoilesVides}
        alt="Etoiles vides"
      />
    );

    return (
      <div className="notes">
        <span key={notes}>{notesValeur}</span>
      </div>
    );
  }
}
